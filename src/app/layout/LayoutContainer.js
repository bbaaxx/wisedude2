import React, {Component} from 'react';

import {Layout} from './Layout';
import {HeaderContainer} from './header/HeaderContainer';
import {FooterContainer} from './footer/FooterContainer';

export class LayoutContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderHeader: true,
      renderFooter: true
    };

    this.handleToggleHeader = this.handleToggleHeader.bind(this);
    this.handleToggleFooter = this.handleToggleFooter.bind(this);
  }

  handleToggleHeader() {}
  handleToggleFooter() {}

  render() {
    const headerComponent = (
      <HeaderContainer
        authenticatedUser={{}}
        />
    );
    const footerComponent = (
      <FooterContainer/>
    );

    return (
      <Layout
        router={this.props.children}
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
