import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "../../Pages/Home";
import Company from "../../Pages/CompanyPage";
import Loan from "../../Pages/Loan";
import NotFoundPage from "../../Pages/NotFoundPage";

class MyRoutes extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <BrowserRouter>
            <div className="App">
              <Switch>
                <Route path="/" activeClass={true} component={Home} exact />
                <Route path="/Company" activeClass={true} component={Company} />
                <Route path="/Loan" activeClass={true} component={Loan} />
                <Route component={NotFoundPage} />
              </Switch>
            </div>
          </BrowserRouter>
        </div>
      </BrowserRouter>
    );
  }
}

export default MyRoutes;
