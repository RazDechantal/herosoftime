import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "../../Pages/Home";
import Company from "../../Pages/CompanyPage";
import Loan from "../../Pages/Loan";
import Login from "../../Components/Login/Login";
import Setting from "../../Components/Setting/Setting";
import NotFoundPage from "../../Pages/NotFoundPage";

class MyRoutes extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter basename="/app">
          <div className="App">
            <Switch>
              <Route path="/" activeClass={true} component={Home} exact />
              <Route path="/Home" activeClass={true} component={Home} />
              <Route path="/Loan" activeClass={true} component={Loan} />
              <Route path="/Company" activeClass={true} component={Company} />
              <Route path="/Login" activeClass={true} component={Login} />
              <Route path="/Setting" activeClass={true} component={Setting} />
              <Route component={NotFoundPage} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default MyRoutes;
