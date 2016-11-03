import React, {Component} from 'react';
import {HeadingContainer} from '../heading/HeadingContainer';
import {FootingContainer} from '../footing/FootingContainer';

export class Shell extends Component {
  render() {
    return (
      <div id="shell-container">
        <HeadingContainer authenticatedUser={this.props.authenticatedUser}/>
        <div id="router-container">
          {this.props.routes}
        </div>
        <FootingContainer/>
      </div>
    );
  }
}

Shell.propTypes = {
  routes: React.PropTypes.element,
  authenticatedUser: React.PropTypes.object,
  onAuthChange: React.PropTypes.func
};
