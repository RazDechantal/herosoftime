import { FETCH_CONTENTS, NEW_CONTENT } from "../Action/types";

const initialState = {
  items: [],
  item: {},
  futureItem: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_CONTENTS:
      return {
        ...state,
        items: action.payload
      };
    default:
      return state;
  }
}
