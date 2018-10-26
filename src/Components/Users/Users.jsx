import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchUsers } from "../../Action/userAction";

class Users extends Component {
  componentWillMount() {
    this.props.fetchUsers();
  }
  render() {
    const useritems = this.props.users.map(user => (
      <div key={user.id}>
        <h3>{user.name}</h3>
        <p>
          email:
          {user.email}
        </p>
        <span>Address: {user.address.stret}</span>
        <span>, {user.address.suite}</span>
        <span>, {user.address.city}</span>
        <span>, {user.address.zipcode}</span>
        <p>{user.phone}</p>
        <hr />
      </div>
    ));
    return (
      <div>
        <h1>Customers</h1>
        {useritems}
      </div>
    );
  }
}

Users.propTypes = {
  fetchUsers: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  users: state.users.items
});
export default connect(
  mapStateToProps,
  { fetchUsers }
)(Users);
