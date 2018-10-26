import React, { Component } from "react";
import "./Style/App.css";
import { Provider } from "react-redux";

import Header from "./Components/Header/Header";
import Fetcher from "./Components/Banks/Banks";
import Navigation from "./Components/Navigation/Navigation";
import { Container, Row, Col } from "reactstrap";
import ServiceManager from "./Components/Services/ServiceManager";
import Footer from "./Components/Footer/Footer";
//import White from "./Components/White/White";
import HeroSlider from "./Components/Sliders/Slider";
import Loan from "./Components/Banks/Loan";
import Posts from "./Components/Posts/Post";
import Users from "./Components/Users/Users";
import Companies from "./Components/Company/Companies";
import LoanRedux from "./Components/Banks/LoanRedux";
import Content from "./Components/Content/Content";
import SliderNew from "./Components/Sliders/SliderNew";

import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Navigation />
          <Header className="App" />
          <Container>
            <Row className="App-text">
              <Col xs="4">
                <div>
                  <Content content="title2" />
                </div>
              </Col>
              <Col xs="8">
                <div>
                  <SliderNew />
                </div>
              </Col>
            </Row>
            <Row className="App-text">
              <Col xs="12">
                <Companies />
              </Col>
            </Row>
          </Container>
          <Footer />
        </div>
      </Provider>
    );
  }
}

export default App;
