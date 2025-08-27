<template>
  <v-app-bar flat :color="deepBlue">
    <!-- Hamburger for mobile -->
    <v-app-bar-nav-icon
      class="d-md-none"
      @click="$emit('update:drawer', !drawer)"
      color="white"
    />
    <!-- Branding -->
    <v-toolbar-title class="font-weight-bold white--text">RS</v-toolbar-title>
    <v-spacer />
    <!-- Desktop Nav -->
    <div class="d-none d-md-flex">
      <v-btn
        v-for="item in navItems"
        :key="item.text"
        variant="text"
        :to="item.to"
        class="mx-2 nav-link white--text"
        :class="{ 'active-nav': activeSection === item.to }"
        @click="$emit('scroll-to-section', item.to)"
        :aria-current="activeSection === item.to ? 'page' : null"
      >
        {{ item.text }}
      </v-btn>
    </div>
  </v-app-bar>
</template>

<script setup>
defineProps(["navItems", "deepBlue", "drawer", "activeSection"]);
defineEmits(["update:drawer", "scroll-to-section"]);
</script>

<style scoped>
.v-app-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  border-bottom: 1px solid #eee;
}
.nav-link {
  padding-top: 12px;
  padding-bottom: 12px;
  font-size: 1rem;
  transition: color 0.2s, border-bottom 0.2s;
}
.nav-link:hover,
.nav-link:focus {
  color: #fff !important; /* Gold on hover */
  border-bottom: 2px solid #fff;
}
.active-nav {
  border-bottom: 2px solid #fff;
  font-weight: bold;
}
</style>
