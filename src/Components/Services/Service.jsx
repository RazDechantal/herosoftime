import React, { Component } from "react";
import { Col } from "reactstrap";
//import Service from "/Service.css";

const IMG =
  "https://helphero.se/assets/images/helpherodesktop1440startshape%20%20";

class Service extends Component {
  buildAdd() {
    let services = this.props;
    return services;
  }

  render() {
    const service = this.props.srv.serv;
    const src = IMG + this.props.srv.src + ".svg";

    return (
      <Col xs="12" sm="6" md="4" xl="3">
        <div className="">
          <img src={src} alt="" />
          <br />
          {service}
        </div>
      </Col>
    );
  }
}

export default Service;
