const initialState = {
  authError: null,
  name: "",
  family: "",
  email: "",
  password: ""
};

const authReducer = (state = initialState, action) => {
  switch (("Login error", action.type)) {
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
    case "LOGIN_ERROR":
      console.log("Login failed!", action.payload.message);
      return {
        ...state,
        authError: action.payload.message
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
    case "SIGNOUT_ERROR":
      console.log("Sigout failed");
      return {
        ...state,
        authError: action.payload.message,
        name: action.payload,
        family: action.payload,
        email: action.payload,
        password: action.payload
      };
    case "SIGNUP_SUCCESS":
      console.log("Signup succeded");
      return {
        ...state,
        authError: null
      };

    case "SIGNUP_ERROR":
      console.log("Signup failed");
      return {
        ...state,
        authError: action.payload.message
      };
    default:
      return state;
  }
};

export default authReducer;
