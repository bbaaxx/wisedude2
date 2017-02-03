import React, {Component} from 'react';
import {Header} from './Header';

export class HeaderContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayNavbar: false
    };
    this.handleNavbarToggle = this.handleNavbarToggle.bind(this);
  }

  handleNavbarToggle() {
    this.setState(prevState => ({
      displayNavbar: !prevState.displayNavbar
    }));
  }

  render() {
    return (<Header
      authenticatedUser={this.props.authenticatedUser}
      onNavbarToggle={this.handleNavbarToggle}
      showNavbar={this.state.displayNavbar}
      />);
  }
}
HeaderContainer.propTypes = {
  authenticatedUser: React.PropTypes.object
};
