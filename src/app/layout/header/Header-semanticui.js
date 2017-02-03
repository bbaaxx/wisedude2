import React, {Component} from 'react';
import {Icon, Label} from 'semantic-ui-react';

import {UserQuickMenu} from '../../user/UserQuickMenu';
import {MainMenuContainer} from '../../navigation/MainMenuContainer';

export class Header extends Component {
  render() {
    return (
      <header id="main-heading" className="navigation-container">
        <MainMenuContainer/>

        {this.props.authenticatedUser ? (
          <Label>
            <Icon name="barcode"/>
            Konichiwa, <a onClick={this.props.onUserMenuToggle}>
              {this.props.authenticatedUser.displayName}
            </a>
          </Label>
        ) : (
          <Label>
            <Icon name="barcode"/> Welcome, Guest
          </Label>
        )}

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
