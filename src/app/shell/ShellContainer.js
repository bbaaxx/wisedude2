import React, {Component} from 'react';
import * as firebase from 'firebase';
import {getRoutes} from '../config/routes';
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
    this.setState({appRoutes: getRoutes(this.handleAuthChange)});
    firebase.auth().onAuthStateChanged(this.handleAuthChange);
  }

  handleAuthChange(authenticatedUser, rememberMe = false) {
    this.setState(() => ({
      authenticatedUser,
      rememberMe
    }));
  }

  render() {
    return (
      <Shell
        routes={this.state.appRoutes}
        authenticatedUser={this.state.authenticatedUser}
        onAuthChange={this.handleAuthChange}
        />
    );
  }
}
