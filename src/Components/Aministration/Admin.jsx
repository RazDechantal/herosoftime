import React, { Component } from "react";
import AddComp from "../Helper/AddComp";

import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class Admin extends Component {
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/Login" />;

    return (
      <div>
        <h1>You are: {this.props.loggedIn}</h1>
        <hr />
        <AddComp />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authError: state.auth.authError,
  userName: state.auth.name,
  auth: state.firebase.auth
});
export default connect(mapStateToProps)(Admin);
