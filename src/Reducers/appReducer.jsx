import {
  WRITE_BOX_STAT,
  WRITE_STAT,
  READ_STAT,
  WRITE_MONEY_STAT
} from "../Action/types";

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
  step: 0,
  privateBox: false,
  anmarkningBox: false,
  ucBox: false,
  smsBox: false
};

export default function(state = initialState, action) {
  //debugger;
  switch (action.type) {
    case READ_STAT:
      return initialState;
    case WRITE_BOX_STAT:
      return {
        ...state,
        privateBox: action.payload.privateBox,
        anmarkningBox: action.payload.anmarkningBox,
        ucBox: action.payload.ucBox,
        smsBox: action.payload.smsBox
      };
    case WRITE_STAT:
      return {
        ...state,
        present: action.payload
      };
    case WRITE_MONEY_STAT:
      return {
        ...state,
        loanPeriod: action.payload
      };
    default:
      return state;
  }
}
