import React, { Component } from "react";
import fire from "../../Config/cloudFirebase";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { userLogged } from "../../Action/userLogged";

class Logout extends Component {
  componentWillMount() {
    fire.auth().signOut();
    this.props.userLogged(false);
    this.props.history.push("/");
  }

  render() {
    return <div />;
  }
}

Logout.propTypes = {
  userLogged: PropTypes.func.isRequired,
  user: PropTypes.any.isRequired
};

const mapStateToProps = state => ({
  user: state.users.user,
  userLogged: state.users.userLogged
});
export default connect(
  mapStateToProps,
  { userLogged }
)(Logout);
