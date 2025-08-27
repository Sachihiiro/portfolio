<template>
  <section id="about" class="section" :style="{ background: lightBlue }">
    <h2 class="text-center mb-8 font-weight-bold" :style="{ color: deepBlue }">
      About
    </h2>
    <v-row justify="center">
      <v-col cols="12" md="6" class="text-center">
        <!-- Profile Image -->
        <v-avatar size="120" class="mb-5">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Profile photo"
          />
        </v-avatar>
        <div class="about-content">
          <p class="grey--text text--darken-1">
            I'm Rex Roy Sobrido, a Software Engineer and
            <strong>Full Stack Developer</strong> based in Manila, Philippines.
          </p>
          <p class="grey--text text--darken-1">
            I build cloud-based solutions and web applications that are
            intuitive and efficient. My focus is on clean, maintainable code. I
            enjoy learning new technologies and using AI to create smarter
            solutions.
          </p>
          <div class="about-list-container">
            <ul class="grey--text text--darken-1 about-list">
              <li>
                <strong>Skills:</strong> Vue.js, Node.js, AWS Cloud, PostgreSQL,
                Python Flask
              </li>
              <li>
                <strong>Certifications:</strong> ITPEC IP Passer, CSE Pro Passer
              </li>
              <li>
                <strong>Key Projects:</strong> Cloud engineer and web developer
                for the Smart Agriculture initiative supporting farmers in the
                Philippines.
              </li>
            </ul>
          </div>
          <p class="grey--text text--darken-1">
            Outside work, I enjoy hiking, running, café hopping, and going to
            the gym. Currently, I'm building my personal portfolio and working
            on projects to showcase my growth as a developer.
          </p>
        </div>
      </v-col>
    </v-row>
  </section>
</template>

<script setup>
defineProps(["deepBlue", "lightBlue"]);
</script>

<style scoped>
.section {
  padding: 64px 0 48px 0;
}
.about-content {
  max-width: 650px;
  margin: 0 auto;
}
.about-list-container {
  display: flex;
  justify-content: center;
  margin: 24px 0;
}
.about-list {
  text-align: left;
  display: inline-block;
  margin: 0;
  max-width: 550px;
  padding-left: 24px;
}
</style>
