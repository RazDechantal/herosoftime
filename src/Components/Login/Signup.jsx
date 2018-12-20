import React, { Component } from "react";

import { Jumbotron, Grid } from "react-bootstrap";

<<<<<<< HEAD
import { connect } from "react-redux";

import { signUp } from "../../Action/authAction";
import { signOut } from "../../Action/authAction";
=======
import { Redirect } from "react-router-dom";

import { connect } from "react-redux";

import { signUp } from "../../Action/authAction";
>>>>>>> 02a5d253aa9e50413e6c99835a249f134b39241c

class Signup extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.signUp = this.signUp.bind(this);

    this.state = {
      name: "",
      family: "",
      email: "",
      password: "",
      role: "",
      address: "",
      zip: "",
      city: "",
      country: "",
      account: ""
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  signUp(e) {
    const { authError } = this.props;

    e.preventDefault();
    this.props.signUp(this.state);

<<<<<<< HEAD
    if (authError === null) {
      this.setState({ state: [] });
      this.props.history.push("/");
    }
=======
    if ({ authError } == null) {
      this.setState({ state: [] });
      return <Redirect to="/" />;
    } else return <Redirect to="/Signup" />;
>>>>>>> 02a5d253aa9e50413e6c99835a249f134b39241c
  }

  render() {
    const { authError } = this.props;

    return (
      <Grid>
        <Jumbotron>
          <h2>Welcome to Signup page</h2>
        </Jumbotron>
        <form onSubmit={this.signUp}>
          <div className="row">
            <div className="col-md-6">
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
              <div className="form-group">
                <label>Role</label>
                <select
                  id="roleIdSign"
                  type="select"
                  name="role"
                  onChange={this.handleChange}
                  className="form-control"
                  placeholder="Choose role"
                >
                  <option />
                  <option>Customer</option>
                  <option>Admin</option>
                  <option>SuperAdmin</option>
                </select>
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
                  Add new customer
                </button>
              </div>
            </div>
            <div className="col-md-6">
              <div className="from-group">
                <label>Address</label>
                <input
                  id="addressIdSign"
                  type="Text"
                  name="address"
                  onChange={this.handleChange}
                  className="form-control"
                  aria-describedby="emailHelp"
                  placeholder="Address"
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div className="form-group">
                <label>Zip code</label>
                <input
                  id="zipIdSign"
                  type="Text"
                  name="zip"
                  onChange={this.handleChange}
                  className="form-control"
                  placeholder="Zip code"
                />
              </div>
              <div className="form-group">
                <label>City</label>
                <input
                  id="cityIdSign"
                  type="text"
                  name="city"
                  onChange={this.handleChange}
                  className="form-control"
                  placeholder="City"
                />
              </div>
              <div className="from-group">
                <label>Country</label>
                <input
                  id="countryregisterIdLog"
                  type="text"
                  name="country"
                  onChange={this.handleChange}
                  className="form-control"
                  aria-describedby="emailHelp"
                  placeholder="Country"
                />
              </div>
              <div className="form-group">
                <label>Account number</label>
                <input
                  id="accountIdSign"
                  type="text"
                  name="account"
                  onChange={this.handleChange}
                  className="form-control"
                  placeholder="Account number"
                />
              </div>
            </div>
          </div>
        </form>
        <div style={{ margin: "auto", color: "red" }}>
          <h1> {authError ? <p>{authError}</p> : null}</h1>
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
<<<<<<< HEAD
  { signUp, signOut }
=======
  { signUp }
>>>>>>> 02a5d253aa9e50413e6c99835a249f134b39241c
)(Signup);
