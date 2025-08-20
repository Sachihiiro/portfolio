<template>
  <v-app>
    <!-- App Bar -->
    <v-app-bar flat :color="deepBlue">
      <!-- Hamburger icon for mobile -->
      <v-app-bar-nav-icon
        class="d-md-none"
        @click="drawer = !drawer"
        color="white"
      />
      <v-toolbar-title class="font-weight-bold white--text"
        >Jane Doe</v-toolbar-title
      >
      <v-spacer />
      <!-- Desktop Nav Buttons -->
      <div class="d-none d-md-flex">
        <v-btn
          v-for="item in navItems"
          :key="item.text"
          variant="text"
          :to="item.to"
          class="mx-2 white--text"
          @click="scrollToSection(item.to)"
        >
          {{ item.text }}
        </v-btn>
      </div>
    </v-app-bar>

    <!-- Mobile Navigation Drawer -->
    <v-navigation-drawer
      v-model="drawer"
      temporary
      :color="deepBlue"
      class="d-md-none"
      app
    >
      <v-list>
        <v-list-item
          v-for="item in navItems"
          :key="item.text"
          @click="navigateAndClose(item.to)"
        >
          <v-list-item-title class="white--text font-weight-bold">
            {{ item.text }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container fluid class="pa-0">
        <!-- Hero Section -->
        <section
          id="home"
          class="hero-section"
          :style="{ background: lightBlue }"
        >
          <div class="text-center">
            <v-avatar size="100" class="mb-4 elevation-4">
              <img
                src="https://randomuser.me/api/portraits/women/85.jpg"
                alt="Avatar"
              />
            </v-avatar>
            <h1
              class="display-2 font-weight-bold mb-2"
              :style="{ color: deepBlue }"
            >
              Jane Doe
            </h1>
            <p class="subtitle-1 mb-4" :style="{ color: deepBlue }">
              Frontend Developer
            </p>
            <v-btn
              href="mailto:jane@example.com"
              :color="deepBlue"
              variant="flat"
              class="white--text"
            >
              Contact Me
            </v-btn>
          </div>
        </section>

        <!-- Projects Carousel Section -->
        <section
          id="projects"
          class="section"
          :style="{ background: lightBlue }"
        >
          <h2
            class="text-center mb-8 font-weight-bold"
            :style="{ color: deepBlue }"
          >
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
                    <v-img :src="project.image" height="120" cover></v-img>
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

        <!-- About Section -->
        <section id="about" class="section" :style="{ background: lightBlue }">
          <h2
            class="text-center mb-8 font-weight-bold"
            :style="{ color: deepBlue }"
          >
            About
          </h2>
          <v-row justify="center">
            <v-col cols="12" md="6" class="text-center">
              <p class="grey--text text--darken-1">
                Clean code and beautiful blue hues. Experienced in Vue, Vuetify,
                and modern JavaScript. Always learning, always building.
              </p>
            </v-col>
          </v-row>
        </section>
      </v-container>
    </v-main>

    <v-footer class="justify-center" height="60" :color="deepBlue">
      <span class="white--text">
        &copy; {{ new Date().getFullYear() }} Jane Doe
      </span>
    </v-footer>
  </v-app>
</template>

<script setup>
import { ref } from "vue";

const deepBlue = "#1666BA";
const lightBlue = "#DEECFB";
const drawer = ref(false);

const navItems = [
  { text: "Home", to: "#home" },
  { text: "Projects", to: "#projects" },
  { text: "About", to: "#about" },
];

function scrollToSection(selector) {
  const el = document.querySelector(selector);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

function navigateAndClose(selector) {
  scrollToSection(selector);
  drawer.value = false;
}

const projects = [
  {
    title: "Blue Portfolio",
    description: "A portfolio template using only two blue hues.",
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    link: "https://github.com/yourusername/blue-portfolio",
  },
  {
    title: "Vue Weather App",
    description: "Weather app using Vue 3 and a blue UI.",
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    link: "https://github.com/yourusername/vue-weather-app",
  },
  {
    title: "Minimal Blog",
    description: "A blog platform built with Vue and Firebase.",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    link: "https://github.com/yourusername/minimal-blog",
  },
];
</script>

<style scoped>
.hero-section {
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.section {
  padding: 64px 0 32px 0;
}

.v-app-bar {
  box-shadow: none;
  border-bottom: 1px solid #eee;
}
</style>
