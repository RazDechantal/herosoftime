import { ADD_USER } from "./types";

// Retreiving the info from backend and dispatching to the store
export const addUser = user => dispatch => {
  dispatch({
    type: ADD_USER,
    payload: user
  });
};
