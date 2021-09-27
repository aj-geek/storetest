import { ORDER_CREATE } from "../constants/orderConstants";

export const orderReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case ORDER_CREATE:
      return {};

    default:
      return state;
  }
};
