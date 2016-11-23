import React, {Component} from 'react';
import * as firebase from 'firebase';

import {Shell} from './Shell';
import {HeaderContainer} from '../header/HeaderContainer';
import {FooterContainer} from '../footer/FooterContainer';

export class ShellContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      authenticatedUser: null,
      rememberMe: false,
      renderHeader: true,
      renderFooter: false
    };

    this.handleAuthChange = this.handleAuthChange.bind(this);
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(this.handleAuthChange);
  }

  handleAuthChange(authenticatedUser, rememberMe = false) {
    this.setState(() => ({
      authenticatedUser,
      rememberMe
    }));
  }

  render() {
    const headerComponent = (
      <HeaderContainer
        authenticatedUser={this.state.authenticatedUser}
        />
    );
    const footerComponent = (
      <FooterContainer/>
    );

    return (
      <Shell
        routerComponent={this.props.children}
        renderHeader={this.state.renderHeader}
        headerComponent={headerComponent}
        renderFooter={this.state.renderFooter}
        footerComponent={footerComponent}
        />
    );
  }
}

ShellContainer.propTypes = {
  children: React.PropTypes.element
};
