import React, {Component} from 'react';
import {Header} from './Header';

export class HeaderContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayUserMenu: false
    };
    this.handleUserMenuToggle = this.handleUserMenuToggle.bind(this);
  }

  handleUserMenuToggle() {
    this.setState(prevState => ({
      displayUserMenu: !prevState.displayUserMenu
    }));
  }

  render() {
    return (<Header
      authenticatedUser={this.props.authenticatedUser}
      onUserMenuToggle={this.handleUserMenuToggle}
      displayUserMenu={this.state.displayUserMenu}
      />);
  }
}
HeaderContainer.propTypes = {
  authenticatedUser: React.PropTypes.object
};
