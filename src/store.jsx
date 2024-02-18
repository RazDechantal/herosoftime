import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./Reducers";

import { reduxFirestore, getFirestore } from "redux-firestore";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import dbSetting from "./Config/cloudFirebase";

//Firebase
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

//firebase.initializeApp(dbSetting);
dbSetting.firestore().settings({ timestampsInSnapshots: true });

//debugger;
const initialState = {};
const rrfConfig = {
  useFirestoreForProfile: true,
  userProfile: "users",
  attachAuthIsReady: true
};

/* eslint-disable no-underscore-dangle */
const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(dbSetting),
    reactReduxFirebase(dbSetting, rrfConfig),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__({ trace: true, traceLimit: 25 })
      : f => f
  )
);

export default store;
