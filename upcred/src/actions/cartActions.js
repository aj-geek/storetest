import axios from "axios";
import { CART_ITEM_ADD, CART_ITEM_DELETE } from "../constants/cartConstants";

export const addToCart = (id) => async (dispatch, getState) => {
  const { data } = await axios.get(`http://localhost:3006/products/${id}`);

  dispatch({
    type: CART_ITEM_ADD,
    payload: {
      product: data.id,
      name: data.name,
      price: data.price,
    },
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const deleteFromCart = (id) => async (dispatch, getState) => {
  

  dispatch({
    type: CART_ITEM_DELETE,
    payload: id,
      
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

