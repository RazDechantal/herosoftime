import React, { Component } from "react";

import { Container, Row, Col } from "reactstrap";
import LoanListNoRedux from "../Components/Loan/LoanListNoRedux";

export default class Loan extends Component {
  render() {
    return (
      <Container>
        <Row className="App-text">
          <Col xs="12">
            <LoanListNoRedux />
          </Col>
        </Row>
      </Container>
    );
  }
}
