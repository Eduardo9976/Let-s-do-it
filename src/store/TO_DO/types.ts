import {
  MutationTree,
  GetterTree,
  ActionTree,
  Store,
  ActionContext,
} from "vuex/types";

export interface ToDo {
  id: number;
  task: string;
  done: boolean;
  created_at: string;
}

export interface State {
  toDoList: ToDo[];
}

export type RootState = ReturnType<() => State>;

export enum Mutations {
  ADD_TO_DO = "ADD_TO_DO",
  REMOVE_TO_DO = "REMOVE_TO_DO",
  UPDATE_TO_DO = "UPDATE_TO_DO",
}

export interface MutationsInterface extends MutationTree<RootState> {
  [Mutations.ADD_TO_DO](state: State, payload: ToDo): void;
  [Mutations.REMOVE_TO_DO](state: State, index: number): void;
  // [Mutations.UPDATE_TO_DO](state: State, payload: ToDo): void;
}

export interface Getters extends GetterTree<RootState, any> {
  toDoList: (state: State) => any[];
}

export interface ActionsTypes extends ActionTree<RootState, any> {
  addToDo(
    this: Store<State>,
    { commit }: ActionContext<State, State>,
    payload: Omit<ToDo, "id">
  ): void;
  removeToDo(
    this: Store<State>,
    { commit }: ActionContext<State, State>,
    payload: ToDo
  ): void;
}
