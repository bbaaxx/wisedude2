import React, {Component} from 'react';
import {Login} from './Login';

export class LoginContainer extends Component {
  handleAuthChange() {
    console.log('Auth State Changed!!');
  }
  render() {
    // console.log('ThisContextRouter', this.context.router.location);
    console.log('ThisProps', this.props);
    return (
      <Login onAuthChange={this.handleAuthChange}/>
    );
  }
}

LoginContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
};
LoginContainer.childContextTypes = {
  location: React.PropTypes.object
};
