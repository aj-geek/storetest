import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/userActions";
import Auth0Lock from "auth0-lock";

function LoginScreen({ location, history }) {
  const clientId = "SjeuaPkkKkh7mNh0S3QltG9i3ejWqwsB";
  const domain = "dev-rsmyff-m.us.auth0.com";

  const llogin = useSelector((state) => state.userLogin);
  const { userInfo } = llogin;
  const redirect = location.search ? location.search.split("=")[1] : "/home";
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(userInfo);
    if (userInfo) {
      history.push(redirect);
    } else {
      componentMount(clientId, domain);
    }
  }, [history, userInfo, redirect]);

  const componentMount = (clientId, domain) => {
    const lock = new Auth0Lock(clientId, domain);
    showLoack(lock);
  };

  const setToken = (aT) => {
    dispatch(login(aT));
  };

  const showLoack = (lock) => {
    lock.show();
    lock.on("authenticated", (authResult) => {
      //   console.log(authResult)
      //   localStorage.setItem(
      //     ("accessToken", JSON.stringify(authResult.accessToken))
      setToken(authResult.accessToken);
    });
  };

  return <div>Login</div>;
}

export default LoginScreen;
