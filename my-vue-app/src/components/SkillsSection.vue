<template>
  <section class="section" :style="{ background: lightBlue }">
    <h2 class="text-center mb-8 font-weight-bold" :style="{ color: deepBlue }">
      Skills & Technologies
    </h2>
    <div class="skills-list">
      <div v-for="skill in skills" :key="skill.name" class="skill-item">
        <v-icon v-if="skill.icon" :color="iconColor" class="mr-2" size="28">
          {{ skill.icon }}
        </v-icon>
        <span>{{ skill.name }}</span>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps(["skills", "deepBlue", "lightBlue"]);
</script>

<style scoped>
.section {
  padding: 64px 0 32px 0;
}
.skills-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
  justify-content: center;
}
.skill-item {
  background: #fff;
  border-radius: 0.5rem;
  padding: 0.75rem 1.5rem;
  display: flex;
  align-items: center;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.04);
  font-size: 1.1rem;
}
.skill-item i {
  font-size: 1.5rem;
  margin-right: 0.6rem;
  color: #1565c0;
}
</style>
