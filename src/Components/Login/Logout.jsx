import React, { Component } from "react";
import fire from "../../Config/cloudFirebase";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { userLogged } from "../../Action/userLogged";
import { addUser } from "../../Action/addUser";

class Logout extends Component {
  componentWillMount() {
    fire
      .auth()
      .signOut()
      .then(() => {
        this.props.userLogged(false);
        let user = {
          name: "",
          family: "",
          email: "",
          password: ""
        };
        this.props.addUser(user);
        this.props.userLogged(false);
        this.props.history.push("/");
        console.log("Logged out!");
      });
  }

  render() {
    return <div />;
  }
}

Logout.propTypes = {
  userLogged: PropTypes.func.isRequired,
  addUser: PropTypes.func.isRequired,
  user: PropTypes.any.isRequired
};

const mapStateToProps = state => ({
  user: state.users.user,
  userLogged: state.users.loggedIn
});
export default connect(
  mapStateToProps,
  { userLogged, addUser }
)(Logout);
