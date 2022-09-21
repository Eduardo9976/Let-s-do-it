<template>
  <LoginComponent />
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Login",
  components: {
    LoginComponent: () => import("@/components/Login/index.vue"),
  },
});
</script>
