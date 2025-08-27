<template>
  <v-app>
    <AppBar
      :navItems="navItems"
      :deepBlue="deepBlue"
      v-model:drawer="drawer"
      @scroll-to-section="scrollToSection"
    />
    <NavDrawer
      :navItems="navItems"
      :deepBlue="deepBlue"
      v-model="drawer"
      @navigate-and-close="navigateAndClose"
    />
    <v-main>
      <v-container fluid class="pa-0">
        <HeroSection :deepBlue="deepBlue" :lightBlue="lightBlue" />
        <SkillsSection
          :skills="skills"
          :deepBlue="deepBlue"
          :lightBlue="lightBlue"
        />
        <ProjectsSection
          :projects="projects"
          :deepBlue="deepBlue"
          :lightBlue="lightBlue"
        />
        <BlogSection
          :articles="articles"
          :deepBlue="deepBlue"
          :lightBlue="lightBlue"
        />
        <ServicesSection
          :services="services"
          :deepBlue="deepBlue"
          :lightBlue="lightBlue"
        />
        <ExperienceSection
          :experiences="experiences"
          :deepBlue="deepBlue"
          :lightBlue="lightBlue"
        />
        <AboutSection :deepBlue="deepBlue" :lightBlue="lightBlue" />
      </v-container>
    </v-main>
    <AppFooter :deepBlue="deepBlue" />
  </v-app>
</template>

<script setup>
import { ref } from "vue";
import AppBar from "./components/AppBar.vue";
import NavDrawer from "./components/NavDrawer.vue";
import HeroSection from "./components/HeroSection.vue";
import ProjectsSection from "./components/ProjectsSection.vue";
import ServicesSection from "./components/ServicesSection.vue";
import ExperienceSection from "./components/ExperienceSection.vue";
import AboutSection from "./components/AboutSection.vue";
import AppFooter from "./components/AppFooter.vue";
import SkillsSection from "./components/SkillsSection.vue";
import BlogSection from "./components/BlogSection.vue";
// Import constants
import {
  deepBlue,
  lightBlue,
  navItems,
  projects,
  services,
  experiences,
  skills,
  articles,
} from "./constants.js";

const drawer = ref(false);

// Section scrolling
function scrollToSection(selector) {
  const el = document.querySelector(selector);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}
function navigateAndClose(selector) {
  scrollToSection(selector);
  drawer.value = false;
}
</script>
