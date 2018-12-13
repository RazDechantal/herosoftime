import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import PropTypes from "prop-types";
import { companyAction } from "../../Action/companyAction";
import { readWriteCompany } from "../../Action/readWriteCompany";
import { readStat } from "../../Action/appReadStat";
import { fetchUser } from "../../Action/fetchUser";
import { userLogged } from "../../Action/userLogged";

// Firebase
import firebase from "firebase/app";
import cloudConfig from "../../Config/cloudFirebase";

//Firestore

import "../Company/company.scss";

import MyModal from "../Modal/Modal";

import { Row, Col, Button } from "reactstrap";

var loans = [];
//const db = getFirestore();
const db = null;
/*const db = firebase.firestore(cloudConfig);
db.settings({
  timestampsInSnapshots: true
});*/

class Companies extends Component {
  constructor(props) {
    super(props);

    this.btnClick = this.btnClick.bind(this);
    this.replaceModalItem = this.replaceModalItem.bind(this);
    this.companyHandler = this.companyHandler.bind(this);

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
    //this.props.companyAction(filter);
    //this.props.readStat();
    //this.props.readWriteCompany();
  }

  componentDidMount() {
    loans = this.props.companies;
  }

  btnClick() {
    var filter = {
      loanSum: this.props.present,
      loanPeriod: this.props.loanPeriod
    };
    //this.props.companyAction(filter);
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
  }

  saveModalDetails(item) {
    var docRef = db.collection("Loans").doc(item.company);
    docRef
      .update(item)
      .then(function() {
        console.log("Document successfully updated!");
      })
      .catch(function(error) {
        console.error("Error updating document: ", error);
      });
  }

  deleteItem(loan) {
    var p = this.props;
    db.collection("Loans")
      .doc(loan.company)
      .delete()
      .then(function() {
        console.log("Document successfully deleted!");
        var filter = {
          loanSum: p.present,
          loanPeriod: p.loanPeriod
        };
        //p.companyAction(filter);
        //p.readStat();
        //p.readWriteCompany();
      })
      .catch(function(error) {
        console.error("Error removing document: ", error);
      });
  }

  render() {
    const banks = [];
    const { loans } = this.props;
    const { userId } = this.props;

    const companyitems = (
      <div>
        {loans
          ? loans.map(
              loan => (
                banks.push(loan),
                (
                  <div key={loan.id} className="decoration">
                    <Row>
                      <Col xs="4">
                        <img src={loan.logo} alt="" />
                        <div>
                          <Button
                            hidden={userId ? "" : "hidden"}
                            color="warning"
                            onClick={() => this.replaceModalItem(loan)}
                          >
                            Edit
                          </Button>
                          <Button
                            hidden={userId ? "" : "hidden"}
                            color="danger"
                            onClick={() => this.deleteItem(loan)}
                          >
                            Delete
                          </Button>{" "}
                          <hr />
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
                  </div>
                )
              )
            )
          : null}
      </div>
    );

    const requiredItem = this.state.requiredItem;

    let modalData;

    for (let element of banks) {
      if (element.id === requiredItem) {
        modalData = element;
        break;
      }
    }

    return (
      <div>
        <button
          type="submit"
          disabled={this.buttonActive}
          className="btn btn-primary btn-lg btn-block"
          onClick={this.btnClick}
        >
          <h1>Jämför Lån</h1>
        </button>
        <hr />
        {companyitems}

        {modalData ? (
          <MyModal
            id={modalData.id}
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

const mapStateToProps = state => {
  console.log(state);
  return {
    loans: state.firestore.ordered.Loans,
    userId: state.firebase.auth.uid
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "Loans" }])
)(Companies);
