<template>
  <v-form
    ref="form"
    :class="animeOnChange"
    lazy-validation
    style="min-height: 282px"
  >
    <v-text-field
      v-if="actionIsSignUp"
      :class="{ 'visible-on-sign-up': actionIsSignUp }"
      v-model="name"
      :counter="20"
      label="Digite seu nome"
      required
      :rules="nameRules"
    ></v-text-field>
    <v-text-field
      v-model="email"
      :counter="50"
      label="Digite seu e-mail"
      required
      :rules="emailRules"
    ></v-text-field>
    <v-text-field
      v-model="password"
      :counter="16"
      label="Digite sua senha"
      required
      :rules="passwordRules"
    ></v-text-field>
    <v-btn @click="submit" class="mt-5" x-large color="primary">
      {{ actionIsSignUp ? "Cadastrar" : "Acessar" }}
    </v-btn>
  </v-form>
</template>
<script lang="ts">
import Vue, { PropOptions } from "vue";
import services from "../../services";
import { mapActions } from "vuex";
import {
  isRequired,
  minLength,
  maxLength,
  isValidEmail,
  isValidPassword,
} from "@/helpers/validateInputs";
import { SignUpUser, SignInUser } from "@/services/users";

export type ActionIs = "sign-in" | "sign-up";
export type VForm = Vue & { validate: () => boolean; reset: () => void };

export default Vue.extend({
  name: "FormSignInAndUp",
  props: {
    actionIs: {
      required: true,
      type: String,
    } as PropOptions<ActionIs>,
  },
  data() {
    return {
      name: "",
      nameRules: [isRequired, minLength(5), maxLength(20)],
      email: "",
      emailRules: [isRequired, isValidEmail, maxLength(50)],
      password: "",
      passwordRules: [isRequired, isValidPassword, maxLength(16)],
    };
  },
  computed: {
    actionIsSignUp(): boolean {
      return this.actionIs === "sign-up";
    },
    animeOnChange(): string {
      return this.actionIsSignUp ? "animeSignUp" : "animeSignIn";
    },
  },
  methods: {
    ...mapActions("GLOBAL", ["setUserLogged"]),
    callTo() {
      this.actionIs === "sign-up" ? this.signUp() : this.signIn();
    },
    async signUp() {
      try {
        const signUpUser: SignUpUser = {
          name: this.name,
          email: this.email,
          password: this.password,
        };
        const { data } = await services.users.signUp(signUpUser);
        this.setUserLogged(data);
      } catch {}
    },
    async signIn() {
      try {
        const signInUser: SignInUser = {
          email: this.email,
          password: this.password,
        };
        const { data } = await services.users.signIn(signInUser);
        this.setUserLogged(data);
      } catch {}
    },
    submit() {
      const hasValidPersonalInformation = (this.$refs.form as VForm).validate();
      if (hasValidPersonalInformation) {
        this.callTo();
      }
    },
  },
  watch: {
    actionIs() {
      (this.$refs.form as VForm).reset();
    },
  },
});
</script>
<style scoped>
.animeSignIn {
  animation: animationSignIn 1s linear;
}
.animeSignUp {
  animation: animationSignUp 0.8s linear;
}

@keyframes animationSignUp {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes animationSignIn {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
</style>
