import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_ITEM_REQUEST,
  PRODUCT_ITEM_SUCCESS,
  PRODUCT_ITEM_FAIL,
} from "../constants/productConstants";

export const productListReducers = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };
    case PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload };

    case PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const productItemReducers = (state = { product: {} }, action) => {
  switch (action.type) {
    case PRODUCT_ITEM_REQUEST:
      return { loading: true, ...state };
    case PRODUCT_ITEM_SUCCESS:
      return { loading: false, product: action.payload };

    case PRODUCT_ITEM_FAIL:
      return { error: action.payload };

    default:
      return state;
  }
};
