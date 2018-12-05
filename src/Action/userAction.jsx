import { FETCH_USERS, NEW_USER } from "./types";
import fire from "../Config/firebase";

// Retreiving the info from backend and dispatching to the store
export const fetchUsers = () => dispatch => {
  var ref = fire
    .database()
    .ref()
    .child("Users");

  ref.on(
    "value",
    function(snapshot) {
      console.log(snapshot.val());
      dispatch({
        type: FETCH_USERS,
        payload: snapshot.val()
      });
    },
    function(error) {
      console.log("Error: " + error.code);
    }
  );

  //debugger;
};
