import { FETCH_USERS, NEW_USER } from "../Action/types";

const initialState = {
  items: [],
  item: {},
  futureItem: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        items: action.payload
      };
    default:
      return state;
  }
}
