import React from "react";

import "../../Style/app.scss";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { fetchUser } from "../../Action/fetchUser";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

import SRC from "../../Static/img/Logo01.png";

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      email: this.props.userState.email
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  componentWillMount() {
    fetchUser();
  }

  componentDidMount() {
    this.setState({ email: this.props.userState.email });
  }
  render() {
    return (
      <div>
        <div>
          <Navbar light expand="md">
            <NavbarBrand>
              <NavLink href="/">
                <img src={SRC} alt="Some text" />
              </NavLink>
            </NavbarBrand>
            {"You are logged in as: "}
            {this.props.user.email}
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/app">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/app/Company">Companies</NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Services
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      <NavLink href="/app/Loan">Loans</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink href="/app/Credit">Creditss</NavLink>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    My page
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      <NavLink href="/app/Login">
                        {" "}
                        {this.props.loggedIn ? "Logg out" : "Logg in"}{" "}
                      </NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink href="/app/Admin">Admin</NavLink>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      </div>
    );
  }
}

Navigation.propTypes = {
  fetchUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  userState: PropTypes.object.isRequired,
  loggedIn: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  userState: state.users,
  user: state.users.user,
  loggedIn: state.users.loggedIn
});
export default connect(
  mapStateToProps,
  { fetchUser }
)(Navigation);
