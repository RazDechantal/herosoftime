import {
  USER_LOGGED,
  ADD_USER,
  FETCH_USER,
  FETCH_USERS
} from "../Action/types";

const initialState = {
  user: {
    name: "",
    family: "",
    email: "",
    password: ""
  },
  loggedIn: false,
  users: []
};

const test = {
  name: "amir"
};

export default function(state = initialState, action) {
  //debugger;
  switch (action.type) {
    case USER_LOGGED:
      //debugger;
      return {
        ...state,
        loggedIn: action.payload
      };
    case ADD_USER:
      //debugger;
      return {
        ...state,
        user: action.payload
      };
    case FETCH_USER:
      console.log("the user status is fetched: " + initialState.loggedIn);
      return initialState;
    case FETCH_USERS:
      return {
        ...state,
        users: action.payload
      };
    default:
      return state;
  }
}
