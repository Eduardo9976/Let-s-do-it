<template>
  <v-tabs>
    <v-tab @click="changeTab('sign-in')">Entrar</v-tab>
    <v-tab @click="changeTab('sign-up')">Registrar</v-tab>
  </v-tabs>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "NavigationTabs",
  methods: {
    changeTab(clickedTab: string) {
      this.$emit("changedTab", clickedTab);
    },
  },
});
</script>
