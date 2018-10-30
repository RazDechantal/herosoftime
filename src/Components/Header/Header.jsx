import React, { Component } from "react";
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";
import MyComp from "../Company/Companies";

const Loanes = () => {
  return <p>test</p>;
};

class Header extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="header-main">
            <h1 className="header-slogan">
              Hur kan vi hjälpa dig med din ekonomi?
            </h1>
            <div class="header-main-categories boxLayer" />
            <div class="center-box">
              <a href="/Loan">
                <div class="boxTop save-money">
                  <h3>Loan</h3>
                </div>
              </a>
              <a href="/Spara">
                <div class="boxTop save-money">
                  <h3>Spara &amp; investera pengar</h3>
                </div>
              </a>
              <a href="/Insurance">
                <div class="boxTop insurances">
                  <h3>Försäkringar</h3>
                </div>
              </a>
              <a href="/Credit">
                <div class="boxTop insurances">
                  <h3>Kreditkort</h3>
                </div>
              </a>
              <a href="/Private">
                <div class="boxTop personal-finance">
                  <h3>Privatekonomi</h3>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="App-header">
          <h1>Looking for most?</h1>
          <p>Ready for the best?</p>
        </div>
      </div>
    );
  }
}

export default Header;
