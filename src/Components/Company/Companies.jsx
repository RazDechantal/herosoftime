import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { companyAction } from "../../Action/companyAction";
import { readWriteCompany } from "../../Action/readWriteCompany";
import { readStat } from "../../Action/appReadStat";

// Firebase
import firebase from "firebase/app";
import cloudConfig from "../../Config/cloudFirebase";

import "../Company/company.scss";

//Modal
import Modal from "react-modal";

import { Form, FormGroup, Row, Col, Button, Label, Input } from "reactstrap";

const db = firebase.firestore(cloudConfig);
db.settings({
  timestampsInSnapshots: true
});

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

class Companies extends Component {
  constructor(props) {
    super(props);

    this.btnClick = this.btnClick.bind(this);
    this.replaceModalItem = this.replaceModalItem.bind(this);
    this.companyHandler = this.companyHandler.bind(this);

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.saveModalDetails = this.saveModalDetails.bind(this);

    this.state = {
      requiredItem: 0,
      modalIsOpen: false,
      editPressed: false,
      loan: {
        id: 0,
        company: "test",
        InterestRate: 0,
        MaxLoan: 0,
        MaxPer: 0,
        MonthlyPayment: 0,
        TotalExpense: 0,
        AgeLimit: 0,
        MinIncome: 0,
        CustomerLimit: "Yes",
        BadRecordCheck: "Yes",
        logo: "",
        private: "Yes",
        sms: "Yes",
        link: "Yes"
      }
    };
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

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = "#f00";
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  btnClick() {
    var filter = {
      loanSum: this.props.present,
      loanPeriod: this.props.loanPeriod
    };
    this.props.companyAction(filter);
  }

  replaceModalItem(newLoan) {
    this.setState({ modalIsOpen: true });
    this.setState({ loan: newLoan });
  }

  companyHandler(e) {
    e.stopPropagation();
    this.setState({ [e.target.name]: e.target.value }, () => {
      console.log(this.state.requiredItem);
    });
    var v = e.target.value;
    var test = this.state;
    console.log(this.state.loan);
    //debugger;
  }

  saveModalDetails(e) {
    e.preventDefault();
    var record = this.state.loan;
    var myDoc = record.company;
    var Loan = db.collection("Loans").doc(myDoc);
    record.company = "A new name";

    //debugger;
    // Set the "capital" field of the city 'DC'
    return Loan.update({
      myDoc: record
    })
      .then(function() {
        console.log("Document successfully updated!");
        //this.setState({ modalIsOpen: false });
      })
      .catch(function(error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
        //this.setState({ [this.state.modalIsOpen]: false });
      });

    //console.log(item.company);
  }

  render() {
    const companyitems = this.props.companies.map(loan => (
      <div key={loan.id} className="decoration">
        <Row>
          <Col xs="4">
            <img src={loan.logo} alt="" />
            <div>
              <Button
                color="warning"
                onClick={() => this.replaceModalItem(loan)}
              >
                Edit
              </Button>
              <Button color="danger">Delete</Button> <hr />
              {companyitems}
            </div>
          </Col>
          <Col xl="4">
            <p>Interestrate: {loan.InterestRate}</p>
            <p>Max loan: {loan.MaxLoan}</p>
            <p>Max Period: {loan.MaxPer}</p>
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
    const requiredItem = this.state.requiredItem;
    let modalData = companyitems[requiredItem];
    return (
      <div>
        <button
          type="submit"
          disabled={this.buttonActive}
          className="btn btn-primary btn-lg btn-block"
          onClick={this.btnClick}
        >
          <h1>Jämför lån</h1>
        </button>
        <hr />
        {companyitems}

        {modalData ? (
          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
            InterestRate={modalData.InterestRate}
            MaxLoan={modalData.MaxPer}
            MaxPer={modalData.MaxPer}
            MonthlyPayment={modalData.MonthlyPayment}
            TotalExpense={modalData.TotalExpense}
            AgeLimit={modalData.AgeLimit}
            NoCreditCheck={modalData.NoCreditCheck}
            MinIncome={modalData.MinIncome}
            CustomerLimit={modalData.CustomerLimit}
            BadRecordCheck={modalData.BadRecordCheck}
            logo={modalData.logo}
            private={modalData.private}
            sms={modalData.sms}
            link={modalData.link}
            contentLabel="Example Modal"
          >
            <h2 ref={subtitle => (this.subtitle = subtitle)}>Modify</h2>
            <Form onSubmit={this.saveModalDetails}>
              <FormGroup>
                <Label for="exampleNumber">Company</Label>
                <Input
                  type="text"
                  name="company"
                  id="companyid"
                  placeholder="Enter the name of the company"
                  value={this.state.loan.company}
                  onChange={e => this.companyHandler(e)}
                />
              </FormGroup>

              <FormGroup>
                <Label for="exampleSelect">Private Loan</Label>
                <Input
                  type="select"
                  name="private"
                  id="privateloanid"
                  value={this.state.loan.private}
                  onChange={e => this.companyHandler(e)}
                >
                  <option>Yes</option>
                  <option>No</option>
                </Input>
              </FormGroup>

              <FormGroup>
                <Label for="exampleSelect">SMS Loan</Label>
                <Input
                  type="select"
                  name="sms"
                  id="smsid"
                  value={this.state.loan.sms}
                  onChange={e => this.companyHandler(e)}
                >
                  <option>Yes</option>
                  <option>No</option>
                </Input>
              </FormGroup>

              <FormGroup>
                <Label for="exampleSelect">Customer limit</Label>
                <Input
                  type="select"
                  name="CustomerLimit"
                  id="customerlimitid"
                  value={this.state.loan.CustomerLimit}
                  onChange={e => this.companyHandler(e)}
                >
                  <option>Yes</option>
                  <option>None</option>
                </Input>
              </FormGroup>

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
                  value={this.state.loan.AgeLimit}
                  onChange={e => this.companyHandler(e)}
                />
              </FormGroup>

              <FormGroup>
                <Label for="exampleUrl">Logo</Label>
                <Input
                  type="text"
                  name="logo"
                  id="logoid"
                  placeholder="Logo here!"
                  value={this.state.loan.logo}
                  onChange={e => this.companyHandler(e)}
                />
              </FormGroup>

              <FormGroup>
                <Label for="exampleNumber">Interest rate</Label>
                <Input
                  type="number"
                  name="InterestRate"
                  id="interestrateid"
                  step={0.1}
                  placeholder="Interest Rate"
                  value={this.state.loan.InterestRate}
                  onChange={e => this.companyHandler(e)}
                />
              </FormGroup>

              <FormGroup>
                <Label for="exampleNumber">Max Loan</Label>
                <Input
                  type="number"
                  name="MaxLoan"
                  id="maxloanid"
                  step={this.state.loan.maxloanstep < 9500 ? 500 : 10000}
                  max={1000000}
                  placeholder="Max Loan"
                  value={this.state.loan.MaxLoan}
                  onChange={e => this.companyHandler(e)}
                />
              </FormGroup>

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
                  value={this.state.loan.MaxPer}
                  onChange={e => this.companyHandler(e)}
                />
              </FormGroup>

              <FormGroup>
                <Label for="exampleSelect">Credit Check</Label>
                <Input
                  type="select"
                  name="BadRecordCheck"
                  id="creditcheckid"
                  value={this.state.loan.BadRecordCheck}
                  onChange={e => this.companyHandler(e)}
                >
                  <option>Yes</option>
                  <option>No</option>
                </Input>
              </FormGroup>

              <FormGroup>
                <Label for="exampleSelect">Minimum Income</Label>
                <Input
                  type="number"
                  name="MinIncome"
                  id="minincomeid"
                  step={10000}
                  min={100000}
                  max={1000000}
                  value={this.state.loan.MinIncome}
                  onChange={e => this.companyHandler(e)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleUrl">Link</Label>
                <Input
                  type="text"
                  name="link"
                  id="linkid"
                  placeholder="Link to bank"
                  value={this.state.loan.link}
                  onChange={e => this.companyHandler(e)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleUrl">Logo</Label>
                <Input
                  type="text"
                  name="logo"
                  id="logoid"
                  placeholder="Logo here!"
                  value={this.state.loan.logo}
                  onChange={e => this.companyHandler(e)}
                />
              </FormGroup>

              <button
                type="submit"
                className="btn btn-primary"
                data-dismiss="modal"
              >
                Save changes
              </button>
              <button onClick={this.closeModal}>close</button>
            </Form>
          </Modal>
        ) : null}
      </div>
    );
  }
}

Companies.propTypes = {
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
  yearMAx: state.app.yearMAx
});
export default connect(
  mapStateToProps,
  { companyAction, readStat, readWriteCompany }
)(Companies);
