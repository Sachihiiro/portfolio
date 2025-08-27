<template>
  <section class="section" :style="{ background: lightBlue }">
    <h2 class="text-center mb-6 font-weight-bold" :style="{ color: deepBlue }">
      Skills & Technologies
    </h2>
    <div class="skills-grid">
      <div v-for="skill in skills" :key="skill.name" class="skill-card">
        <v-icon
          v-if="skill.icon"
          :icon="skill.icon"
          :color="iconColor"
          size="32"
          class="mb-2"
        />
        <div class="skill-name">{{ skill.name }}</div>
        <div class="skill-years-text">
          {{ skill.years }} yr{{ skill.years > 1 ? "s" : "" }}
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
defineProps(["skills", "deepBlue", "lightBlue", "iconColor"]);
</script>

<style scoped>
.section {
  padding: 64px 0 32px 0;
}
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 1.4rem;
  max-width: 900px;
  margin: 0 auto;
  justify-items: center;
}
.skill-card {
  background: #fff;
  border-radius: 0.75rem;
  padding: 1.1rem 0.5rem 0.7rem 0.5rem;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.07);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-width: 140px;
  max-width: 180px;
}
.skill-name {
  margin-top: 0.2rem;
  font-size: 1.09rem;
  font-weight: 500;
  color: #274472;
  text-align: center;
}
.skill-years-text {
  margin-top: 0.3rem;
  font-size: 0.96rem;
  color: #78909c;
  font-weight: 400;
  text-align: center;
}
</style>
