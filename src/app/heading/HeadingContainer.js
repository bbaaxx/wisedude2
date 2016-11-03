import React, {Component} from 'react';
import {Heading} from './Heading';

export class HeadingContainer extends Component {
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
    return (<Heading
      authenticatedUser={this.props.authenticatedUser}
      onUserMenuToggle={this.handleUserMenuToggle}
      displayUserMenu={this.state.displayUserMenu}
      />);
  }
}
HeadingContainer.propTypes = {
  authenticatedUser: React.PropTypes.object
};
