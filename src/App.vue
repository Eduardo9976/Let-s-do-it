<template>
  <v-app>
    <v-alert :type="hasAlert.type" dismissible :value="!!hasAlert.message">
      {{ hasAlert.message }}
    </v-alert>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-icon large> mdi-calendar-check-outline </v-icon>
        <span
          class="text-uppercase ml-2 hidden-sm-and-down"
          aria-label="To do list"
          >To do list</span
        >
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";

export default Vue.extend({
  name: "App",
  computed: {
    ...mapGetters("GLOBAL", ["hasAlert"]),
  },
});
</script>
<style>
html {
  overflow-y: auto !important;
}
.v-main {
  background: rgba(47, 138, 248, 0.113);
}

.v-alert {
  position: fixed;
  right: 0px;
  top: 70px;
  z-index: 10;
}

@media screen and (max-width: 600px) {
  .v-alert {
    max-width: 100%;
    width: 100%;
  }
}
</style>
