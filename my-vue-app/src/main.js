// src/main.js
import { createApp } from "vue";
import App from "./App.vue";

// Import Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

// Import a Vuetify theme (optional)
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "mdi", // Use 'mdi' for Material Design Icons
  },
});

createApp(App).use(vuetify).mount("#app");
