<template>
  <section class="section" :style="{ background: lightBlue }">
    <h2 class="text-center mb-8 font-weight-bold" :style="{ color: deepBlue }">
      Blog / Articles
    </h2>
    <v-row
      justify="start"
      align="stretch"
      class="articles-list"
      style="
        margin-left: auto;
        margin-right: auto;
        width: 100%;
        max-width: 1200px;
      "
      no-gutters
    >
      <v-col
        v-for="(article, i) in pagedArticles"
        :key="i"
        cols="12"
        sm="8"
        md="6"
        lg="4"
        xl="3"
        class="mb-8 d-flex"
        style="display: flex; justify-content: center"
      >
        <v-card outlined class="article-card">
          <!-- Article Thumbnail -->
          <v-img
            v-if="article.image"
            :src="article.image"
            class="article-thumb"
            height="180"
            width="100%"
            cover
            loading="lazy"
          >
            <template #placeholder>
              <v-skeleton-loader
                type="image"
                height="180"
                width="100%"
                class="article-thumb-skeleton"
              />
            </template>
          </v-img>
          <v-card-title>
            <a
              :href="article.link"
              target="_blank"
              rel="noopener"
              :style="{ color: deepBlue }"
              class="font-weight-bold article-title"
            >
              {{ article.title }}
            </a>
          </v-card-title>
          <v-card-subtitle class="grey--text text--darken-1 mb-2 article-date">
            {{ article.date }}
          </v-card-subtitle>
          <v-card-text class="article-summary">
            {{ article.summary }}
          </v-card-text>
          <!-- Read More Button -->
          <v-card-actions>
            <v-btn
              :href="article.link"
              target="_blank"
              rel="noopener"
              color="primary"
              variant="outlined"
              class="read-more-btn"
            >
              Read More
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <div class="d-flex justify-center mt-6">
      <v-pagination
        v-model="currentPage"
        :length="pageCount"
        color="primary"
        total-visible="7"
      />
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
const props = defineProps({
  articles: Array,
  deepBlue: String,
  lightBlue: String,
});
const articlesPerPage = 6;
const currentPage = ref(1);
const pageCount = computed(() =>
  Math.ceil(props.articles.length / articlesPerPage)
);
const pagedArticles = computed(() => {
  const start = (currentPage.value - 1) * articlesPerPage;
  return props.articles.slice(start, start + articlesPerPage);
});
</script>

<style scoped>
.section {
  padding: 64px 0 32px 0;
}

.article-card {
  min-height: 220px;
  max-width: 380px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 1.5rem 2rem;
  font-size: 1.18rem;
  box-shadow: 0 2px 12px rgba(21, 101, 192, 0.08);
  transition: box-shadow 0.2s;
}
.article-card:hover {
  box-shadow: 0 6px 24px rgba(21, 101, 192, 0.15);
}
.article-title {
  font-size: 1.35rem;
  line-height: 1.3;
}
.article-date {
  font-size: 1.08rem;
}
.article-summary {
  font-size: 1.1rem;
  margin-top: 1rem;
}
</style>
