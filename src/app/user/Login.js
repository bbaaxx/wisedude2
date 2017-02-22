import React, {Component} from 'react';
import {EmailPasswordForm} from './EmailPasswordForm';

export class Login extends Component {
  render() {
    return (
      <EmailPasswordForm onAuthChange={this.props.onAuthChange}/>
    );
  }
}

Login.propTypes = {
  onAuthChange: React.PropTypes.func
  // router: React.PropTypes.object,
  // location: React.PropTypes.object
};
