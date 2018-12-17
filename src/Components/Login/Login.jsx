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
    e.preventDefault();
    this.props.signUp(this.state);
    this.props.history.push("/");
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
          <div className="col-md-6">
            <form onSubmit={this.signUp}>
              <div className="from-group">
                <label>Name</label>
                <input
                  id="nameIdSign"
                  type="Text"
                  name="name"
                  onChange={this.handleChange}
                  className="form-control"
                  aria-describedby="emailHelp"
                  placeholder="Enter Name"
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div className="form-group">
                <label>Family Name</label>
                <input
                  id="familyIdSign"
                  type="Text"
                  name="family"
                  onChange={this.handleChange}
                  className="form-control"
                  placeholder="Family name"
                />
              </div>
              <div className="from-group">
                <label>Email address</label>
                <input
                  id="emailregisterIdLog"
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
                  id="passwordIdSign"
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
                  className="btn btn-success"
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
          <div className="red-text center">
            {authError ? <p>{authError}</p> : null}
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
