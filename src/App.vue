<template>
  <v-app>
    <v-alert :type="hasAlert.type" dismissible :value="!!hasAlert.message">
      {{ hasAlert.message }}
    </v-alert>
    <Header />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";
import Header from "./components/Header/index.vue";

export default Vue.extend({
  name: "App",
  computed: {
    ...mapGetters("GLOBAL", ["hasAlert"]),
  },
  components: { Header },
});
</script>
<style>
html {
  overflow-y: auto !important;
}
.v-main {
  background: #e3f2fd;
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
