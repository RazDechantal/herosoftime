import { FETCH_COMPANIES } from "../Action/types";
import { WRITE_MONEY_STAT } from "../Action/types";

// Firebase
import firebase from "firebase";
import cloudConfig from "../Config/cloudFirebase";

// Retreiving the info from backend and dispatching to the store
export const fetchCompanies = (loan, period) => dispatch => {
  const loanList = [];
  var db = firebase.firestore(cloudConfig);
  db.settings({
    timestampsInSnapshots: true
  });

  var loans = db.collection("Loans");
  var query = loans.where("MaxLoan", ">=", loan);

  query.get().then(querySnapshot => {
    querySnapshot.forEach(doc => {
      loanList.push(doc.data());
    });
    dispatch({
      type: FETCH_COMPANIES,
      payload: loanList
    });
    dispatch({
      type: WRITE_MONEY_STAT,
      payload: period
    });
  });
};
