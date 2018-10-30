import React, { Component } from "react";
import { Row, Col } from "reactstrap";
//import "../../Style/component.scss";

import axios from "axios";

const TESTAPI = "https://hn.algolia.com/api/v1/search?query=";
const DEFAULT_QUERY = "redux";

const url = "https://redprint.loanhero.se/api/v1/backend/banks";

class Banks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      banks: []
    };
  }

  componentDidMount() {
    fetch(url, {
      method: "get",
      headers: new Headers({
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3JlZHByaW50LmxvYW5oZXJvLnNlL2FwaS9wZXJtaXNzaWJsZS9hdXRoL3Rva2VuIiwiaWF0IjoxNTM5NjEwODU4LCJleHAiOjE1Mzk2MTQ0NTgsIm5iZiI6MTUzOTYxMDg1OCwianRpIjoiNXNVMGxKV1BjbDJWd1UycSIsInN1YiI6NCwicHJ2IjoiODdlMGFmMWVmOWZkMTU4MTJmZGVjOTcxNTNhMTRlMGIwNDc1NDZhYSJ9.oIdPuXxx6_h1kK3Ca2HMi8fMsEBcgQSjbNl3Rb_97XY"
      })
    })
      .then(response => response.json())
      .then(banks => {
        console.log(banks);
        this.setState({ banks: banks.data });
        //this.setState({ hits: data.hits });
      });

    //debugger;
    /*fetch(TESTAPI + DEFAULT_QUERY)
      .then(response => response.json())
      .then(data => this.setState({ hits: data.hits }));
    //debugger;*/
  }

  render() {
    const { banks } = this.state;
    //debugger;
    return (
      <Row>
        {banks.map(bank => (
          <Col key={bank.id} md="12">
            <h1>
              <a href={"www." + bank.name + ".com"}>{bank.name}</a>
            </h1>
            <a>
              <img src={"/" + bank.image} />
            </a>
          </Col>
        ))}
      </Row>
    );
  }
}

export default Banks;
