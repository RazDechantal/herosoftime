import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchCompanies } from "../../Action/companyAction";
import { readStat } from "../../Action/appReadStat";

import { Row, Col } from "reactstrap";
import "../Company/company.scss";

class Companies extends Component {
  constructor(props) {
    super(props);
    this.btnClick = this.btnClick.bind(this);
  }
  componentWillMount() {
    var filter = {
      loanSum: this.props.present,
      loanPeriod: this.props.loanPeriod
    };
    this.props.fetchCompanies(filter);
    this.props.readStat();
  }

  btnClick() {
    var filter = {
      loanSum: this.props.present,
      loanPeriod: this.props.loanPeriod
    };
    this.props.fetchCompanies(filter);
  }
  render() {
    const companyitems = this.props.companies.map(loan => (
      <div key={loan.id} className="decoration">
        <Row>
          <Col xs="4">
            <img src={loan.logo} alt="" />
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
      </div>
    );
  }
}

Companies.propTypes = {
  fetchCompanies: PropTypes.func.isRequired,
  companies: PropTypes.array.isRequired,
  readStat: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  companies: state.companies.items,
  loanSum: state.app.loanSum,
  loanPresent: state.app.loanPresent,
  present: state.app.present,
  loanPeriod: state.app.loanPeriod,
  yearMin: state.app.yearMin,
  yearMAx: state.app.yearMAx
});
export default connect(
  mapStateToProps,
  { fetchCompanies, readStat }
)(Companies);
