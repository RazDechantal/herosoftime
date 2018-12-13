import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

import { Row, Col, Button } from "reactstrap";
const banks = [];
var loans = [];

class Test extends Component {
  componentDidMount() {
    loans = this.props.companies;
  }

  render() {
    const { loans } = this.props;

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

    return <div>{companyitems}</div>;
  }
}

const mapStateToProps = state => {
  console.log(state);
  //debugger;
  return {
    loans: state.firestore.ordered.Loans
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "Loans" }])
)(Test);
