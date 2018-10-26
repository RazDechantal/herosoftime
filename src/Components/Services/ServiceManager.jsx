import React, { Component } from "react";
import { Row } from "reactstrap";

import Service from "./Service";

const appServices = [
  { id: 1, serv: "cooking", src: "1" },
  { id: 2, serv: "cleaning", src: "2" },
  { id: 3, serv: "cleaning", src: "1" },
  { id: 4, serv: "cleaning", src: "2" }
];

class ServiceManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services: appServices
    };
  }

  render() {
    return (
      <div>
        <Row>
          {appServices.map(srv => {
            return <Service key={srv.id} srv={srv} />;
          })}
        </Row>
      </div>
    );
  }
}

export default ServiceManager;
