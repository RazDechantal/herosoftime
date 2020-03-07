import { FETCH_LOAN } from "../Action/types";
import fire from "../Config/firebase";

// Retreiving the info from backend and dispatching to the store
export const fetchLoan = boxes => dispatch => {
  var ref = fire
    .database()
    .ref()
    .child("Loans")
    .orderByChild("company");

  const orderdList = [];

  ref.on(
    "value",
    function(snapshot) {
      //debugger;

      snapshot.forEach(function(item) {
        console.log(item.val());
        orderdList.push(item.val());
      });
      dispatch({
        type: FETCH_LOAN,
        //payload: boxes.anmarkningBox ? orderdList : snapshot.val()
        payload: orderdList
      });
    },
    function(error) {
      console.log("Error: " + error.code);
    }
  );

  //debugger;
};

/*        payload: boxes.anmarkningBox
          ? .filter(item => item.BadRecordCheck == "Yes")
          : snapshot.val()
 */
