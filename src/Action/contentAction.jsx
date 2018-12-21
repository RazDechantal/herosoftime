import { FETCH_CONTENTS } from "../Action/types";

// Firebase
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import dbConfig from "../Config/cloudFirebase";

// Retreiving the info from backend and dispatching to the store
export const fetchContents = () => dispatch => {
  const loanList = [];

  var db = firebase.firestore(dbConfig);

  var query = db.collection("Content");
  //var query = loans.where("title", "==", myTitle);

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
