import firebase from "firebase/app";
//import * as admin from "firebase-admin";

/*var config = {
  apiKey: "AIzaSyD6ERZp0d4tpG_yMKYGkLv3b-Yr3ogwYb0",
  authDomain: "loanhero-74bd5.firebaseapp.com",
  databaseURL: "https://loanhero-74bd5.firebaseio.com",
  projectId: "loanhero-74bd5",
  storageBucket: "loanhero-74bd5.appspot.com",
  messagingSenderId: "219378326417"
};*/

var config = {
  apiKey: "AIzaSyBNXgoA5YEN8PnwGQkBeBj1LFmpwzWI0Ns",
  authDomain: "myclouddb-408b1.firebaseapp.com",
  databaseURL: "https://myclouddb-408b1.firebaseio.com",
  projectId: "myclouddb-408b1",
  storageBucket: "",
  messagingSenderId: "788823017783"
};

//const adminCred = admin.initializeApp(config, "admin");

const fireRealDb = firebase.initializeApp(config, "Secondary");
export default fireRealDb;
