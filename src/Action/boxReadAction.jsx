import { READ_STAT } from "../Action/types";

// Retreiving the info from backend and dispatching to the store
export const readBoxStat = () => dispatch => {
  dispatch({
    type: READ_STAT,
    payload: null
  });
};
