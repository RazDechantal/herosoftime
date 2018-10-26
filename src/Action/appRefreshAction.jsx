import { WRITE_STAT } from "../Action/types";

// Retreiving the info from backend and dispatching to the store
export const writeStat = (stat, ACTION) => dispatch => {
  dispatch({
    type: ACTION,
    payload: stat
  });
  //debugger;
};
