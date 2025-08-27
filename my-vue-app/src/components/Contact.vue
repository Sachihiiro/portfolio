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
          </v-card-text>
        </v-card>
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
const rules = {
  required: (v) => !!v || "This field is required",
  email: (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
};
function submit() {
  if (!valid.value) return;
  // Replace with your API/email logic
  alert("Thank you for your message!");
  form.value = { name: "", email: "", message: "" };
  formRef.value.resetValidation();
}
</script>

<style scoped>
.contact-section {
  padding: 64px 0 64px 0;
  border-radius: 16px;
  margin-top: 0; /* Optional: add margin-top if you want more space from About */
}
.contact-card {
  background: #fff;
  padding: 2rem;
  box-shadow: 0 2px 12px rgba(21, 101, 192, 0.08);
}
</style>
