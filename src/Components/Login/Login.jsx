import React, { Component } from "react";
import fire from "../../Config/cloudFirebase";

import { Jumbotron, Grid } from "react-bootstrap";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addUser } from "../../Action/addUser";
import { userLogged } from "../../Action/userLogged";
import { fetchUser } from "../../Action/fetchUser";

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

  componentWillMount() {
    this.props.fetchUser();
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login(e) {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        let user = {
          name: this.state.name,
          family: this.state.family,
          email: this.state.email,
          password: this.state.password
        };
        this.props.addUser(user);
        this.props.userLogged(true);

        console.log(this.props.loggedIn ? "logged in" : "Not logged in ");

        // This will redirect to the homepage if login successfull!
        this.props.history.push("/");
      })
      .catch(error => {
        console.log(error);
      });
  }

  signUp(e) {
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        // This will redirect to the homepage if login successfull!
        this.props.history.push("/");
      })
      .catch(error => {
        console.log(error);
      });

    let user = {
      name: this.state.name,
      family: this.state.family,
      email: this.state.email,
      password: this.state.password
    };
    this.props.addUser(user);
    this.props.userLogged(true);
  }

  render() {
    return (
      <Grid>
        <Jumbotron>
          <h2>Welcome to Login page</h2>
          <p>This is where you log in</p>
        </Jumbotron>
        <div className="row">
          <div className="col-md-6">
            <form>
              <div className="from-group">
                <label>Email address</label>
                <input
                  id="emailIdLog"
                  type="email"
                  name="email"
                  value={this.state.email}
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
                  value={this.state.password}
                  onChange={this.handleChange}
                  className="form-control"
                  placeholder="Password"
                />
              </div>

              <div className="form-group">
                <button
                  onClick={this.login}
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
            <form>
              <div className="from-group">
                <label>Name</label>
                <input
                  id="nameIdSign"
                  type="Text"
                  name="name"
                  value={this.state.name}
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
                  value={this.state.family}
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
                  value={this.state.email}
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
                  value={this.state.password}
                  onChange={this.handleChange}
                  className="form-control"
                  placeholder="Password"
                />
              </div>
              <div className="form-group">
                <button
                  onClick={this.signUp}
                  style={{ marginLeft: "0px" }}
                  type="submit"
                  className="btn btn-success"
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </Grid>
    );
  }
}

Login.propTypes = {
  fetchUser: PropTypes.func.isRequired,
  userLogged: PropTypes.func.isRequired,
  addUser: PropTypes.func.isRequired,
  user: PropTypes.any.isRequired
};

const mapStateToProps = state => ({
  users: state.users,
  user: state.users.user,
  userLogged: state.users.loggedIn
});
export default connect(
  mapStateToProps,
  { addUser, userLogged, fetchUser }
)(Login);
