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
        <!-- Under Construction Alert -->
        <v-alert
          type="warning"
          color="orange-darken-2"
          border="start"
          elevation="2"
          icon="mdi-alert"
          prominent
          closable
        >
          🚧 This page is under construction. Some features may not be fully
          available. Some sections may be incomplete. Please check back later!
        </v-alert>
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
        <CertificationsSection
          :certifications="certifications"
          :deepBlue="deepBlue"
          :lightBlue="lightBlue"
        />
        <Testimonials
          :testimonials="testimonials"
          :deepBlue="deepBlue"
          :lightBlue="lightBlue"
        />
        <AboutSection :deepBlue="deepBlue" :lightBlue="lightBlue" />
        <Contact :deepBlue="deepBlue" :lightBlue="lightBlue" />
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
import CertificationsSection from "./components/CertificationsSection.vue";
import Testimonials from "./components/Testimonials.vue";
import Contact from "./components/Contact.vue";
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
  certifications,
  testimonials,
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
