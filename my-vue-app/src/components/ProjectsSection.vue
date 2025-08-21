<template>
  <section id="projects" class="section" :style="{ background: lightBlue }">
    <h2 class="text-center mb-8 font-weight-bold" :style="{ color: deepBlue }">
      Projects
    </h2>
    <v-row justify="center">
      <v-col cols="12" md="5" lg="4">
        <v-carousel
          hide-delimiter-background
          height="260"
          cycle
          show-arrows="hover"
          :color="deepBlue"
          class="elevation-2"
        >
          <v-carousel-item v-for="(project, i) in projects" :key="i">
            <v-card
              flat
              class="mx-auto"
              max-width="350"
              :style="{ background: '#fff' }"
            >
              <v-img :src="project.image" height="120" cover />
              <v-card-title
                class="font-weight-bold"
                :style="{ color: deepBlue }"
              >
                {{ project.title }}
              </v-card-title>
              <v-card-text>
                {{ project.description }}
              </v-card-text>
              <v-card-actions>
                <v-btn
                  :href="project.link"
                  target="_blank"
                  :color="deepBlue"
                  variant="flat"
                  class="white--text ml-auto"
                >
                  View
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
  </section>
</template>
<script setup>
defineProps(["projects", "deepBlue", "lightBlue"]);
</script>
<style scoped>
.section {
  padding: 64px 0 32px 0;
}
</style>
