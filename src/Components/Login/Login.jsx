import React, { Component } from "react";

import { Jumbotron, Grid } from "react-bootstrap";
import { Redirect } from "react-router-dom";

import { connect } from "react-redux";

//Auth
import { signIn } from "../../Action/authAction";
import { signUp } from "../../Action/authAction";

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.signUp = this.signUp.bind(this);
    this.login = this.login.bind(this);

    this.state = {
      name: "",
      family: "",
      email: "",
      password: ""
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login(e) {
    const { auth } = this.props;

    e.preventDefault();
    this.props.signIn(this.state);
    if (!auth.uid) return <Redirect to="/Login" />;
  }

  signUp(e) {
    const { auth } = this.props;

    e.preventDefault();
    this.props.signUp(this.state);
    if (!auth.uid) return <Redirect to="/Login" />;
  }

  render() {
    const { authError, auth } = this.props;
    if (auth.uid) return <Redirect to="/" />;

    return (
      <Grid>
        <Jumbotron>
          <h2>Welcome to Login page</h2>
          <p>This is where you log in</p>
        </Jumbotron>
        <div className="row">
          <div className="col-md-6">
            <form onSubmit={this.login}>
              <div className="from-group">
                <label>Email address</label>
                <input
                  id="emailIdLog"
                  type="email"
                  name="email"
                  onChange={this.handleChange}
                  className="form-control"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  id="passwordIdLog"
                  type="password"
                  name="password"
                  onChange={this.handleChange}
                  className="form-control"
                  placeholder="Password"
                />
              </div>

              <div className="form-group">
                <button
                  style={{ marginLeft: "0px" }}
                  type="submit"
                  className="btn btn-primary"
                >
                  Log in
                </button>
              </div>
            </form>
          </div>
          <div style={{ margin: "auto", color: "red" }}>
            <h1> {authError ? <p>{authError}</p> : null}</h1>
          </div>
        </div>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  authError: state.auth.authError,
  userName: state.auth.name,
  auth: state.firebase.auth
});
export default connect(
  mapStateToProps,
  { signIn, signUp }
)(Login);
