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
    error: false,
    loading: false,
  } as State,
  mutations: {
    [Mutations.SET_ERROR]: (state, status) => (state.error = status),
    [Mutations.SET_LOADING]: (state, status) => (state.loading = status),
  } as MutationsInterface,
  getters: {
    isLoading: (state) => state.loading,
    hasError: (state) => state.error,
  } as Getters,
  actions: {
    setError({ commit }, status) {
      commit(Mutations.SET_ERROR, status);
    },
    setLoading({ commit }, status) {
      commit(Mutations.SET_LOADING, status);
    },
  } as ActionsTypes,
};

export default GLOBAL;
