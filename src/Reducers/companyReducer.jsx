import {
  UPDATE_COMPANY_SUCCEDDED,
  UPDATE_COMPANY_FAILED,
  WRITE_COMPANY,
  FETCH_COMPANIES,
  FETCH_ONE_COMPANY,
  DELETE_COMPANY_SUCCEDDED,
  DELETE_COMPANY_FAILED
} from "../Action/types";

const initialState = {
  items: [],
  error: "",
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
    case UPDATE_COMPANY_SUCCEDDED:
      console.log("Document successfully updated!");
      return {
        ...state,
        company: action.payload,
        error: null
      };
    case UPDATE_COMPANY_FAILED:
      console.log("Document update failed!");
      return {
        ...state,
        error: action.payload.message
      };
    case DELETE_COMPANY_SUCCEDDED:
      console.log("Document deleted!");
      return {
        ...state,
        error: null
      };
    case DELETE_COMPANY_FAILED:
      console.log("Delete failed!");
      return {
        ...state,
        error: action.payload.message
      };
    case FETCH_ONE_COMPANY:
      return initialState;
    default:
      return state;
  }
}
