import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { companyAction } from "../../Action/companyAction";
import { readWriteCompany } from "../../Action/readWriteCompany";
import { readStat } from "../../Action/appReadStat";
import { fetchUser } from "../../Action/fetchUser";

import { Row, Form, FormGroup, Label, Col, Input } from "reactstrap";

// Firebase
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import dbConfig from "../../Config/cloudFirebase";

// Redirect
import { Redirect } from "react-router-dom";
//import { Router, Route, Switch, Redirect } from "react-router";
//import { history } from "./AppRouter";

const db = firebase.firestore(dbConfig);

class AddComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maxloanstep: 500,
      redirect: false
    };
    this.create = this.create.bind(this);
  }

  componentWillMount() {
    var filter = {
      loanSum: this.props.present,
      loanPeriod: this.props.loanPeriod
    };
    this.props.companyAction(filter);
    this.props.readStat();
    this.props.readWriteCompany();
  }

  create(e) {
    e.preventDefault();
    let Loans = db.collection("Loans");

    let colSize = this.props.companies.length;

    //debugger;

    Loans.doc(document.getElementById("companyid").value)
      .set({
        id: colSize + 10,
        company: document.getElementById("companyid").value,
        InterestRate: parseFloat(
          document.getElementById("interestrateid").value
        ),
        MaxLoan: parseInt(document.getElementById("maxloanid").value),
        MaxPer: parseInt(document.getElementById("maxperiodid").value),
        MonthlyPayment: 0,
        TotalExpense: 0,
        AgeLimit: parseInt(document.getElementById("agelimitid").value),
        MinIncome: parseInt(document.getElementById("minincomeid").value),
        CustomerLimit: document.getElementById("customerlimitid").value,
        BadRecordCheck: document.getElementById("creditcheckid").value,
        logo: document.getElementById("logoid").value,
        private: document.getElementById("privateloanid").value,
        sms: document.getElementById("smsid").value,
        link: document.getElementById("linkid").value
      })
      .then(() => {
        console.log("Adding successfull!");
      });

    document.getElementById("companyid").value = "";
    document.getElementById("interestrateid").value = 0;
    document.getElementById("maxloanid").value = 0;
    document.getElementById("maxperiodid").value = 0;
    document.getElementById("minincomeid").value = 0;
    document.getElementById("customerlimitid").value = "Yes";
    document.getElementById("creditcheckid").value = "";
    document.getElementById("logoid").value = "";
    document.getElementById("privateloanid").value = "";
    document.getElementById("smsid").value = "";
    document.getElementById("linkid").value = "";

    //history.push("/");
    this.setState({ redirect: true });
  }

  render() {
    if (this.state.redirect === true) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <Form name="companyForm" onSubmit={this.create}>
          <Row>
            <Col xs="12" md="4">
              <FormGroup>
                <Label for="exampleNumber">Company</Label>
                <Input
                  type="text"
                  name="company"
                  id="companyid"
                  placeholder="Enter the name of the company"
                  value={this.state.company}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
            <Col xs="12" md="4">
              <FormGroup>
                <Label for="exampleSelect">Private Loan</Label>
                <Input type="select" name="private" id="privateloanid">
                  <option>Yes</option>
                  <option>No</option>
                </Input>
              </FormGroup>
            </Col>
            <Col xs="12" md="4">
              <FormGroup>
                <Label for="exampleSelect">SMS Loan</Label>
                <Input type="select" name="sms" id="smsid">
                  <option>Yes</option>
                  <option>No</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col xs="12" md="4">
              <FormGroup>
                <Label for="exampleNumber">Interest rate</Label>
                <Input
                  type="number"
                  name="InterestRate"
                  id="interestrateid"
                  step={0.1}
                  placeholder="Interest Rate"
                />
              </FormGroup>
            </Col>
            <Col xs="12" md="4">
              <FormGroup>
                <Label for="exampleNumber">Max Loan</Label>
                <Input
                  type="number"
                  name="MaxLoan"
                  id="maxloanid"
                  step={this.state.maxloanstep < 9500 ? 500 : 10000}
                  placeholder="Max Loan"
                />
              </FormGroup>
            </Col>
            <Col xs="12" md="4">
              <FormGroup>
                <Label for="exampleNumber">Max Period</Label>
                <Input
                  type="number"
                  name="MaxPer"
                  id="maxperiodid"
                  step={1}
                  min={3}
                  max={180}
                  placeholder="Max period in month"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col xs="12" md="4">
              <FormGroup>
                <Label for="exampleSelect">Credit Check</Label>
                <Input type="select" name="BadRecordCheck" id="creditcheckid">
                  <option>Yes</option>
                  <option>No</option>
                </Input>
              </FormGroup>
            </Col>
            <Col xs="12" md="4">
              <FormGroup>
                <Label for="exampleSelect">Minimum Income</Label>
                <Input
                  type="number"
                  name="MinIncome"
                  id="minincomeid"
                  step={10000}
                />
              </FormGroup>
            </Col>
            <Col xs="12" md="4">
              <FormGroup>
                <Label for="exampleUrl">Link</Label>
                <Input
                  type="text"
                  name="link"
                  id="linkid"
                  placeholder="Link to bank"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col xs="12" md="4">
              <FormGroup>
                <Label for="exampleSelect">Customer limit</Label>
                <Input type="select" name="CustomerLimit" id="customerlimitid">
                  <option>Yes</option>
                  <option>No</option>
                </Input>
              </FormGroup>
            </Col>
            <Col xs="12" md="4">
              <FormGroup>
                <Label for="exampleSelect">Age limit</Label>
                <Input
                  type="number"
                  name="AgeLimit"
                  id="agelimitid"
                  step={1}
                  min={16}
                  max={100}
                  placeholder="Set Age limit"
                />
              </FormGroup>
            </Col>
            <Col xs="12" md="4">
              <FormGroup>
                <Label for="exampleUrl">Logo</Label>
                <Input
                  type="text"
                  name="logo"
                  id="logoid"
                  placeholder="Logo here!"
                />
              </FormGroup>
            </Col>
          </Row>
          <button
            type="submit"
            disabled={this.buttonActive}
            className="button small applyYellow btn btn-primary btn-block"
          >
            Add to table
          </button>
          <hr />
        </Form>
      </div>
    );
  }
}

AddComp.propTypes = {
  fetchUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  userState: PropTypes.object.isRequired,
  loggedIn: PropTypes.any.isRequired,

  companyAction: PropTypes.func.isRequired,
  readWriteCompany: PropTypes.func.isRequired,
  companies: PropTypes.array.isRequired,
  readStat: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  companies: state.companies.items,
  company: state.companies.company,
  loanSum: state.app.loanSum,
  loanPresent: state.app.loanPresent,
  present: state.app.present,
  loanPeriod: state.app.loanPeriod,
  yearMin: state.app.yearMin,
  yearMAx: state.app.yearMAx,
  userState: state.users,
  user: state.users.user,
  loggedIn: state.users.loggedIn
});

export default connect(
  mapStateToProps,
  { companyAction, readStat, readWriteCompany, fetchUser }
)(AddComp);
