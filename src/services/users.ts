import { User } from "./../store/GLOBAL/types";
import { AxiosInstance } from "axios";

export type SignUpUser = Pick<User, "name" | "email" | "password">;
export type ResponseSignUpAndSignIn = Promise<{ data: Omit<User, "password"> }>;
export type SignInUser = Pick<User, "email" | "password">;

export default (httpClient: AxiosInstance) => ({
  signUp: async (signUpUser: SignUpUser): ResponseSignUpAndSignIn => {
    const response = await httpClient.post("/users", signUpUser);

    return {
      data: response.data,
    };
  },
  signIn: async (signInUser: SignInUser): ResponseSignUpAndSignIn => {
    const response = await httpClient.post("/users/login", signInUser);

    return {
      data: response.data,
    };
  },
});
