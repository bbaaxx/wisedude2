import React, {Component} from 'react';
import {Button, Icon, Label} from 'semantic-ui-react';
import {UserQuickMenu} from '../../user/UserQuickMenu';

export class Heading extends Component {
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
      <heading id="main-heading">
        <Button circular icon="settings"/>
        {greeting}
        {this.props.displayUserMenu && <UserQuickMenu/>}
      </heading>
    );
  }
}
Heading.propTypes = {
  authenticatedUser: React.PropTypes.object,
  onUserMenuToggle: React.PropTypes.func,
  displayUserMenu: React.PropTypes.bool
};
