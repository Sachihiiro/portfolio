<template>
  <section id="home" class="hero-section" :style="{ background: gradientBg }">
    <v-container fluid>
      <v-row class="fill-height" align="center" justify="center" no-gutters>
        <!-- Left: Text content -->
        <v-col
          cols="12"
          md="8"
          class="d-flex flex-column justify-center align-start"
        >
          <
          <h1 class="hero-main-title mb-6">
            Software engineer,<br />
            web developer,<br />
            AWS cloud engineer
          </h1>
          <p class="hero-subtitle mb-8">
            I'm Rex Sobrido, an experienced web developer and AWS cloud engineer
            passionate about learning and building open-source software that is
            beneficial to developers and the world at large.
          </p>
          <div class="hero-socials">
            <v-btn
              v-for="s in socials"
              :key="s.label"
              :href="s.link"
              target="_blank"
              variant="text"
              class="social-btn"
              :aria-label="s.label"
            >
              <v-icon class="mr-2" :icon="s.icon" size="22" />
              <span>{{ s.label }}</span>
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
const gradientBg =
  "linear-gradient(180deg, #181F2F 0%, #23293b 60%, #DEECFB 100%)";

// Use Material Design Icons or Font Awesome (Vuetify supports mdi by default)
const socials = [
  { label: "GitHub", icon: "mdi-github", link: "https://github.com/" },
  { label: "X", icon: "mdi-twitter", link: "https://x.com/" },
  { label: "Linkedin", icon: "mdi-linkedin", link: "https://linkedin.com/" },
  { label: "Instagram", icon: "mdi-instagram", link: "https://instagram.com/" },
  {
    label: "Stackoverflow",
    icon: "mdi-stack-overflow",
    link: "https://stackoverflow.com/",
  },
  { label: "Gitlab", icon: "mdi-gitlab", link: "https://gitlab.com/" },
  // Add more as needed
];
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700&display=swap");

.hero-section {
  min-height: 90vh;
  display: flex;
  align-items: center;
  background: linear-gradient(180deg, #181f2f 0%, #23293b 60%, #deecfb 100%);
}
.hero-main-title {
  font-family: "Space Grotesk", "Share Tech Mono", "monospace";
  font-size: 3.5rem;
  font-weight: 700;
  color: #fff;
  line-height: 1.1;
  letter-spacing: -2px;
  margin-bottom: 0.6em;
}
.hero-subtitle {
  color: #b8c1db;
  font-size: 1.35rem;
  max-width: 800px;
  margin-bottom: 2em;
}
.hero-socials {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem 1.5rem;
}
.social-btn {
  color: #e0e0e0 !important;
  font-size: 1.15rem;
  font-weight: 500;
  text-transform: none;
  background: transparent !important;
  padding: 0;
  min-width: 0;
  transition: color 0.2s;
}
.social-btn:hover {
  color: #5d7cff !important;
  background: rgba(93, 124, 255, 0.07) !important;
}
@media (max-width: 960px) {
  .hero-main-title {
    font-size: 2.1rem;
    letter-spacing: -1px;
  }
  .hero-subtitle {
    font-size: 1rem;
  }
}
</style>
