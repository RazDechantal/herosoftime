import { FETCH_COMPANIES } from "../Action/types";
import fire from "../Config/firebase";

// Retreiving the info from backend and dispatching to the store
export const fetchCompanies = () => dispatch => {
  var ref = fire
    .database()
    .ref()
    .child("Companies")
    .orderByChild("company");

  const orderdList = [];

  ref.once(
    "value",
    function(snapshot) {
      /* Performance should be improved */
      //console.log("key", JSON.stringify(snapshot.key));
      //console.log("val", JSON.stringify(snapshot.val()));
      //console.log("numChildren", JSON.stringify(snapshot.numChildren()));
      snapshot.forEach(function(item) {
        console.log(item.val());
        orderdList.push(item.val());
      });

      dispatch({
        type: FETCH_COMPANIES,
        payload: orderdList
      });
    },
    function(error) {
      console.log("Error: " + error.code);
    }
  );
};
