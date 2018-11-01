import { WRITE_BOX_STAT } from "../Action/types";

// Retreiving the info from backend and dispatching to the store
export const writeBoxStat = (stat, ACTION) => dispatch => {
  dispatch({
    type: WRITE_BOX_STAT,
    payload: stat
  });
};
