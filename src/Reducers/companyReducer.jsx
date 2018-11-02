import { FETCH_COMPANIES, FETCH_ONE_COMPANY } from "../Action/types";

const initialState = {
  items: [],
  item: {},
  futureItem: {},
  comp: "test"
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_COMPANIES:
      return {
        ...state,
        items: action.payload
      };
    case FETCH_ONE_COMPANY:
      return {
        ...state,
        item: action.payload
      };
    default:
      return state;
  }
}
