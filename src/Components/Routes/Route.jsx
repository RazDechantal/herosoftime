import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "../../Pages/Home";
import Company from "../../Pages/CompanyPage";
import Loan from "../../Pages/Loan";
import Login from "../../Components/Login/Login";
import Logout from "../../Components/Login/Logout";
import Admin from "../../Components/Aministration/Admin";
import NotFoundPage from "../../Pages/NotFoundPage";
import Signup from "../Login/Signup";

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
              <Route path="/Login" activeClass={true} component={Login} />
              <Route path="/Logout" activeClass={true} component={Logout} />
              <Route path="/Admin" activeClass={true} component={Admin} />
              <Route path="/Signup" activeClass={true} component={Signup} />
              <Route component={NotFoundPage} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default MyRoutes;
