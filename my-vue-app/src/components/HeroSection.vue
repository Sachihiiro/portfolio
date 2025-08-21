<template>
  <section id="home" class="hero-section" :style="{ background: gradientBg }">
    <v-container fluid>
      <v-row class="fill-height" align="center" justify="center" no-gutters>
        <!-- Left: Text content -->
        <v-col
          cols="12"
          md="6"
          class="d-flex flex-column justify-center align-center align-md-start"
        >
          <div class="mb-8">
            <v-chip
              v-for="tech in techs"
              :key="tech"
              class="mr-2 mb-2 chip"
              variant="flat"
            >
              {{ tech }}
            </v-chip>
          </div>
          <h1 class="hero-title mb-0">Hello, I'm</h1>
          <h1 class="hero-title hero-title-blue mb-2">Rex Sobrido.</h1>
          <p class="hero-desc mb-8">
            An experienced full-stack website developer with a passion for
            crafting unique digital experiences.
          </p>
          <div>
            <v-btn
              :color="accent"
              size="large"
              variant="flat"
              class="mr-4"
              href="mailto:wendo@example.com"
            >
              GET IN TOUCH
            </v-btn>
            <v-btn size="large" variant="outlined" href="#about">
              LEARN MORE
            </v-btn>
          </div>
        </v-col>
        <!-- Right: Image -->
        <v-col cols="12" md="6" class="d-flex justify-center align-center">
          <div class="hero-img-wrapper">
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
              alt="Hero"
              class="hero-img"
            />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
const gradientBg =
  "linear-gradient(180deg, #181F2F 0%, #23293b 60%, #DEECFB 100%)";
const accent = "#5d7cff"; // Or #1666BA if that's your blue
const techs = ["VueJs", "vuetify", "nuxtjs"];
</script>

<style scoped>
.hero-section {
  min-height: 85vh;
  display: flex;
  align-items: center;
  background: linear-gradient(180deg, #181f2f 0%, #23293b 70%, #deecfb 100%);
}

.hero-title,
.hero-title-blue,
.hero-desc {
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);
}

.chip {
  background: #282b34;
  color: #fff;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 20px;
  text-transform: lowercase;
  letter-spacing: 0.5px;
}

.hero-title {
  font-size: 3rem;
  line-height: 1.1;
  font-weight: 600;
  color: #fff;
  letter-spacing: -1px;
}
.hero-title-blue {
  color: #5d7cff;
  font-size: 3.5rem;
  font-weight: 700;
}

.hero-desc {
  font-size: 1.15rem;
  color: #b8c1db;
  margin-top: 18px;
  max-width: 520px;
}

.hero-img-wrapper {
  background: #141624;
  border-radius: 32px;
  overflow: hidden;
  box-shadow: 0 4px 40px 0 rgba(30, 40, 90, 0.14);
  max-width: 600px;
  width: 100%;
  min-height: 320px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.hero-img {
  width: 100%;
  height: auto;
  border-radius: 32px;
  object-fit: cover;
  background: #222;
}

@media (max-width: 960px) {
  .hero-section {
    min-height: 60vh;
    padding-top: 16px;
    padding-bottom: 16px;
  }
  .hero-title {
    font-size: 2rem;
  }
  .hero-title-blue {
    font-size: 2.2rem;
  }
  .hero-img-wrapper {
    max-width: 320px;
    min-height: 180px;
  }
}
</style>
