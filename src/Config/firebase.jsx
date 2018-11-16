import firebase from "firebase/app";

var config = {
  apiKey: "AIzaSyD6ERZp0d4tpG_yMKYGkLv3b-Yr3ogwYb0",
  authDomain: "loanhero-74bd5.firebaseapp.com",
  databaseURL: "https://loanhero-74bd5.firebaseio.com",
  projectId: "loanhero-74bd5",
  storageBucket: "loanhero-74bd5.appspot.com",
  messagingSenderId: "219378326417"
};

const fire = firebase.initializeApp(config);
export default fire;
