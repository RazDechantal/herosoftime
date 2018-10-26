import { FETCH_COMPANIES, NEW_COMPANY } from "../Action/types";
import fire from "../Config/firebase";

// Retreiving the info from backend and dispatching to the store
export const fetchCompanies = () => dispatch => {
  var ref = fire
    .database()
    .ref()
    .child("Companies");

  ref.on(
    "value",
    function(snapshot) {
      dispatch({
        type: FETCH_COMPANIES,
        payload: snapshot.val()
      });
    },
    function(error) {
      console.log("Error: " + error.code);
    }
  );

  //debugger;
};
