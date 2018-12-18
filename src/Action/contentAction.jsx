import { FETCH_CONTENTS } from "../Action/types";

// Firebase
import firebase from "firebase";
import dbConfig from "../Config/cloudFirebase";

// Retreiving the info from backend and dispatching to the store
export const fetchContents = myTitle => dispatch => {
  const loanList = [];

  var db = firebase.firestore(dbConfig);

  var loans = db.collection("Content");
  var query = loans.where("title", "==", myTitle);

  query.get().then(querySnapshot => {
    querySnapshot.forEach(doc => {
      loanList.push(doc.data());
    });

    dispatch({
      type: FETCH_CONTENTS,
      payload: loanList
    });
  });
};
