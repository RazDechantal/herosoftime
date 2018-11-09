import React, { Component } from "react";
import { Row, Col } from "reactstrap";

// Firebase
import fire from "../../Config/firebase";
import firebase from "firebase";
import cloudConfig from "../../Config/cloudFirebase";

const refCloud = cloudConfig.database().ref();
const db = firebase.firestore(cloudConfig);
db.settings({
  timestampsInSnapshots: true
});

var loanList = [];

const Crud = {
  refCloud: refCloud,
  db: db,
  readUsers: function() {
    this.db
      .collection("users")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          console.log(`${doc.id} => ${doc.data().first} ${doc.data().last}`);
        });
      });
  },
  getCityInfo: function(collection, doc) {
    var docRef = this.db.collection(collection).doc(doc);

    docRef
      .get()
      .then(function(doc) {
        if (doc.exists) {
          console.log("Document data:", doc.data());
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch(function(error) {
        console.log("Error getting document:", error);
      });
  },
  getCompanyInfo: function(company) {
    var docRef = this.db.collection("Loans").doc(company);

    docRef
      .get()
      .then(function(doc) {
        if (doc.exists) {
          console.log("Document data:", doc.data());
          return doc.data();
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
          return null;
        }
      })
      .catch(function(error) {
        console.log("Error getting document:", error);
      });
  },
  getAllCompanies: function(mylist) {
    var list = [];
    db.collection("Loans")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          list.push(doc.data());
          console.log(
            `${doc.id} => ${doc.data().company} ${doc.data().AgeLimit}`
          );
        });
        return list;
        //console.log(this.state.loanlist);
      });
  }

  /*createTable: function(table) {
    let Loans = this.db.collection(table);
    Loans.doc("Advisa").set({
      id: 1,
      company: "Advisa",
      InterestRate: "2.95",
      MaxLoan: "600000",
      AgeLimit: "18",
      NoCreditCheck: "No",
      MinIncome: "120000",
      CustomerLimit: "None",
      BadRecordCheck: "No",
      logo:
        "https://cdn.financer.com/sv/wp-content/uploads/sites/2/advisa-logo-2018.png",
      private: "Yes",
      sms: "No"
    });

    Loans.doc("Lendo").set({
      id: 2,
      company: "Lendo",
      InterestRate: "2.95",
      MaxLoan: "500000",
      AgeLimit: "19",
      NoCreditCheck: "No",
      MinIncome: "100000",
      CustomerLimit: "None",
      BadRecordCheck: "No",
      logo:
        "https://cdn.financer.com/sv/wp-content/uploads/sites/2/lendo-logo-2018-1.png",
      private: "No",
      sms: "No"
    });

    Loans.doc("Direkto").set({
      id: 3,
      company: "Direkto",
      InterestRate: "2.95",
      MaxLoan: "500000",
      AgeLimit: "20",
      NoCreditCheck: "No",
      MinIncome: "150000",
      CustomerLimit: "None",
      BadRecordCheck: "No",
      logo:
        "https://cdn.financer.com/sv/wp-content/uploads/sites/2/logo-dark-1-e1494921133971.png",
      private: "No",
      sms: "No"
    });

    Loans.doc("Lendify").set({
      id: 4,
      company: "Lendify",
      InterestRate: "2.95",
      MaxLoan: "500000",
      AgeLimit: "19",
      NoCreditCheck: "No",
      MinIncome: "180000",
      CustomerLimit: "None",
      BadRecordCheck: "Yes",
      logo:
        "https://cdn.financer.com/sv/wp-content/uploads/sites/2/lendify.png",
      private: "No",
      sms: "No"
    });

    Loans.doc("Consector").set({
      id: 5,
      company: "Consector",
      InterestRate: "2.95",
      MaxLoan: "600000",
      AgeLimit: "18",
      NoCreditCheck: "No",
      MinIncome: "120000",
      CustomerLimit: "None",
      BadRecordCheck: "Yes",
      logo:
        "https://cdn.financer.com/sv/wp-content/uploads/sites/2/consector-1.jpg",
      private: "No",
      sms: "No"
    });

    Loans.doc("Freedomfinance").set({
      id: 6,
      company: "FreedomFinance",
      InterestRate: "3.54",
      MaxLoan: "600000",
      AgeLimit: "18",
      NoCreditCheck: "No",
      MinIncome: "100000",
      CustomerLimit: "None",
      BadRecordCheck: "No",
      logo:
        "https://cdn.financer.com/sv/wp-content/uploads/sites/2/freedom-finance-logo.png",
      private: "Yes",
      sms: "No"
    });

    Loans.doc("Zmatra").set({
      id: 7,
      company: "Zmatra",
      InterestRate: "3.54",
      MaxLoan: "600000",
      AgeLimit: "18",
      NoCreditCheck: "No",
      MinIncome: "100000",
      CustomerLimit: "None",
      BadRecordCheck: "Yes",
      logo:
        "https://cdn.financer.com/sv/wp-content/uploads/sites/2/zmarta-1.jpg",
      private: "No",
      sms: "No"
    });

    Loans.doc("Pengino").set({
      id: 8,
      company: "Pengino",
      InterestRate: "3.54",
      MaxLoan: "500000",
      AgeLimit: "18",
      NoCreditCheck: "No",
      MinIncome: "100000",
      CustomerLimit: "None",
      BadRecordCheck: "Yes",
      logo:
        "https://cdn.financer.com/sv/wp-content/uploads/sites/2/pengino-1.png",
      private: "No",
      sms: "No"
    });

    Loans.doc("ArcadiaFinans").set({
      id: 9,
      company: "ArcadiaFinans",
      InterestRate: "3.54",
      MaxLoan: "600000",
      AgeLimit: "18",
      NoCreditCheck: "No",
      MinIncome: "120000",
      CustomerLimit: "None",
      BadRecordCheck: "No",
      logo:
        "https://cdn.financer.com/sv/wp-content/uploads/sites/2/Arcadia.png",
      private: "No",
      sms: "No"
    });

    Loans.doc("Santander").set({
      id: 10,
      company: "Santander",
      InterestRate: "3.54",
      MaxLoan: "350000",
      AgeLimit: "20",
      NoCreditCheck: "No",
      MinIncome: "150000",
      CustomerLimit: "None",
      BadRecordCheck: "No",
      logo:
        "https://cdn.financer.com/sv/wp-content/uploads/sites/2/santander.jpg",
      private: "No",
      sms: "No"
    });

    Loans.doc("Marginalen").set({
      id: 11,
      company: "Marginalen",
      InterestRate: "3.50",
      MaxLoan: "350000",
      AgeLimit: "20",
      NoCreditCheck: "No",
      MinIncome: "150000",
      CustomerLimit: "None",
      BadRecordCheck: "Yes",
      logo:
        "https://cdn.financer.com/sv/wp-content/uploads/sites/2/marginalen.jpg",
      private: "No",
      sms: "No"
    });

    Loans.doc("Bynk").set({
      id: 12,
      company: "Bynk",
      InterestRate: "3.95",
      MaxLoan: "300000",
      AgeLimit: "20",
      NoCreditCheck: "No",
      MinIncome: "100000",
      CustomerLimit: "None",
      BadRecordCheck: "No",
      logo:
        "https://cdn.financer.com/sv/wp-content/uploads/sites/2/016185555-e1494927104179.jpg",
      private: "Yes",
      sms: "No"
    });

    Loans.doc("Farratum").set({
      id: 13,
      company: "Farratum",
      InterestRate: "0",
      MaxLoan: "25000",
      AgeLimit: "20",
      NoCreditCheck: "No",
      MinIncome: "10000",
      CustomerLimit: "None",
      BadRecordCheck: "No",
      logo:
        "https://cdn.financer.com/sv/wp-content/uploads/sites/2/ferratum.png",
      private: "No",
      sms: "Yes"
    });

    Loans.doc("Monetti").set({
      id: 14,
      company: "Monetti",
      InterestRate: "0",
      MaxLoan: "20000",
      AgeLimit: "20",
      NoCreditCheck: "No",
      MinIncome: "10000",
      CustomerLimit: "None",
      BadRecordCheck: "No",
      logo:
        "https://cdn.financer.com/sv/wp-content/uploads/sites/2/monetti.png",
      private: "No",
      sms: "*Yes"
    });

    Loans.doc("Vivus").set({
      id: 15,
      company: "Vivus",
      InterestRate: "0",
      MaxLoan: "6000",
      AgeLimit: "20",
      NoCreditCheck: "No",
      MinIncome: "10000",
      CustomerLimit: "None",
      BadRecordCheck: "No",
      logo:
        "https://cdn.financer.com/sv/wp-content/uploads/sites/2/vivus-2.png",
      private: "No",
      sms: "Yes"
    });
  },*/
};

export default Crud;
