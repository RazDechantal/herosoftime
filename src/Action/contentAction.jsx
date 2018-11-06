import { FETCH_CONTENTS } from "../Action/types";
import fire from "../Config/firebase";

// Retreiving the info from backend and dispatching to the store
export const fetchContents = myTitle => dispatch => {
  var ref = fire
    .database()
    .ref()
    .child("Lorem");

  ref
    .orderByChild("title")
    .equalTo(myTitle)
    .on(
      "value",
      function(snapshot) {
        console.log("content action");
        console.log(snapshot.val()[0]);
        dispatch({
          type: FETCH_CONTENTS,
          payload: snapshot.val()
        });
      },
      function(error) {
        console.log("Error: " + error.code);
      }
    );

  //debugger;
};
