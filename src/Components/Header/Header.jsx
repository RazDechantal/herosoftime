import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div>
        <div className="App-logo">
          <h1 className="box-title">Hur kan vi hjälpa dig med din ekonomi?</h1>
          <div class="home-main-categories boxLayer">
            <div class="center-box">
              <a href="https://financer.com/sv/lana-pengar/">
                <div class="boxTop borrow-money">
                  <h3>Låna pengar</h3>
                </div>
              </a>
              <a href="https://financer.com/sv/spara/">
                <div class="boxTop save-money">
                  <h3>Spara &amp; investera pengar</h3>
                </div>
              </a>
              <a href="https://financer.com/sv/forsakringar/">
                <div class="boxTop insurances">
                  <h3>Försäkringar</h3>
                </div>
              </a>
              <a href="https://financer.com/sv/kreditkort/">
                <div class="boxTop card">
                  <h3>Kreditkort</h3>
                </div>
              </a>
              <a href="https://financer.com/sv/privatekonomi/">
                <div class="boxTop personal-finance">
                  <h3>Privatekonomi</h3>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="App-header">
          <h1>Looking for Heros?</h1>
          <p>Here we come!</p>
        </div>
      </div>
    );
  }
}

export default Header;
