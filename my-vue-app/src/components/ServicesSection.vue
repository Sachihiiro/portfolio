<template>
  <section id="services" class="section" :style="{ background: lightBlue }">
    <h2 class="text-center mb-6 font-weight-bold" :style="{ color: deepBlue }">
      Services
    </h2>
    <!-- Mention types of clients served -->
    <div class="text-center mb-6 grey--text text--darken-2">
      I work with startups, small businesses, and enterprises to deliver
      tailored solutions.
    </div>
    <v-container>
      <v-row justify="center" align="stretch" class="gap-y-4">
        <v-col
          v-for="(service, i) in services"
          :key="i"
          cols="12"
          sm="6"
          md="4"
          class="d-flex"
        >
          <v-card
            flat
            class="pa-4 elevation-1 d-flex flex-column justify-space-between service-card"
          >
            <div>
              <v-icon :color="deepBlue" size="36" class="mb-2">
                {{ service.icon }}
              </v-icon>
              <h3 class="font-weight-bold mb-2" :style="{ color: deepBlue }">
                {{ service.title }}
              </h3>
              <div class="grey--text text--darken-1">
                {{ service.description }}
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
      <!-- Call-to-Action Button with encouragement -->
      <div class="text-center mt-8">
        <div class="mb-2 grey--text text--darken-1">
          Ready to discuss your project? Let's build something great together!
          <br />
          <span class="font-italic"
            >Trusted by startups and enterprises. I typically respond within 24
            hours.</span
          >
        </div>
        <v-btn color="primary" large href="#contact" aria-label="Get a Quote">
          GET A QUOTE
        </v-btn>
      </div>
    </v-container>
  </section>
</template>

<script setup>
defineProps(["services", "deepBlue", "lightBlue"]);
</script>

<style scoped>
.service-card {
  min-height: 180px;
  transition: box-shadow 0.2s;
  background: #fff;
}
.service-card:hover {
  box-shadow: 0 4px 20px rgba(22, 102, 186, 0.12);
}
@media (min-width: 960px) {
  .service-card {
    min-height: 200px;
  }
}
.section {
  padding: 64px 0 32px 0;
}
</style>
