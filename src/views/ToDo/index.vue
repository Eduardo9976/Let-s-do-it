<template>
  <ToDoList />
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "ToDoView",
  components: {
    ToDoList: () => import("@/components/ToDoList/index.vue"),
  },
});
</script>
