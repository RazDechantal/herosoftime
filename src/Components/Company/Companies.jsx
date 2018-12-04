import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { companyAction } from "../../Action/companyAction";
import { readWriteCompany } from "../../Action/readWriteCompany";
import { readStat } from "../../Action/appReadStat";
import { fetchUser } from "../../Action/fetchUser";

import Test from "../Test/Test";
import TestX from "../Test/TestX";
// Firebase
import firebase from "firebase/app";
import cloudConfig from "../../Config/cloudFirebase";

import "../Company/company.scss";

//Modal
//import Modal from "react-modal";
import MyModal from "../Modal/Modal";

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
//Modal.setAppElement("#root");

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
      requiredItem: 9999,
      modalIsOpen: false,
      editPressed: false,
      deleted: false,
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

  replaceModalItem(loan) {
    //debugger;
    this.setState({ requiredItem: loan.id });
    this.setState({ modalIsOpen: true });
    this.setState({ loan: loan });
  }

  companyHandler(e) {
    e.stopPropagation();
    this.setState({ [e.target.name]: e.target.value }, () => {
      console.log(this.state.loan);
    });
    var v = e.target.value;
    var test = this.state;
    console.log(this.state.loan);
    //debugger;
  }

  saveModalDetails(item) {
    var docRef = db.collection("Loans").doc(item.company);
    docRef
      .update(item)
      .then(function() {
        console.log("Document successfully updated!");
        console.log(docRef);
      })
      .catch(function(error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
        //this.setState({ [this.state.modalIsOpen]: false });
      });
  }

  deleteItem(loan) {
    //debugger;
    db.collection("Loans")
      .doc(loan.company)
      .delete()
      .then(function() {
        console.log("Document successfully deleted!");
        this.setState({ deleted: true });
      })
      .catch(function(error) {
        console.error("Error removing document: ", error);
      });
  }

  render() {
    const test = [];
    const companyitems = this.props.companies.map(
      loan => (
        test.push(loan),
        (
          <div key={loan.id} className="decoration">
            <Row>
              <Col xs="4">
                <img src={loan.logo} alt="" />
                <div>
                  <Button
                    hidden={this.props.loggedIn ? "" : "hidden"}
                    color="warning"
                    onClick={() => this.replaceModalItem(loan)}
                  >
                    Edit
                  </Button>
                  <Button
                    hidden={this.props.loggedIn ? "" : "hidden"}
                    color="danger"
                    onClick={() => this.deleteItem(loan)}
                  >
                    Delete
                  </Button>{" "}
                  <hr />
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
        )
      )
    );
    const requiredItem = this.state.requiredItem;
    //debugger;

    let modalData = test[requiredItem];

    test.forEach(element => {
      if (element.id == requiredItem) modalData = element;
    });
    /*if (modalData) {
      console.log(requiredItem);
      console.log(test);
      console.log(modalData.company);
    } else {
      console.log("Not heat!");
    }*/
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
          <MyModal
            company={modalData.company}
            InterestRate={modalData.InterestRate}
            MaxLoan={modalData.MaxLoan}
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
            openModal={true}
            saveModalDetails={this.saveModalDetails}
          />
        ) : null}
      </div>
    );
  }
}

Companies.propTypes = {
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
)(Companies);
