import React from "react";

import "../../Style/app.scss";
import { connect } from "react-redux";

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
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const { email } = this.props;
    console.log(this.props);
    return (
      <div>
        <div>
          <Navbar light expand="md">
            <NavbarBrand>
              <NavItem is="/">
                <img src={SRC} alt="Some text" />
              </NavItem>
            </NavbarBrand>
            {email ? "You are logged in as: " + email : ""}

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
                      <NavLink href={email ? "/app/Logout" : "/app/Login"}>
                        {email ? "Logg out" : "Logg in"}
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

const mapStateToProps = state => {
  return {
    email: state.firebase.auth.email
  };
};

export default connect(
  mapStateToProps,
  { fetchUser }
)(Navigation);
