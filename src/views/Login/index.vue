<template>
  <LoginComponent />
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "LoginView",
  components: {
    LoginComponent: () => import("@/components/Login/index.vue"),
  },
});
</script>
