import { FETCH_USER } from "./types";

// Retreiving the info from backend and dispatching to the store
export const fetchUser = () => dispatch => {
  dispatch({
    type: FETCH_USER
  });
};
