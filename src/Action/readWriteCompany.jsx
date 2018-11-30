import { WRITE_COMPANY, FETCH_ONE_COMPANY } from "./types";

// Retreiving the info from backend and dispatching to the store
export const readWriteCompany = Stat => dispatch => {
  dispatch({
    type: WRITE_COMPANY,
    payload: Stat
  });
  dispatch({
    type: FETCH_ONE_COMPANY,
    payload: Stat
  });
};
