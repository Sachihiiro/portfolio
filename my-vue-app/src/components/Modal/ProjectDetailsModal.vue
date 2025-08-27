<template>
  <v-dialog v-model="internalDialog" max-width="600px">
    <v-card v-if="project">
      <!-- Title & Subtitle -->
      <v-card-title class="font-weight-bold">
        {{ project.title }}
      </v-card-title>
      <v-card-subtitle style="font-weight: 400; color: #888">
        {{ project.period }}
      </v-card-subtitle>

      <!-- Modal Content with Padding -->
      <v-card-text class="px-6">
        <div class="text-center mb-4" v-if="project.image">
          <v-img
            :src="project.image"
            height="160"
            max-width="320"
            class="mx-auto rounded-lg elevation-2"
            style="object-fit: cover"
          />
        </div>
        <div style="line-height: 1.8; font-size: 1.1rem">
          <div
            v-if="project.details"
            v-html="project.details"
            class="features-list"
          ></div>
          <ul v-if="project.features" class="features-list">
            <li v-for="(feature, idx) in project.features" :key="idx"></li>
          </ul>
          <div class="mt-3 features-list" v-if="project.techStack">
            <span style="font-weight: 500; color: #1565c0">Tech Stack:</span>
            <span style="margin-left: 6px">
              <v-chip
                v-for="(tech, idx) in project.techStack.split(',')"
                :key="idx"
                color="blue lighten-4"
                class="ml-2"
                size="small"
                label
              >
                {{ tech.trim() }}
              </v-chip>
            </span>
          </div>
        </div>
      </v-card-text>

      <!-- Divider and Actions -->
      <v-divider />
      <v-card-actions class="justify-space-between">
        <div>
          <v-btn
            v-if="project.github"
            :href="project.github"
            target="_blank"
            color="primary"
            variant="outlined"
            class="mr-2"
            prepend-icon="mdi-github"
          >
            GitHub
          </v-btn>
          <v-btn
            v-if="project.demo"
            :href="project.demo"
            target="_blank"
            color="success"
            variant="outlined"
            prepend-icon="mdi-open-in-new"
          >
            Live Demo
          </v-btn>
        </div>
        <v-btn text color="error" @click="internalDialog = false">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  modelValue: Boolean,
  project: Object,
});
const emit = defineEmits(["update:modelValue", "close"]);

const internalDialog = ref(props.modelValue);

// Watch for parent changes
watch(
  () => props.modelValue,
  (val) => {
    internalDialog.value = val;
  }
);

// Emit when local changes (user closes)
watch(internalDialog, (val) => {
  emit("update:modelValue", val);
  if (!val) emit("close");
});
</script>

<style scoped>
.features-list {
  padding-left: 2em;
  margin-bottom: 0.5em;
}
</style>
