import React, {Component} from 'react';
import * as firebase from 'firebase';
import {getRoutes} from '../config/routes';

import {Shell} from './Shell';
import {HeadingContainer} from '../heading/HeadingContainer';
import {FootingContainer} from '../footing/FootingContainer';

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
    const headingComponent = (
      <HeadingContainer
        authenticatedUser={this.state.authenticatedUser}
        />
    );
    const footingComponent = (
      <FootingContainer/>
    );
    return (
      <Shell
        headingComponent={headingComponent}
        routes={this.state.appRoutes}
        routerComponent={this.state.appRoutes}
        footingComponent={footingComponent}
        />
    );
  }
}
