<template>
  <v-container fluid pa-0 class="d-flex custom-container">
    <v-row align="center">
      <v-col class="px-3 mx-3">
        <v-card class="pa-5 mx-auto d-flex flex-column" max-width="400">
          <v-icon large class="ml-auto" color="info">
            mdi-calendar-check-outline
          </v-icon>
          <NavigationTabs @changedTab="changeTab" class="mb-5" />
          <FormSignInAndUp :actionIs="actionTab" />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import Vue from "vue";
import NavigationTabs from "./Navigation-tabs.vue";
import FormSignInAndUp from "./Form-sign-in-and-up.vue";

export default Vue.extend({
  name: "LoginIndex",
  components: {
    NavigationTabs,
    FormSignInAndUp,
  },
  data() {
    return {
      actionTab: "sign-in",
    };
  },
  methods: {
    changeTab(clickedTab: string) {
      this.actionTab = clickedTab;
    },
  },
});
</script>
<style scoped>
.custom-container {
  min-height: calc(100vh - 100px);
  overflow: hidden;
}
</style>
