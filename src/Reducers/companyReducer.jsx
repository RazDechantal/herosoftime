import {
  WRITE_COMPANY,
  FETCH_COMPANIES,
  FETCH_ONE_COMPANY
} from "../Action/types";

const initialState = {
  items: [],
  company: {
    company: "testcompany",
    InterestRate: 0,
    MaxLoan: 0,
    MaxPer: 0,
    MonthlyPayment: 0,
    TotalExpense: 0,
    AgeLimit: 0,
    MinIncome: 0,
    CustomerLimit: "Yes",
    BadRecordCheck: "Yes",
    logo: "",
    private: "Yes",
    sms: "Yes",
    link: "Yes"
  },
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
    case WRITE_COMPANY:
      return {
        ...state,
        company: action.payload
      };
    case FETCH_ONE_COMPANY:
      return initialState;
    default:
      return state;
  }
}
