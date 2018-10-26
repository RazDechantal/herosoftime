import { FETCH_OFFERS, NEW_OFFER } from "../Action/types";

const initialState = {
  items: [],
  item: {},
  futureItem: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_OFFERS:
      return {
        ...state,
        items: action.payload
      };
    default:
      return state;
  }
}
