<template>
  <section id="projects" class="section" :style="{ background: lightBlue }">
    <h2 class="text-center mb-8 font-weight-bold" :style="{ color: deepBlue }">
      Projects
    </h2>
    <v-row justify="center">
      <v-col cols="12" md="7" lg="5">
        <v-carousel
          hide-delimiter-background
          height="460"
          cycle
          show-arrows="hover"
          :color="deepBlue"
          class="elevation-2"
        >
          <v-carousel-item v-for="(project, i) in projects" :key="i">
            <v-card
              flat
              class="mx-auto pa-4 elevation-3 d-flex flex-column justify-space-between"
              :style="{
                background: '#fff',
                maxWidth: '430px',
                minHeight: '410px',
                borderRadius: '14px',
                margin: '24px auto',
              }"
            >
              <v-img
                :src="project.image"
                height="160"
                cover
                class="rounded-lg mb-3"
              />
              <div>
                <v-card-title
                  class="font-weight-bold"
                  :style="{ color: deepBlue, fontSize: '1.35rem' }"
                >
                  {{ project.title }}
                </v-card-title>
                <v-card-text style="font-size: 1.1rem; margin-bottom: 1.5rem">
                  {{ project.description }}
                </v-card-text>
              </div>
              <v-card-actions class="justify-end" style="padding-bottom: 32px">
                <v-btn
                  :href="project.demo"
                  target="_blank"
                  :color="deepBlue"
                  variant="flat"
                  class="white--text"
                  v-if="project.demo"
                >
                  Live Demo
                </v-btn>
                <v-btn
                  color="primary"
                  variant="text"
                  @click="openDetails(project)"
                  style="margin-left: 8px"
                >
                  Details
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>

    <ProjectDetailsModal
      v-model="dialog"
      :project="selectedProject"
      @close="dialog = false"
    />
  </section>
</template>
<script setup>
import { ref } from "vue";
import ProjectDetailsModal from "./Modal/ProjectDetailsModal.vue";
defineProps(["projects", "deepBlue", "lightBlue"]);
const dialog = ref(false);
const selectedProject = ref({});

function openDetails(project) {
  selectedProject.value = project;
  dialog.value = true;
}
</script>

<style scoped>
.section {
  padding: 64px 0 32px 0;
}

.features-list {
  padding-left: 2.5em;
  margin-bottom: 0.5em;
}
</style>
