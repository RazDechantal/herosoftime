import React, { Component } from "react";

import { Container, Row, Col } from "reactstrap";
import Companies from "../Components/Company/Companies";
import Content from "../Components/Content/Content";
import SliderNew from "../Components/Sliders/SliderNew";

class App extends Component {
  render() {
    return (
      <Container>
        <Row className="App-text">
          <Col xs="12" md="6">
            <div />
          </Col>
          <Col xs="12" md="6">
            <div>
              <SliderNew />
            </div>
          </Col>
        </Row>
        <Row className="App-text">
          <Col xs="12" sm="12">
            <Companies />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
