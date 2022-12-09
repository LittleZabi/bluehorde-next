import { createContext, useReducer } from "react";
import Cookies from "js-cookie";
// import cookieCutter from 'cookie-cutter'
import reducer from "./reducers";
export const Store = createContext({});
const initialState = {
  user: Cookies.get("user") ? JSON.parse(Cookies.get("user")) : null,
  cart: {
    items: 5,
  },
};

export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{children}</Store.Provider>;
}
