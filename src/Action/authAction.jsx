import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  SIGNOUT_SUCCESS,
  SIGNOUT_ERROR,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR
} from "./types";

import fire from "../Config/cloudFirebase";

export const signIn = credentials => {
  return (dispatch, getState, { getFirebase }) => {
    const fire = getFirebase();

    fire
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({ type: LOGIN_SUCCESS });
      })
      .catch(err => {
        dispatch({
          type: LOGIN_ERROR,
          err
        });
      });
  };
};

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const fire = getFirebase();
    fire
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: SIGNOUT_SUCCESS });
      })
      .catch(err => {
        dispatch({
          type: SIGNOUT_ERROR,
          err
        });
      });
  };
};

export const signUp = credentials => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .createUserWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({ type: SIGNUP_SUCCESS });
      })
      .catch(err => {
        let error = {
          errorCode: err.code,
          errorMessage: err.message
        };
        dispatch({
          type: SIGNUP_ERROR,
          payload: error
        });
      });
  };
};
