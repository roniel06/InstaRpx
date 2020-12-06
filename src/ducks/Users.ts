import { Dispatch } from "redux";
import { IServices } from "../services/firebase";

interface ILogin {
  email: string;
  password: string;
}

export default function reducer(state = {}, action) {
  return state;
}

export const login = ({ email, password }: ILogin) => async (
  dispatch: Dispatch,
  getState: () => any,
  { auth }: IServices
) => {
  const result = await auth.signInWithEmailAndPassword(email, password);
  console.log(result);
};
