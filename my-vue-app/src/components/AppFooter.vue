<template>
  <v-footer class="justify-center" height="60" :color="deepBlue">
    <span class="white--text">
      &copy; {{ new Date().getFullYear() }} Rex Sobrido
    </span>
  </v-footer>
</template>
<script setup>
defineProps(["deepBlue"]);
</script>
