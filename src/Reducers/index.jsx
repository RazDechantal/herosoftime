/***************************************************************************/
/* Reducers specify how the application's state changes in response to     */
/* actions sent to the store. Remember that actions only describe what     */
/* happened, but don't describe how the application's state changes.       */
/* The reducer is a pure function that takes the previous state and an     */
/* action, and returns the next state. (previousState, action) => newState */
/***************************************************************************/
import { combineReducers } from "redux";
import appReducer from "./appReducer";
import postReducer from "./postReducer";
import userReducer from "./userReducer";
import companyReducer from "./companyReducer";
import offerReducer from "./offerReducer";
import contentReducer from "./contentReducer";

export default combineReducers({
  app: appReducer,
  posts: postReducer,
  companies: companyReducer,
  offers: offerReducer,
  users: userReducer,
  contents: contentReducer
});
