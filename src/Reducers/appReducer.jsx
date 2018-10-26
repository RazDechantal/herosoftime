import { WRITE_STAT, READ_STAT, WRITE_MONEY_STAT } from "../Action/types";

const initialState = {
  bankName: "",
  loanSum: 0,
  loanPeriod: 0,
  yearMin: 1,
  yearMAx: 10,
  loanPresent: 0,
  loanStep: 1,
  min: 500,
  max: 600000,
  present: 500,
  step: 0
};

export default function(state = initialState, action) {
  switch (action.type) {
    case READ_STAT:
      return initialState;

    case WRITE_STAT:
      return {
        ...state,
        present: action.payload
      };
    case WRITE_MONEY_STAT:
      return {
        ...state,
        loanPresent: action.payload
      };
    default:
      return state;
  }
}
