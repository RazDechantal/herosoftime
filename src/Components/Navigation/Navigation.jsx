import React from "react";

import "../../Style/app.scss";
import { connect } from "react-redux";

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
    const { isEmpty, firstName, role } = this.props;

    return (
      <div>
        <div>
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/">
              <img src={SRC} alt="Some text" />
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/app">Home</NavLink>
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
                    {!isEmpty ? firstName : "My page"}
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      <NavLink href={!isEmpty ? "/app/Logout" : "/app/Login"}>
                        {!isEmpty ? "Logg out" : "Logg in"}
                      </NavLink>
                    </DropdownItem>
                    <DropdownItem
                      hidden={!isEmpty && role === "SuperAdmin" ? false : true}
                    >
                      <NavLink href="/app/Admin">Add Company</NavLink>
                    </DropdownItem>
                    <DropdownItem
                      hidden={!isEmpty && role === "SuperAdmin" ? false : true}
                    >
                      <NavLink href="/app/Signup">Add customer</NavLink>
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
    email: state.firebase.auth.email,
    firstName: state.firebase.profile.firstName,
    role: state.firebase.profile.role,
    isEmpty: state.firebase.auth.isEmpty
  };
};

export default connect(mapStateToProps)(Navigation);
