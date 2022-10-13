<template>
  <v-app-bar app color="primary" dark>
    <div class="d-flex align-center">
      <router-link to="/">
        <v-icon large> mdi-calendar-check-outline </v-icon>
      </router-link>
      <span
        class="text-uppercase ml-2 hidden-sm-and-down"
        aria-label="To do list"
        >Lista de tarefas</span
      >
    </div>
    <v-spacer></v-spacer>
    <div class="text-center" v-if="userLogged.id">
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-avatar
            class="primary--text"
            color="blue lighten-5"
            size="42"
            v-bind="attrs"
            v-on="on"
          >
            {{ initialsUserName }}
          </v-avatar>
        </template>
        <v-list>
          <v-list-item class="d-block text-center">
            <strong>Email:</strong> {{ userLogged.email }}
          </v-list-item>
          <v-list-item>
            <v-btn depressed color="error" class="mx-auto"> Sair... </v-btn>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";
import { UserLogged } from "@/store/GLOBAL/types";

interface IComputed {
  userLogged: UserLogged;
  initialsUserName: string;
}

export default Vue.extend<any, any, IComputed>({
  name: "Header",
  computed: {
    ...mapGetters("GLOBAL", ["userLogged"]),
    initialsUserName() {
      return this.userLogged.name.slice(0, 2).toUpperCase();
    },
  },
});
</script>
