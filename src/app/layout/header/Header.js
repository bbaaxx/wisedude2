import React, {Component} from 'react';
import {Icon, Label} from 'semantic-ui-react';
import {UserQuickMenu} from '../../user/UserQuickMenu';
import {MainMenu} from '../../navigation/MainMenu';

export class Header extends Component {
  render() {
    let greeting;
    if (this.props.authenticatedUser) {
      greeting = (
        <Label>
          <Icon name="barcode"/>
          Konichiwa, <a onClick={this.props.onUserMenuToggle}>
            {this.props.authenticatedUser.displayName}
          </a>
        </Label>
      );
    } else {
      greeting = (
        <Label>
          <Icon name="barcode"/> Welcome, Guest
        </Label>
      );
    }

    return (
      <header id="main-heading">
        <MainMenu/>
        {greeting}
        {this.props.displayUserMenu && <UserQuickMenu/>}
      </header>
    );
  }
}
Header.propTypes = {
  authenticatedUser: React.PropTypes.object,
  onUserMenuToggle: React.PropTypes.func,
  displayUserMenu: React.PropTypes.bool
};
