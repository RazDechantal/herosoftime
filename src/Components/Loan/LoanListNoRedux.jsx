import React, { Component } from "react";
import { Row, Col } from "reactstrap";

// Firebase
import fire from "../../Config/firebase";
import firebase from "firebase/app";
import cloudConfig from "../../Config/cloudFirebase";
// Css
import "../Company/company.scss";
import "../Checkbox/checkbox.scss";

class LoanListNoRedux extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      loanlist: []
    };

    this.boxes = {
      private: false,
      BadRecordCheck: false,
      NoCreditCheck: false,
      sms: false
    };

    this.stat = 0;
    this.templist = [];
    this.queries = [];

    this.ref = fire
      .database()
      .ref()
      .child("Loans");

    this.refCloud = cloudConfig
      .database()
      .ref()
      .child("Loans");

    this.db = firebase.firestore(cloudConfig);
    this.db.settings({
      timestampsInSnapshots: true
    });
    this.loans = this.db.collection("Loans");
  }

  handleChange(e) {
    this.updateCompStat();
  }

  updateCompStat() {
    let currentComponent = this;
    let statusFlag = { ...this.stat };
    const myboxes = {
      private: document.getElementById("privateBoxId").checked,
      BadRecordCheck: document.getElementById("anmarkningBoxId").checked,
      NoCreditCheck: document.getElementById("ucBoxId").checked,
      sms: document.getElementById("smsBoxId").checked
    };
    this.boxes = myboxes;
    //update the status
    if (
      !this.boxes.private &&
      !this.boxes.BadRecordCheck &&
      !this.boxes.NoCreditCheck &&
      !this.boxes.sms
    )
      statusFlag = 0;
    if (this.boxes.private) statusFlag = 1;
    if (this.boxes.BadRecordCheck) statusFlag = 2;
    if (this.boxes.NoCreditCheck) statusFlag = 3;
    if (this.boxes.sms) statusFlag = 4;
    if (this.boxes.private && this.boxes.BadRecordCheck) statusFlag = 5;
    if (this.boxes.private && this.boxes.NoCreditCheck) statusFlag = 6;
    if (this.boxes.private && this.boxes.sms) statusFlag = 7;
    if (this.boxes.BadRecordCheck && this.boxes.NoCreditCheck) statusFlag = 8;
    if (this.boxes.BadRecordCheck && this.boxes.sms) statusFlag = 9;
    if (this.boxes.NoCreditCheck && this.boxes.sms) statusFlag = 10;
    if (
      this.boxes.private &&
      this.boxes.BadRecordCheck &&
      this.boxes.NoCreditCheck
    )
      statusFlag = 11;
    if (this.boxes.private && this.boxes.BadRecordCheck && this.boxes.sms)
      statusFlag = 12;
    if (this.boxes.BadRecordCheck && this.boxes.NoCreditCheck && this.boxes.sms)
      statusFlag = 13;
    if (
      this.boxes.private &&
      this.boxes.BadRecordCheck &&
      this.boxes.NoCreditCheck &&
      this.boxes.sms
    )
      statusFlag = 14;
    this.stat = statusFlag;
    //currentComponent.setState({ loanlist: [] });
    currentComponent.getLoans();
  }

  componentWillMount() {
    this.getLoans();
  }

  getLoans() {
    let currentComponent = this;
    let query;
    this.queries = [];

    switch (this.stat) {
      case 0:
        query = currentComponent.loans;
        if (query) this.queries.push(query);
        break;
      case 1:
        query = currentComponent.loans.where("private", "==", "Yes");
        if (query) this.queries.push(query);
        break;
      case 2:
        query = currentComponent.loans.where("BadRecordCheck", "==", "Yes");
        if (query) this.queries.push(query);
        break;
      case 3:
        query = currentComponent.loans.where("NoCreditCheck", "==", "Yes");
        if (query) this.queries.push(query);
        break;
      case 4:
        query = currentComponent.loans.where("sms", "==", "Yes");
        if (query) this.queries.push(query);
        break;
      case 5:
        query = currentComponent.loans.where("private", "==", "Yes");
        if (query) this.queries.push(query);
        query = currentComponent.loans.where("BadRecordCheck", "==", "Yes");
        if (query) this.queries.push(query);
        break;
      case 6:
        query = currentComponent.loans.where("private", "==", "Yes");
        if (query) this.queries.push(query);
        query = currentComponent.loans.where("NoCreditCheck", "==", "Yes");
        if (query) this.queries.push(query);
        break;
      case 7:
        query = currentComponent.loans.where("private", "==", "Yes");
        if (query) this.queries.push(query);
        query = currentComponent.loans.where("sms", "==", "Yes");
        if (query) this.queries.push(query);
        break;
      case 8:
        query = currentComponent.loans.where("BadRecordCheck", "==", "Yes");
        if (query) this.queries.push(query);
        query = currentComponent.loans.where("NoCreditCheck", "==", "Yes");
        if (query) this.queries.push(query);
        break;
      case 9:
        query = currentComponent.loans.where("BadRecordCheck", "==", "Yes");
        if (query) this.queries.push(query);
        query = currentComponent.loans.where("sms", "==", "Yes");
        if (query) this.queries.push(query);
        break;
      case 10:
        query = currentComponent.loans.where("NoCreditCheck", "==", "Yes");
        if (query) this.queries.push(query);
        query = currentComponent.loans.where("sms", "==", "Yes");
        if (query) this.queries.push(query);
        break;
      case 11:
        query = currentComponent.loans.where("private", "==", "Yes");
        if (query) this.queries.push(query);
        query = currentComponent.loans.where("BadRecordCheck", "==", "Yes");
        if (query) this.queries.push(query);
        query = currentComponent.loans.where("NoCreditCheck", "==", "Yes");
        if (query) this.queries.push(query);
        break;
      case 12:
        query = currentComponent.loans.where("private", "==", "Yes");
        if (query) this.queries.push(query);
        query = currentComponent.loans.where("BadRecordCheck", "==", "Yes");
        if (query) this.queries.push(query);
        query = currentComponent.loans.where("sms", "==", "Yes");
        if (query) this.queries.push(query);
        break;
      case 13:
        query = currentComponent.loans.where("NoCreditCheck", "==", "Yes");
        if (query) this.queries.push(query);
        query = currentComponent.loans.where("BadRecordCheck", "==", "Yes");
        if (query) this.queries.push(query);
        query = currentComponent.loans.where("sms", "==", "Yes");
        if (query) this.queries.push(query);
        break;
      case 14:
        query = currentComponent.loans.where("private", "==", "Yes");
        if (query) this.queries.push(query);
        query = currentComponent.loans.where("BadRecordCheck", "==", "Yes");
        if (query) this.queries.push(query);
        query = currentComponent.loans.where("NoCreditCheck", "==", "Yes");
        if (query) this.queries.push(query);
        query = currentComponent.loans.where("sms", "==", "Yes");
        if (query) this.queries.push(query);
        break;
      default:
        query = currentComponent.loans;
        if (query) this.queries.push(query);
        break;
    }

    this.tempList = [];
    for (let i = 0; i < this.queries.length; i++) {
      this.queries[i].get().then(querySnapshot => {
        //currentComponent.setState({ loanlist: [] });
        querySnapshot.forEach(doc => {
          this.tempList.push(doc.data());
        });
        currentComponent.setState({ loanlist: this.tempList });
      });
    }
  }

  componentDidMount() {}

  render() {
    const loanitems = this.state.loanlist.map(loan => (
      <div key={loan.id} className="decoration">
        <Row>
          <Col xs="4">
            <img src={loan.logo} alt="" />
          </Col>
          <Col xl="4">
            <p>Interestrate: {loan.InterestRate}</p>
            <p>Max loan: {loan.MaxLoan}</p>
            <p>Age limit: {loan.AgeLimit}</p>
            <p>Credit-check: {loan.NoCreditCheck}</p>
          </Col>
          <Col xl="4">
            <p>Min-income: {loan.MinIncome}</p>
            <p>Customer-limit: {loan.CustomerLimit}</p>
            <p>BadRecordCheck: {loan.BadRecordCheck}</p>
            <a
              href={loan.link}
              className="button small applyYellow btn btn-primary btn-block"
            >
              Se erbjudande
            </a>
          </Col>
        </Row>
        <hr />
      </div>
    ));

    return (
      <div>
        <div className="item-categories">
          <div className="item-heading">Sortera olika lån</div>
          <div className="checkboxFive">
            <label id="Privatln" className="tag-container">
              <input
                type="checkbox"
                id="privateBoxId"
                defaultChecked={this.boxes.private}
                name="private"
                className="tag-check"
                onChange={this.handleChange}
              />
              Privatlån
            </label>
            <label id="Lnmedbetalningsanmrkning" className="tag-container">
              <input
                type="checkbox"
                id="anmarkningBoxId"
                defaultChecked={this.boxes.BadRecordCheck}
                name="BadRecordCheck"
                className="tag-check"
                onChange={this.handleChange}
              />
              Betalningsanmärkning
            </label>
            <label id="LnutanUC" className="tag-container">
              <input
                type="checkbox"
                id="ucBoxId"
                defaultChecked={this.boxes.NoCreditCheck}
                name="NoCreditCheck"
                className="tag-check"
                onChange={this.handleChange}
              />
              Utan UC
            </label>
            <label id="Smslnmeddirektutbetalning" className="tag-container">
              <input
                type="checkbox"
                id="smsBoxId"
                defaultChecked={this.boxes.sms}
                name="sms"
                className="tag-check"
                onChange={this.handleChange}
              />
              Smslån
            </label>
          </div>
        </div>

        <div>
          <h2 className="secondtitle">Bäst möjligheter</h2>
          <hr />
        </div>
        <div>{loanitems}</div>
      </div>
    );
  }
}

export default LoanListNoRedux;
