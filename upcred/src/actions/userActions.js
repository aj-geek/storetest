import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
} from "../constants/userConstants";


export const login = (aToken) => async (dispatch, getState) => {
  //const clientId = "SjeuaPkkKkh7mNh0S3QltG9i3ejWqwsB";
  //const domain = "dev-rsmyff-m.us.auth0.com";
  //const lock = new Auth0Lock(clientId, domain);
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: aToken,
    });

    localStorage.setItem(
      "userInfo",
      JSON.stringify(getState().userLogin.userInfo)
    );
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: error.message,
    });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem('userInfo');

  dispatch({
    type:USER_LOGOUT,
    
  })
};



