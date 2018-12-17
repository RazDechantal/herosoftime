import { FETCH_CONTENTS } from "../Action/types";
import dbConfig from "../Config/firebase";

const db = firebase.firestore(dbConfig);

// Retreiving the info from backend and dispatching to the store
export const fetchContents = myTitle => dispatch => {
  var loans = db.collection("Content");

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
        dispatch({
          type: FETCH_CONTENTS,
          payload: snapshot.val()
        });
      },
      function(error) {
        console.log("Error: " + error.code);
      }
    );
};
