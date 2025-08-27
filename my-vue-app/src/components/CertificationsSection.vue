<template>
  <section
    id="certifications"
    class="section"
    :style="{ background: lightBlue }"
  >
    <h2 class="text-center mb-8 font-weight-bold" :style="{ color: deepBlue }">
      Certifications
    </h2>
    <v-row justify="center">
      <v-col cols="12" md="10">
        <v-row justify="center" align="stretch" dense>
          <v-col
            v-for="(cert, i) in paginatedCerts"
            :key="i"
            cols="12"
            sm="6"
            md="4"
            lg="3"
            class="d-flex"
            style="justify-content: center"
          >
            <v-card
              flat
              class="mx-auto pa-2 elevation-2 d-flex flex-column"
              :style="{
                background: '#fff',
                borderRadius: '14px',
                maxWidth: '260px',
                height: '260px',
                marginBottom: '24px',
              }"
            >
              <!-- Logo or MDI Icon -->
              <div class="text-center mb-1">
                <template v-if="cert.logo">
                  <v-avatar size="28" class="mb-1">
                    <v-img :src="cert.logo" alt="Logo" />
                  </v-avatar>
                </template>
                <template v-else>
                  <v-icon color="primary" size="28">
                    {{ cert.icon || "mdi-certificate" }}
                  </v-icon>
                </template>
              </div>
              <div
                class="text-center"
                style="font-size: 0.95rem; color: #666"
                v-if="cert.issuer"
              >
                {{ cert.issuer }}
              </div>
              <div
                class="font-weight-bold mb-2"
                :style="{ color: deepBlue, fontSize: '1rem' }"
              >
                {{ cert.title }}
              </div>
              <div style="font-size: 0.92rem; margin-bottom: 0.6rem">
                {{ cert.description }}
              </div>
              <div style="font-size: 0.82rem; color: #888" v-if="cert.date">
                Issued: {{ cert.date }}
              </div>
              <!-- This will always push button to bottom -->
              <v-card-actions
                class="justify-end mt-auto"
                style="padding-bottom: 4px"
              >
                <v-btn
                  :href="cert.link"
                  target="_blank"
                  :color="deepBlue"
                  variant="flat"
                  class="white--text"
                  size="small"
                >
                  VERIFY
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
        <!-- Pagination Controls -->
        <div class="d-flex justify-center mt-4">
          <v-pagination v-model="page" :length="pageCount" color="primary" />
        </div>
      </v-col>
    </v-row>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";

const props = defineProps(["certifications", "deepBlue", "lightBlue"]);

// Pagination logic
const perPage = 4;
const page = ref(1);

const pageCount = computed(() =>
  Math.ceil(props.certifications.length / perPage)
);

const paginatedCerts = computed(() => {
  const start = (page.value - 1) * perPage;
  return props.certifications.slice(start, start + perPage);
});
</script>

<style scoped>
.section {
  padding: 64px 0 32px 0;
}
</style>
