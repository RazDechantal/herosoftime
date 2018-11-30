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

export default function(state = initialState, action) {
  switch (action.type) {
    case USER_LOGGED:
      return {
        ...state,
        loggedIn: action.payload
      };
    case ADD_USER:
      return {
        ...state,
        user: action.payload
      };
    case FETCH_USER:
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
