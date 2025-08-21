<template>
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
        @click="$emit('navigate-and-close', item.to)"
      >
        <v-list-item-title class="white--text font-weight-bold">
          {{ item.text }}
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script setup>
import { computed } from "vue";
const props = defineProps(["navItems", "deepBlue", "modelValue"]);
const emits = defineEmits(["update:modelValue", "navigate-and-close"]);
const drawer = computed({
  get: () => props.modelValue,
  set: (val) => emits("update:modelValue", val),
});
</script>
