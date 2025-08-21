<template>
  <section id="experience" class="section" :style="{ background: lightBlue }">
    <h2 class="text-center mb-8 font-weight-bold" :style="{ color: deepBlue }">
      Work Experience
    </h2>
    <v-row justify="center">
      <v-col cols="12" md="6">
        <v-timeline align-top dense>
          <v-timeline-item
            v-for="(exp, i) in experiences"
            :key="i"
            :color="deepBlue"
            fill-dot
          >
            <template #opposite>
              <strong :style="{ color: deepBlue }">
                {{ exp.period }}
              </strong>
            </template>
            <div>
              <h3 class="font-weight-bold mb-1" :style="{ color: deepBlue }">
                {{ exp.role }}
              </h3>
              <div class="mb-2">{{ exp.company }}</div>
              <div class="grey--text text--darken-1">
                {{ exp.description }}
              </div>
            </div>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
  </section>
</template>
<script setup>
defineProps(["experiences", "deepBlue", "lightBlue"]);
</script>
<style scoped>
.section {
  padding: 64px 0 32px 0;
}
</style>
