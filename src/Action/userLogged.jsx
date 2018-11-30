import { USER_LOGGED } from "./types";

// Retreiving the info from backend and dispatching to the store
export const userLogged = state => dispatch => {
  dispatch({
    type: USER_LOGGED,
    payload: state
  });
};
