import React, { Component } from "react";
import { Row, Form, FormGroup, Label, input, Col } from "reactstrap";

import firebase from "firebase/app";
import cloudConfig from "../../Config/cloudFirebase";

const db = firebase.firestore(cloudConfig);
db.settings({
  timestampsInSnapshots: true
});

class AddComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maxloanstep: 500
    };
  }

  create(e) {
    e.preventDefault();
    let Loans = db.collection("Loans");

    Loans.doc(document.getElementById("companyid").value).set({
      company: document.getElementById("companyid").value,
      InterestRate: document.getElementById("interestrateid").value,
      MaxLoan: document.getElementById("maxloanid").value,
      MaxPer: document.getElementById("maxperiodid").value,
      MonthlyPayment: "?",
      TotalExpense: 0,
      AgeLimit: document.getElementById("agelimitid").value,
      MinIncome: document.getElementById("minincomeid").value,
      CustomerLimit: document.getElementById("customerlimitid").value,
      BadRecordCheck: document.getElementById("creditcheckid").value,
      logo: document.getElementById("logoid").value,
      private: document.getElementById("privateloanid").value,
      sms: document.getElementById("smsid").value,
      link: document.getElementById("linkid").value
    });

    document.getElementById("companyid").value = "";
    document.getElementById("interestrateid").value = 0;
    document.getElementById("maxloanid").value = 0;
    document.getElementById("maxperiodid").value = 0;
    document.getElementById("minincomeid").value = 0;
    document.getElementById("customerlimitid").value = "None";
    document.getElementById("creditcheckid").value = "";
    document.getElementById("logoid").value = "";
    document.getElementById("privateloanid").value = "";
    document.getElementById("smsid").value = "";
    document.getElementById("linkid").value = "";
  }

  render() {
    return (
      <div>
        <Form name="companyForm" onSubmit={this.create}>
          <Row>
            <Col xs="12" md="4">
              <div>
                <FormGroup>
                  <Label for="exampleNumber">Company</Label>
                  <input
                    type="text"
                    name="company"
                    id="companyid"
                    placeholder="Enter the name of the company"
                    value={this.state.company}
                    onChange={this.handleChange}
                  />
                </FormGroup>
              </div>
            </Col>
            <Col xs="12" md="4">
              <div>
                <FormGroup>
                  <Label for="exampleSelect">Private Loan</Label>
                  <input type="select" name="privateloan" id="privateloanid">
                    <option>Yes</option>
                    <option>No</option>
                  </input>
                </FormGroup>
              </div>
            </Col>
            <Col xs="12" md="4">
              <div>
                <FormGroup>
                  <Label for="exampleSelect">SMS Loan</Label>
                  <input type="select" name="smsloan" id="smsid">
                    <option>Yes</option>
                    <option>No</option>
                  </input>
                </FormGroup>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs="12" md="4">
              <div>
                <FormGroup>
                  <Label for="exampleNumber">Interest rate</Label>
                  <input
                    type="number"
                    name="interestrate"
                    id="interestrateid"
                    step={0.1}
                    placeholder="Interest Rate"
                  />
                </FormGroup>
              </div>
            </Col>
            <Col xs="12" md="4">
              <div>
                <FormGroup>
                  <Label for="exampleNumber">Max Loan</Label>
                  <input
                    type="number"
                    name="maxloan"
                    id="maxloanid"
                    step={this.state.maxloanstep < 9500 ? 500 : 10000}
                    placeholder="Max Loan"
                  />
                </FormGroup>
              </div>
            </Col>
            <Col xs="12" md="4">
              <div>
                <FormGroup>
                  <Label for="exampleNumber">Max Period</Label>
                  <input
                    type="number"
                    name="maxperiod"
                    id="maxperiodid"
                    step={1}
                    min={3}
                    max={180}
                    placeholder="Max period in month"
                  />
                </FormGroup>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs="12" md="4">
              <div>
                <FormGroup>
                  <Label for="exampleSelect">Credit Check</Label>
                  <input type="select" name="credit check" id="creditcheckid">
                    <option>Yes</option>
                    <option>No</option>
                  </input>
                </FormGroup>
              </div>
            </Col>
            <Col xs="12" md="4">
              <div>
                <FormGroup>
                  <Label for="exampleSelect">Minimum Income</Label>
                  <input type="select" name="minincome" id="minincomeid">
                    <option>100000-200000</option>
                    <option>200000-300000</option>
                    <option>300000-400000</option>
                    <option>400000-500000</option>
                    <option>more than 500000</option>
                  </input>
                </FormGroup>
              </div>
            </Col>
            <Col xs="12" md="4">
              <div>
                <FormGroup>
                  <Label for="exampleUrl">Link</Label>
                  <input
                    type="text"
                    name="link"
                    id="linkid"
                    placeholder="Link to bank"
                  />
                </FormGroup>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs="12" md="4">
              <div>
                <FormGroup>
                  <Label for="exampleSelect">Customer limit</Label>
                  <input type="select" name="credit check" id="customerlimit">
                    <option>Yes</option>
                    <option>No</option>
                  </input>
                </FormGroup>
              </div>
            </Col>
            <Col xs="12" md="4">
              <div>
                <FormGroup>
                  <Label for="exampleSelect">Age limit</Label>
                  <input
                    type="number"
                    name="minincome"
                    id="agelimitid"
                    step={1}
                    min={16}
                    max={100}
                    placeholder="Set Age limit"
                  />
                </FormGroup>
              </div>
            </Col>
            <Col xs="12" md="4">
              <div>
                <FormGroup>
                  <Label for="exampleUrl">Logo</Label>
                  <input
                    type="text"
                    name="logo"
                    id="logoid"
                    placeholder="Logo here!"
                  />
                </FormGroup>
              </div>
            </Col>
          </Row>
          <button
            type="submit"
            disabled={this.buttonActive}
            className="button small applyYellow btn btn-primary btn-block"
          >
            Add to table
          </button>
        </Form>
      </div>
    );
  }
}

export default AddComp;
