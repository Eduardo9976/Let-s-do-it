import {
  State,
  Mutations,
  MutationsInterface,
  Getters,
  ActionsTypes,
} from "./types";
const GLOBAL = {
  namespaced: true,
  state: {
    alert: {},
    loading: false,
    userLogged: {},
  } as State,
  mutations: {
    [Mutations.SET_ALERT]: (state, payload) => (state.alert = payload),
    [Mutations.SET_LOADING]: (state, status) => (state.loading = status),
    [Mutations.SET_USER_LOGGED]: (state, user) =>
      (state.userLogged = { ...user }),
  } as MutationsInterface,
  getters: {
    hasAlert: (state) => state.alert,
    isLoading: (state) => state.loading,
    userLogged: (state) => state.userLogged,
  } as Getters,
  actions: {
    setAlert({ commit }, payload) {
      commit(Mutations.SET_ALERT, payload);
      setTimeout(() => {
        commit(Mutations.SET_ALERT, {});
      }, 3000);
    },
    setLoading({ commit }, status) {
      commit(Mutations.SET_LOADING, status);
    },
    setUserLogged({ commit }, user) {
      commit(Mutations.SET_USER_LOGGED, user);
    },
  } as ActionsTypes,
};

export default GLOBAL;
