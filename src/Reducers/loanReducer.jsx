import { FETCH_LOAN } from "../Action/types";

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_LOAN:
      return {
        ...state,
        items: action.payload
      };
    default:
      return state;
  }
}
