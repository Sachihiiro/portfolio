<template>
  <section class="contact-section" :style="{ background: lightBlue }">
    <h2 class="text-center mb-8 font-weight-bold" :style="{ color: deepBlue }">
      Contact
    </h2>
    <v-row justify="center">
      <v-col cols="12" sm="10" md="8" lg="6">
        <v-card class="contact-card" outlined>
          <v-card-text>
            <v-form ref="formRef" v-model="valid">
              <v-text-field
                v-model="form.name"
                :rules="[rules.required]"
                label="Name"
                outlined
                dense
                required
                class="mb-4"
              />
              <v-text-field
                v-model="form.email"
                :rules="[rules.required, rules.email]"
                label="Email"
                outlined
                dense
                required
                class="mb-4"
              />
              <v-textarea
                v-model="form.message"
                :rules="[rules.required]"
                label="Message"
                outlined
                dense
                required
                rows="4"
                class="mb-4"
              />
              <v-btn
                color="primary"
                :disabled="!valid"
                @click="submit"
                class="mt-2"
              >
                Send Message
              </v-btn>
            </v-form>
            <!-- Confirmation message -->
            <div
              v-if="confirmation"
              class="mt-4 text-center"
              style="color: #2e7d32; font-weight: 500"
            >
              <v-icon color="success" class="mr-2">mdi-check-circle</v-icon>
              Thank you for your message! I will get back to you soon.
            </div>
          </v-card-text>
        </v-card>
        <!-- Alternative contact methods -->
        <div class="alternative-contact mt-6 text-center">
          <div style="font-size: 1.08rem; color: #333; font-weight: 500">
            Or reach me via:
          </div>
          <div class="mt-3">
            <v-btn
              href="mailto:rexroys@gmail.com"
              target="_blank"
              variant="text"
              color="primary"
              class="mx-2"
            >
              <v-icon left size="20">mdi-email</v-icon>
              Email
            </v-btn>
            <v-btn
              href="https://www.linkedin.com/in/yourprofile"
              target="_blank"
              variant="text"
              color="primary"
              class="mx-2"
            >
              <v-icon left size="20">mdi-linkedin</v-icon>
              LinkedIn
            </v-btn>
          </div>
        </div>
      </v-col>
    </v-row>
  </section>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps({
  deepBlue: { type: String, default: "#1565c0" },
  lightBlue: { type: String, default: "#e3f0fc" },
});
const valid = ref(false);
const formRef = ref(null);
const form = ref({
  name: "",
  email: "",
  message: "",
});
const confirmation = ref(false);
const rules = {
  required: (v) => !!v || "This field is required",
  email: (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
};
function submit() {
  if (!valid.value) return;
  // Replace with your API/email logic
  confirmation.value = true;
  form.value = { name: "", email: "", message: "" };
  formRef.value.resetValidation();
  setTimeout(() => (confirmation.value = false), 4000); // Hide after 4 seconds
}
</script>

<style scoped>
.contact-section {
  padding: 64px 0 64px 0;
  border-radius: 16px;
}
.contact-card {
  background: #fff;
  padding: 2rem;
  box-shadow: 0 2px 12px rgba(21, 101, 192, 0.08);
}
.alternative-contact v-btn {
  font-size: 1rem;
  text-transform: none;
}
</style>
