import React, {Component} from 'react';
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';

// import {UserQuickMenu} from '../../user/UserQuickMenu';
// import {MainMenuContainer} from '../../navigation/MainMenuContainer';

export class Header extends Component {
  render() {
    return (
      <Navbar color="inverse" light inverse toggleable>
        <NavbarToggler right onClick={this.props.onNavbarToggle}/>
        <NavbarBrand href="/">wisedude 2</NavbarBrand>
        <Collapse isOpen={this.props.showNavbar} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/">Start over</NavLink>
            </NavItem>
            {this.props.authenticatedUser ? (
              <NavItem>
                <NavLink href="#" >Konichiwa, {this.props.authenticatedUser.displayName}</NavLink>
              </NavItem>
            ) : (
              <NavItem>
                <NavLink href="/login">Login</NavLink>
              </NavItem>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    );
    // return (
    //   <header id="main-heading" className="navigation-container">
    //     <MainMenuContainer/>
    //
        // {this.props.authenticatedUser ? (
        //   <Label>
        //     <Icon name="barcode"/>
        //     Konichiwa, <a onClick={this.props.onNavbarToggle}>
        //       {this.props.authenticatedUser.displayName}
        //     </a>
        //   </Label>
        // ) : (
        //   <Label>
        //     <Icon name="barcode"/> Welcome, Guest
        //   </Label>
        // )}
    //
    //     {this.props.navbarDisplay && <UserQuickMenu/>}
    //   </header>
    // );
  }
}
Header.propTypes = {
  authenticatedUser: React.PropTypes.object,
  onNavbarToggle: React.PropTypes.func,
  showNavbar: React.PropTypes.bool
};
