<template>
  <v-footer :color="deepBlue" height="auto" class="app-footer py-3">
    <v-row align="center" justify="space-between" class="w-100 px-4">
      <!-- Quick Links -->

      <!-- Social Icons -->
      <div class="footer-social d-flex align-center">
        <v-btn
          icon
          href="mailto:your.email@example.com"
          target="_blank"
          class="white--text mx-1"
          variant="text"
        >
          <v-icon>mdi-email</v-icon>
        </v-btn>
        <v-btn
          icon
          href="https://github.com/yourusername"
          target="_blank"
          class="white--text mx-1"
          variant="text"
        >
          <v-icon>mdi-github</v-icon>
        </v-btn>
        <v-btn
          icon
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          class="white--text mx-1"
          variant="text"
        >
          <v-icon>mdi-linkedin</v-icon>
        </v-btn>
      </div>
      <!-- Copyright -->
      <div
        class="footer-copyright white--text text-center ml-2"
        style="font-size: 0.98rem"
      >
        &copy; {{ new Date().getFullYear() }} Rex Sobrido
      </div>
    </v-row>
  </v-footer>
</template>

<script setup>
defineProps(["deepBlue"]);
</script>

<style scoped>
.app-footer {
  min-height: 60px;
}
.footer-links v-btn,
.footer-social v-btn {
  font-size: 1rem;
}
</style>
