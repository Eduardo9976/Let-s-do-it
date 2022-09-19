import {
  State,
  Mutations,
  MutationsInterface,
  Getters,
  ActionsTypes,
} from "./types";

const TO_DO = {
  namespaced: true,
  state: {
    toDoList: [],
  } as State,
  mutations: {
    [Mutations.ADD_TO_DO]: (state, payload) => state.toDoList.push(payload),
    [Mutations.REMOVE_TO_DO]: (state, index) => state.toDoList.splice(index, 1),
  } as MutationsInterface,
  getters: {
    toDoList: (state) => state.toDoList,
  } as Getters,
  actions: {
    addToDo({ state, commit }, payload) {
      const id = state.toDoList[state.toDoList.length - 1].id + 1 || 1;
      commit(Mutations.ADD_TO_DO, { ...payload, id });
    },
    removeToDo({ state, commit }, { id }) {
      const index = state.toDoList.findIndex((toDo) => toDo.id === id);
      commit(Mutations.REMOVE_TO_DO, index);
    },
  } as ActionsTypes,
};

export default TO_DO;
