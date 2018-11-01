import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="header-main">
            <h1 className="header-slogan">
              Hur kan vi hjälpa dig med din ekonomi?
            </h1>
            <div className="header-main-categories boxLayer" />
            <div className="center-box">
              <a href="/Loan">
                <div className="boxTop save-money">
                  <h3>Loan</h3>
                </div>
              </a>
              <a href="/Spara">
                <div className="boxTop save-money">
                  <h3>Spara &amp; investera pengar</h3>
                </div>
              </a>
              <a href="/Insurance">
                <div className="boxTop insurances">
                  <h3>Försäkringar</h3>
                </div>
              </a>
              <a href="/Credit">
                <div className="boxTop insurances">
                  <h3>Kreditkort</h3>
                </div>
              </a>
              <a href="/Private">
                <div className="boxTop personal-finance">
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
