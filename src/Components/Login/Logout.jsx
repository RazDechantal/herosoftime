import React, { Component } from "react";

import { connect } from "react-redux";
import { signOut } from "../../Action/authAction";

class Logout extends Component {
  componentWillMount() {
    this.props.signOut();
    this.props.history.push("/Login");
  }

  render() {
    this.props.signOut();
    return <div />;
  }
}

export default connect(
  null,
  { signOut }
)(Logout);
