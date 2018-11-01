import { FETCH_LOAN } from "../Action/types";
import fire from "../Config/firebase";

// Retreiving the info from backend and dispatching to the store
export const fetchLoan = () => dispatch => {
  var ref = fire
    .database()
    .ref()
    .child("Loans");

  ref.on(
    "value",
    function(snapshot) {
      dispatch({
        type: FETCH_LOAN,
        payload: snapshot.val()
      });
    },
    function(error) {
      console.log("Error: " + error.code);
    }
  );

  //debugger;
};
