import firebase from "firebase";

var cloudConfig = {
  apiKey: "AIzaSyBNXgoA5YEN8PnwGQkBeBj1LFmpwzWI0Ns",
  authDomain: "myclouddb-408b1.firebaseapp.com",
  databaseURL: "https://myclouddb-408b1.firebaseio.com",
  projectId: "myclouddb-408b1",
  storageBucket: "",
  messagingSenderId: "788823017783"
};

const fire = firebase.initializeApp(cloudConfig, "CloudConfig");

export default fire;
