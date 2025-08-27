<template>
  <section class="testimonials" :style="{ background: lightBlue }">
    <h2 class="text-center mb-8 font-weight-bold" :style="{ color: deepBlue }">
      Testimonials
    </h2>
    <v-row
      justify="center"
      align="stretch"
      class="testimonial-list"
      style="margin: 0 auto; max-width: 1000px"
      no-gutters
    >
      <v-col
        v-for="(testimonial, i) in testimonials"
        :key="i"
        cols="12"
        sm="8"
        md="6"
        lg="5"
        xl="4"
        class="mb-8 d-flex"
        style="display: flex; justify-content: center"
      >
        <v-card outlined class="testimonial-card">
          <v-card-text>
            <p class="testimonial-text">"{{ testimonial.text }}"</p>
            <div class="testimonial-author">
              <img
                v-if="testimonial.avatar"
                :src="testimonial.avatar"
                :alt="testimonial.name"
                class="testimonial-avatar"
              />
              <span>
                <strong>{{ testimonial.name }}</strong>
                <br />
                <small>{{ testimonial.role }}</small>
              </span>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </section>
</template>

<script setup>
import { testimonials } from "../constants.js";
const props = defineProps({
  deepBlue: String,
  lightBlue: String,
});
</script>

<style scoped>
.testimonials {
  padding: 64px 0 64px 0;
  border-radius: 16px;
  margin: 2rem auto;
  max-width: 1200px;
}
.testimonial-list {
  gap: 2rem;
}
.testimonial-card {
  background: #fff;
  min-height: 220px;
  max-width: 360px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 1.5rem 2rem;
  font-size: 1.15rem;
  box-shadow: 0 2px 12px rgba(21, 101, 192, 0.08);
  transition: box-shadow 0.2s;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.testimonial-card:hover {
  box-shadow: 0 6px 24px rgba(21, 101, 192, 0.15);
}
.testimonial-text {
  font-style: italic;
  margin-bottom: 1rem;
}
.testimonial-author {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
}
.testimonial-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #ddd;
}
</style>
