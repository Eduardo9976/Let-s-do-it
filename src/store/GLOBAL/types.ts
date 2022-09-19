import {
  MutationTree,
  GetterTree,
  ActionTree,
  Store,
  ActionContext,
} from "vuex/types";

export interface State {
  error: boolean;
  loading: boolean;
}

export type RootState = ReturnType<() => State>;

export enum Mutations {
  SET_ERROR = "SET_ERROR",
  SET_LOADING = "SET_LOADING",
}

export interface MutationsInterface extends MutationTree<RootState> {
  [Mutations.SET_ERROR](state: State, status: boolean): void;
  [Mutations.SET_LOADING](state: State, status: boolean): void;
}

export interface Getters extends GetterTree<RootState, any> {
  hasError: (state: State) => boolean;
  isLoading: (state: State) => boolean;
}

export interface ActionsTypes extends ActionTree<RootState, any> {
  setError(
    this: Store<State>,
    { commit }: ActionContext<State, State>,
    status: boolean
  ): void;
  setLoading(
    this: Store<State>,
    { commit }: ActionContext<State, State>,
    status: boolean
  ): void;
}
