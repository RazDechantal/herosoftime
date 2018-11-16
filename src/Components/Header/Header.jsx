import React, { Component } from "react";

import { NavLink } from "reactstrap";

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
              <div className="App">
                <div className="boxTop save-money">
                  <NavLink href="/app/Loan">
                    <h3>Loan</h3>
                  </NavLink>
                </div>

                <div className="boxTop save-money">
                  <NavLink href="/app/Spara">
                    <h3>Spara &amp; investera pengar</h3>
                  </NavLink>
                </div>

                <div className="boxTop save-money">
                  <NavLink href="/app/Insurance">
                    <h3>Försäkring</h3>
                  </NavLink>
                </div>

                <div className="boxTop save-money">
                  <NavLink href="/app/Kreditkort">
                    <h3>Kreditkort</h3>
                  </NavLink>
                </div>
              </div>
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
