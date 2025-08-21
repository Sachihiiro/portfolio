<template>
  <v-app-bar flat :color="deepBlue">
    <v-app-bar-nav-icon
      class="d-md-none"
      @click="$emit('update:drawer', !drawer)"
      color="white"
    />
    <v-toolbar-title class="font-weight-bold white--text"> RS </v-toolbar-title>
    <v-spacer />
    <div class="d-none d-md-flex">
      <v-btn
        v-for="item in navItems"
        :key="item.text"
        variant="text"
        :to="item.to"
        class="mx-2 white--text"
        @click="$emit('scroll-to-section', item.to)"
      >
        {{ item.text }}
      </v-btn>
    </div>
  </v-app-bar>
</template>
<script setup>
defineProps(["navItems", "deepBlue", "drawer"]);
defineEmits(["update:drawer", "scroll-to-section"]);
</script>
<style scoped>
.v-app-bar {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  border-bottom: 1px solid #eee;
}
</style>
