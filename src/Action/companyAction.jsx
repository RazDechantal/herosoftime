import {
  UPDATE_COMPANY_SUCCEDDED,
  UPDATE_COMPANY_FAILED,
  FETCH_COMPANIES,
  WRITE_MONEY_STAT,
  DELETE_COMPANY_SUCCEDDED,
  DELETE_COMPANY_FAILED
} from "../Action/types";

// Firebase
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import cloudConfig from "../Config/cloudFirebase";

const db = firebase.firestore(cloudConfig);
db.settings({
  timestampsInSnapshots: true
});

const loans = db.collection("Loans");

// Retreiving the info from backend and dispatching to the store
export const companyAction = filter => dispatch => {
  const loanList = [];
  const tempList = [];

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

export const update = item => dispatch => {
  var docRef = db.collection("Loans").doc(item.company);
  docRef
    .update(item)
    .then(() => {
      dispatch({ type: UPDATE_COMPANY_SUCCEDDED, payload: item });
    })
    .catch(error => {
      dispatch({ type: UPDATE_COMPANY_FAILED, payload: error });
    });
};

export const deleteItem = item => dispatch => {
  loans
    .doc(item.company)
    .delete()
    .then(() => {
      dispatch({ type: DELETE_COMPANY_SUCCEDDED, payload: item });
    })
    .catch(error => {
      dispatch({ type: DELETE_COMPANY_FAILED, payload: error });
    });
};
