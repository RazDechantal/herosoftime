const initialState = {
  authError: null,
  name: "",
  family: "",
  email: "",
  password: ""
};

const authReducer = (state = initialState, action) => {
  switch (("Login error", action.type)) {
    case "LOGIN_ERROR":
      console.log("Login failed!");
      return {
        ...state,
        authError: action.payload
      };
    case "LOGIN_SUCCESS":
      console.log("Login succeded!");
      return {
        ...state,
        authError: null,
        name: action.payload,
        family: action.payload,
        email: action.payload,
        password: action.payload
      };
    case "SIGNOUT_SUCCESS":
      console.log("Sign out succeded!");
      return {
        ...state,
        authError: null,
        name: "",
        family: "",
        email: "",
        password: ""
      };
    case "SIGNUP_SUCCESS":
      console.log("Signup succeded");
      return {
        ...state,
        authError: null,
        name: action.payload,
        family: action.payload,
        email: action.payload,
        password: action.payload
      };
    case "SIGNUP_ERROR":
      console.log("Sign up error", action.payload.errorMessage);
      console.log("Sign up error", action.payload.errorCode);
      return {
        ...state,
        authError: action.payload.errorMessage
      };
    default:
      return state;
  }
};

export default authReducer;
