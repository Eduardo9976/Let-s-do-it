import {
  MutationTree,
  GetterTree,
  ActionTree,
  Store,
  ActionContext,
} from "vuex/types";

export interface User {
  name: string;
  email: string;
  password: string;
  id: number;
  created_at: number;
}

export type UserLogged = Omit<User, "password">;
export type Alert = {
  type: "success" | "info" | "warning" | "error";
  message: string;
};

export interface State {
  alert: Alert;
  loading: boolean;
  userLogged: UserLogged;
}

export type RootState = ReturnType<() => State>;

export enum Mutations {
  SET_ALERT = "SET_ALERT",
  SET_LOADING = "SET_LOADING",
  SET_USER_LOGGED = "SET_USER_LOGGED",
}

export interface MutationsInterface extends MutationTree<RootState> {
  [Mutations.SET_ALERT](state: State, payload: Alert): void;
  [Mutations.SET_LOADING](state: State, status: boolean): void;
  [Mutations.SET_USER_LOGGED](state: State, user: UserLogged): void;
}

export interface Getters extends GetterTree<RootState, any> {
  hasAlert: (state: State) => Alert;
  isLoading: (state: State) => boolean;
  userLogged: (state: State) => UserLogged;
}

export interface ActionsTypes extends ActionTree<RootState, any> {
  setAlert(
    this: Store<State>,
    { commit }: ActionContext<State, State>,
    payload: Alert
  ): void;
  setLoading(
    this: Store<State>,
    { commit }: ActionContext<State, State>,
    status: boolean
  ): void;
  setUserLogged(
    this: Store<State>,
    { commit }: ActionContext<State, State>,
    user: UserLogged
  ): void;
}
