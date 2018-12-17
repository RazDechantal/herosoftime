import firebase from "firebase/app";

var cloudConfig = {
  apiKey: "AIzaSyBNXgoA5YEN8PnwGQkBeBj1LFmpwzWI0Ns",
  authDomain: "myclouddb-408b1.firebaseapp.com",
  databaseURL: "https://myclouddb-408b1.firebaseio.com",
  projectId: "myclouddb-408b1",
  storageBucket: "",
  messagingSenderId: "788823017783"
};

var app = firebase.initializeApp(cloudConfig);
//firebase.firestore().settings({ timestampsInSnapshots: true });

export default app;
