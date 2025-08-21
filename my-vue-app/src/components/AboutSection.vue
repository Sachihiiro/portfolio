<template>
  <section id="about" class="section" :style="{ background: lightBlue }">
    <h2 class="text-center mb-8 font-weight-bold" :style="{ color: deepBlue }">
      About
    </h2>
    <v-row justify="center">
      <v-col cols="12" md="6" class="text-center">
        <p class="grey--text text--darken-1">
          Clean code and beautiful blue hues. Experienced in Vue, Vuetify, and
          modern JavaScript. Always learning, always building.
        </p>
      </v-col>
    </v-row>
  </section>
</template>
<script setup>
defineProps(["deepBlue", "lightBlue"]);
</script>
<style scoped>
.section {
  padding: 64px 0 32px 0;
}
</style>
