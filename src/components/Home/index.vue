<template>
  <v-container>
    <v-row no-gutters justify="center" class="mt-10">
      <v-col cols="6" class="text-center">
        <v-card class="pa-2" outlined tile>
          <h2 class="text-subtitle-1">Gestão de tarefas inteligente</h2>
          <h1 class="text-h2">
            Mais clareza. <br />
            Mais produtividade.
          </h1>
          <p class="text-body-1 my-8">
            Finalmente alcance o foco, a organização e a calma. O gerenciador e
            aplicativo de lista de tarefas nº 1 do mundo.
          </p>
          <router-link to="/login"> Acesse agora </router-link>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Home",
});
</script>
