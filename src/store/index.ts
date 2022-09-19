import Vue from "vue";
import Vuex from "vuex";
import GLOBAL from "./GLOBAL/index";
import TO_DO from "./TO_DO/index";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    TO_DO,
    GLOBAL,
  },
});
