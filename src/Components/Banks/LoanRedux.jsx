import React, { Component } from "react";
import { Row, Container } from "reactstrap";
import { Table } from "react-bootstrap";
import faker from "faker/locale/en_GB";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { Form, FormGroup } from "reactstrap";

import { fetchCompanies } from "../../Action/companyAction";
import "../Company/company.css";

let Loaners = [];

class LoanRedux extends Component {
  componentWillMount() {
    this.props.fetchCompanies();
  }

  render() {
    const imgStyle = {
      height: "142px",
      width: "142px",
      borderradius: "25px",
      border: "2px solid #fff",
      padding: "20px"
    };
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
      <Form name="slideForm" onSubmit={this.formSubmit}>
        <FormGroup>
          <Container className="fluid">
            <hr />
            <fieldset>
              <legend>Choose your options</legend>

              <div>
                <input
                  type="radio"
                  id="3"
                  name="optionRadios"
                  value="3"
                  onChange={this.onRadioClick}
                />
                <label>3 years</label>
              </div>

              <div>
                <input
                  type="radio"
                  id="5"
                  name="optionRadios"
                  value="5"
                  onChange={this.onRadioClick}
                />
                <label>5 years</label>
              </div>

              <div>
                <input
                  type="radio"
                  id="10"
                  name="optionRadios"
                  value="10"
                  onChange={this.onRadioClick}
                />
                <label>10 years</label>
              </div>
            </fieldset>
            <button
              type="submit"
              disabled={this.buttonActive}
              className={[this.buttonClass]}
            >
              Jämför lån
            </button>

            <Row>
              <div>
                <h1 className="title">Companies</h1>
                {companyitems}
              </div>
            </Row>
          </Container>
        </FormGroup>
      </Form>
    );
  }
}

LoanRedux.propTypes = {
  fetchCompanies: PropTypes.func.isRequired,
  companies: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  companies: state.companies.items
});
export default connect(
  mapStateToProps,
  { fetchCompanies }
)(LoanRedux);
