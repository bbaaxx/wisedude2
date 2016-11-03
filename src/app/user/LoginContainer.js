import React, {Component} from 'react';
import {Login} from './Login';

export class LoginContainer extends Component {
  // const location = this.context.router.location;
  // console.log('ThisContextLocation', this.context.router.location);
  render() {
    return (
      <Login/>
    );
  }
}

Login.propTypes = {
  onAuthChange: React.PropTypes.func,
  router: React.PropTypes.object,
  location: React.PropTypes.object
};
Login.contextTypes = {
  router: React.PropTypes.object.isRequired
};
Login.childContextTypes = {
  location: React.PropTypes.object
};
