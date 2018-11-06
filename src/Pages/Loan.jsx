import React, { Component } from "react";

import { Container, Row, Col } from "reactstrap";
import LoanList from "../Components/Loan/LoanList";
import CheckBox from "../Components/Checkbox/Checkbox";

export default class Loan extends Component {
  render() {
    return (
      <Container>
        <Row className="App-text">
          <Col xs="12">
            <div>
              <CheckBox />
            </div>
          </Col>
        </Row>
        <Row className="App-text">
          <Col xs="12">
            <LoanList />
          </Col>
        </Row>
      </Container>
    );
  }
}
