import { combineReducers } from "redux";
import { tikersReducer } from "./tikers-reducer";
import { cartReducer } from "./cart-reducer";

export const rootReducer = combineReducers({
  tickers: tikersReducer,
  cart: cartReducer,
});
