import { GET_CART } from "../const";
const initialState = {
  cart: [],
};

export const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CART:
      return {
        ...state,
        cart: payload,
      };

    default:
      return state;
  }
};
