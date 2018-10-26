import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchCompanies } from "../../Action/companyAction";
import { readStat } from "../../Action/appReadStat";

import "../Company/company.css";

class Companies extends Component {
  componentWillMount() {
    this.props.fetchCompanies();
    this.props.readStat();
  }
  render() {
    const companyitems = this.props.companies.map(company => (
      <div key={company.id} className="decoration">
        <h3>{company.company}</h3>
        <p>Field: {company.Field}</p>
        <p>Type: {company.Type}</p>
        <p>Speciality: {company.Speciality}</p>
        <hr />
      </div>
    ));
    return (
      <div>
        <h1 className="title">Companies</h1>
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
  loanPeriod: state.app.loanPeriod,
  yearMin: state.app.yearMin,
  yearMAx: state.app.yearMAx
});
export default connect(
  mapStateToProps,
  { fetchCompanies, readStat }
)(Companies);
