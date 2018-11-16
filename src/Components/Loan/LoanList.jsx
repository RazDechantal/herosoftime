import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Row, Col } from "reactstrap";

import { fetchLoan } from "../../Action/loanAction";
import { readStat } from "../../Action/appReadStat";

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

  /*componentWillMount() {
     if (this.props.privateBox != nextProps.privateBox)
      this.props.fetchLoan({
        private: this.props.privateBox,
        anmarkningBox: this.props.anmarkningBox,
        ucBox: this.props.ucBox,
        smsBox: this.props.smsBox
      });
      this.props.privateBox = nextProps.privateBox;
    this.props.anmarkningBox = nextProps.anmarkningBox;
    this.props.ucBox = nextProps.ucBox;
    this.props.smsBox = nextProps.smsBox;
  
    const boxes = {
      private: this.props.privateBox,
      anmarkningBox: this.props.anmarkningBox,
      ucBox: this.props.ucBox,
      smsBox: this.props.smsBox
    };

    this.props.fetchLoan(boxes);
  }*/
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

LoanList.propTypes = {
  fetchLoan: PropTypes.func.isRequired,
  loans: PropTypes.array.isRequired,
  readStat: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    loans: state.loans.items,
    privateBox: state.app.privateBox,
    anmarkningBox: state.app.anmarkningBox,
    ucBox: state.app.ucBox,
    smsBox: state.app.smsBox
  };
};

export default connect(
  mapStateToProps,
  { fetchLoan, readStat }
)(LoanList);
