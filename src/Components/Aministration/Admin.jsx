import React, { Component } from "react";
import AddComp from "../Helper/AddComp";

import { connect } from "react-redux";
import PropTypes from "prop-types";

import { fetchUser } from "../../Action/fetchUser";
import { userLogged } from "../../Action/userLogged";

class Admin extends Component {
  componentWillMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <div>
        <h1>You are: {this.props.loggedIn}</h1>
        <hr />
        <AddComp />
      </div>
    );
  }
}

Admin.propTypes = {
  fetchUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  userState: PropTypes.object.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  userLogged: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  userState: state.users,
  user: state.users.user,
  loggedIn: state.users.loggedIn
});
export default connect(
  mapStateToProps,
  { fetchUser, userLogged }
)(Admin);
