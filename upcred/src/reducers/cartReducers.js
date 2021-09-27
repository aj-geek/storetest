import { CART_ITEM_ADD, CART_ITEM_DELETE } from "../constants/cartConstants";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ITEM_ADD:
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x.product === item.product);

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }

      case CART_ITEM_DELETE:
        return{
          ...state,
          cartItems:state.cartItems.filter(x => x.product !== action.payload)
        }

    default:
      return state;
  }
};


