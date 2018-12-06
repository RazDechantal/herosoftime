import { FETCH_COMPANIES, WRITE_MONEY_STAT } from "../Action/types";

// Firebase
import firebase from "firebase";
import cloudConfig from "../Config/cloudFirebase";

// Retreiving the info from backend and dispatching to the store
export const companyAction = filter => dispatch => {
  const loanList = [];
  const tempList = [];

  var db = firebase.firestore(cloudConfig);
  db.settings({
    timestampsInSnapshots: true
  });
  var loans = db.collection("Loans");
  var query = loans.where("MaxLoan", ">=", filter.loanSum);

  query.get().then(querySnapshot => {
    querySnapshot.forEach(doc => {
      loanList.push(doc.data());
    });
    loanList.forEach(element => {
      if (element.MaxPer >= filter.loanPeriod) tempList.push(element);
    });

    dispatch({
      type: FETCH_COMPANIES,
      payload: tempList
    });
    dispatch({
      type: WRITE_MONEY_STAT,
      payload: filter.loanPeriod
    });
  });
};
