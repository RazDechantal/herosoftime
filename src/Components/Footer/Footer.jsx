import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="bg-bluepurple">
        <Row>
          <Col xs="12" sm="6" md="4" lg="3">
            <div className="decoration">
              <h1>Footer</h1>
            </div>
          </Col>
          <Col xs="12" sm="6" md="4" lg="3">
            <div className="decoration">
              <h1>Footer</h1>
            </div>
          </Col>
          <Col xs="12" sm="6" md="4" lg="3">
            <div className="decoration">
              <h1>Footer</h1>
            </div>
          </Col>
          <Col xs="12" sm="6" md="4" lg="3">
            <div className="decoration">
              <h1>Footer</h1>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Footer;
