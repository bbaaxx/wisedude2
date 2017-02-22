import React, {Component} from 'react';
import * as firebase from 'firebase';

import {Shell} from './Shell';

export class ShellContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticatedUser: null,
      rememberMe: false
    };

    this.handleAuthChange = this.handleAuthChange.bind(this);
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(this.handleAuthChange);
  }

  componentWillMount() {}

  handleAuthChange(authenticatedUser, rememberMe = false) {
    this.setState(() => ({
      authenticatedUser,
      rememberMe
    }));
  }

  render() {
    return (
      <Shell
        router={this.props.router}
        user={this.state.authenticatedUser}
        onAuthStateChanged={this.handleAuthChange}
        />
    );
  }
}

ShellContainer.propTypes = {
  router: React.PropTypes.element
};
