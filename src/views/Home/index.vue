<template>
  <LoginComponent />
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "HomeView",
  components: {
    LoginComponent: () => import("@/components/Home/index.vue"),
  },
});
</script>
