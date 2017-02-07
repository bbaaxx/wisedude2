import React, {Component} from 'react';
import * as firebase from 'firebase';

import {Shell} from './shell/Shell';
import {HeaderContainer} from './header/HeaderContainer';
import {FooterContainer} from './footer/FooterContainer';

export class LayoutContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticatedUser: null,
      rememberMe: false,
      renderHeader: true,
      renderFooter: true
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

LayoutContainer.propTypes = {
  children: React.PropTypes.element
};
