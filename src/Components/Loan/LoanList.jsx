import React, { Component } from "react";
import { Row, Col } from "reactstrap";

// Redux firebase
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

import "../Company/company.scss";

class LoanList extends Component {
  componentWillMount() {
    const boxes = {
      private: this.props.privateBox,
      anmarkningBox: this.props.anmarkningBox,
      ucBox: this.props.ucBox,
      smsBox: this.props.smsBox
    };
    this.props.fetchLoan(boxes);
  }

  componentWillUpdate() {
    if (this.props.privateBox.anmarkningBox)
      this.props.fetchLoan({
        private: this.props.privateBox,
        anmarkningBox: this.props.anmarkningBox,
        ucBox: this.props.ucBox,
        smsBox: this.props.smsBox
      });
  }
  render() {
    const loanitems = this.props.loans.map(loan => (
      <div key={loan.id} className="decoration">
        <Row>
          <Col xs="4">
            <img src={loan.logo} alt="" />
          </Col>
          <Col xl="4">
            <p>Interestrate: {loan.InterestRate}</p>
            <p>Max loan: {loan.MaxLoan}</p>
            <p>Age limit: {loan.AgeLimit}</p>
            <p>Credit-check: {loan.CreditCheck}</p>
          </Col>
          <Col xl="4">
            <p>Min-income: {loan.MinIncome}</p>
            <p>Customer-limit: {loan.CustomerLimit}</p>
            <p>BadRecordCheck: {loan.BadRecordCheck}</p>
          </Col>
        </Row>
        <hr />
      </div>
    ));

    return (
      <div>
        <h1>Value</h1>
        <p>{this.props.anmarkningBox ? "ticked" : "Not ticked"}</p>

        <div>
          <h2 className="secondtitle">Compare loans</h2>
          <hr />
        </div>
        <div>{loanitems}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    privateLoans: state.firestore.ordered.Loans
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect(() => [
    {
      collection: "Loans",
      where: [["private", "==", "Yes"]]
    }
  ])
)(LoanList);
