import axios from "axios";
import UsersService from "./users";
import store from "../store";

const API_ENVS = {
  production: "",
  development: "",
  local: "http://localhost:8071/api",
};

const httpClient = axios.create({
  baseURL: API_ENVS.local,
});

httpClient.interceptors.request.use((config) => {
  store.dispatch("GLOBAL/setLoading", true);
  return config;
});

httpClient.interceptors.response.use(
  (response) => {
    store.dispatch("GLOBAL/setLoading", false);
    return response;
  },
  (error) => {
    store.dispatch("GLOBAL/setLoading", false);
    const typeError = error.response.status === 400 ? "warning" : "error";
    store.dispatch("GLOBAL/setAlert", {
      type: typeError,
      message: error.response.data,
    });
    return error;
  }
);

export default {
  users: UsersService(httpClient),
};
