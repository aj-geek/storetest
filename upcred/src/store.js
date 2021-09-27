import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {
  productListReducers,
  productItemReducers,
} from "./reducers/productReducers";

import { cartReducer } from "./reducers/cartReducers";
import { userLoginReducer } from "./reducers/userReducers";
import { orderReducer } from "./reducers/orderReducers";

const reducer = combineReducers({
  productList: productListReducers,
  productItem: productItemReducers,
  cart: cartReducer,
  userLogin: userLoginReducer,
  orderR : orderReducer,
});

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  cart: { cartItems: cartItemsFromStorage },
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
