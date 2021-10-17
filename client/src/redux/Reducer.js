import { combineReducers } from "redux";
import { tikersReducer } from "./tikersreducer";
import { cartReducer } from "./cartReducer";

export const rootReducer = combineReducers({
  tickers: tikersReducer,
  cart: cartReducer,
});
