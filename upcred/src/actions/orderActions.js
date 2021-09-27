import { ORDER_CREATE } from "../constants/orderConstants";

export const clearCart = () => (dispatch) => {
  localStorage.removeItem("cartItems");
  
  dispatch({
    type: ORDER_CREATE,
  });
};
