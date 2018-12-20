import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  SIGNOUT_SUCCESS,
  SIGNOUT_ERROR,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR
} from "./types";

import admin from "../Config/firebase";

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
          payload: err
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
          payload: err
        });
      });
  };
};

export const signUp = credentials => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
<<<<<<< HEAD
    //const firebase = getFirebase();
    const firestore = getFirestore();
    admin
=======
    const firebase = getFirebase();
    const firestore = getFirestore();
    firebase
>>>>>>> 02a5d253aa9e50413e6c99835a249f134b39241c
      .auth()
      .createUserWithEmailAndPassword(credentials.email, credentials.password)
      .then(resp => {
        return firestore
          .collection("users")
          .doc(resp.user.uid)
          .set({
            firstName: credentials.name,
            lastName: credentials.family,
            role: credentials.role,
            address: credentials.address,
            zip: credentials.zip,
            city: credentials.city,
            country: credentials.country,
            accountNumber: credentials.account
          });
      })
      .then(() => {
        dispatch({ type: SIGNUP_SUCCESS });
        admin.auth().signOut();
      })
      .catch(err => {
        dispatch({
          type: SIGNUP_ERROR,
          payload: err
        });
      });
  };
};
