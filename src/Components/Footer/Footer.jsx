import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import "./footer.scss";

class Footer extends Component {
  render() {
    return (
      <div className="bg-bluepurple">
        <Row>
          <Col xs="12" sm="6" md="4" lg="3">
            <div className="main-wrap">
              <h2>Lär dig mer</h2>
              <hr />
              <div className="contact">
                {" "}
                <a href="https://kostnadsguiden.se/">kostnadsguide</a>
              </div>
              <div className="contact">
                {" "}
                <a href="https://helphero.se/xtra/license_customer.php?page=anvandaravtal">
                  Användaravtal
                </a>
              </div>
            </div>
          </Col>
          <Col xs="12" sm="6" md="4" lg="3">
            <div className="main-wrap">
              <h2>Andra tjänster</h2>
              <hr />
              <div className="contact">
                <a href="https://kostnadsguiden.se/">Priser för material</a>
              </div>
            </div>
          </Col>
          <Col xs="12" sm="6" md="4" lg="3">
            <div className="main-wrap">
              <h2>Följ oss</h2>
              <hr />
              <div className="contact">
                <a
                  href="https://m.facebook.com/helphero/"
                  class="fa fa-facebook"
                />
              </div>
            </div>
          </Col>
          <Col xs="12" sm="6" md="4" lg="3">
            <div className="main-wrap">
              <h2>Kontakta oss</h2>
              <hr />
              <div className="contact">
                <a class="fa fa-phone">&nbsp;&nbsp; </a>
                08232232
              </div>
              <div className="contact">
                <a href="mailto:kontakt@helphero.se" class="fa fa-envelope" />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Footer;
