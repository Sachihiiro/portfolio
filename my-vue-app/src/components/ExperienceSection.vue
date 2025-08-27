<template>
  <section id="experience" class="section" :style="{ background: lightBlue }">
    <h2 class="text-center mb-8 font-weight-bold" :style="{ color: deepBlue }">
      Work Experience
    </h2>
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-timeline align-top dense>
          <v-timeline-item
            v-for="(exp, i) in experiences"
            :key="i"
            :dot-color="exp.current ? 'green' : 'grey'"
            fill-dot
          >
            <template #opposite>
              <strong :style="{ color: deepBlue }">
                {{ exp.period }}
              </strong>
            </template>
            <div>
              <div class="d-flex align-center mb-2">
                <v-avatar size="40" class="mr-2">
                  <img :src="exp.logo" :alt="exp.company + ' logo'" />
                </v-avatar>
                <div>
                  <h3
                    class="font-weight-bold mb-1"
                    :style="{ color: deepBlue }"
                  >
                    {{ exp.role }}
                  </h3>
                  <div class="mb-1">{{ exp.company }}</div>
                </div>
              </div>
              <div class="grey--text text--darken-1 mb-2">
                {{ exp.description }}
              </div>
              <div v-if="exp.responsibilities && exp.responsibilities.length">
                <strong>Responsibilities:</strong>
                <ul>
                  <li
                    v-for="(item, idx) in exp.responsibilities"
                    :key="'r' + idx"
                  >
                    {{ item }}
                  </li>
                </ul>
              </div>
              <div v-if="exp.achievements && exp.achievements.length">
                <strong>Achievements:</strong>
                <ul>
                  <li v-for="(item, idx) in exp.achievements" :key="'a' + idx">
                    {{ item }}
                  </li>
                </ul>
              </div>
              <div v-if="exp.tech && exp.tech.length" class="mt-1">
                <strong>Tech Stack:</strong>
                <v-chip-group column>
                  <v-chip
                    v-for="(tech, j) in exp.tech"
                    :key="'t' + j"
                    small
                    class="ma-1"
                  >
                    {{ tech }}
                  </v-chip>
                </v-chip-group>
              </div>
            </div>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
  </section>
</template>
<script setup>
import { experiences } from "../constants.js";
const props = defineProps(["certifications", "deepBlue", "lightBlue"]);
</script>
<style scoped>
.section {
  padding: 64px 0 32px 0;
}
.v-avatar img {
  object-fit: contain;
}
</style>
