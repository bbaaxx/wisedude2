import React, {Component} from 'react';
import {Footing} from './Footing';

export class FootingContainer extends Component {
  render() {
    return (<Footing authenticatedUser={this.props.authenticatedUser}/>);
  }
}
FootingContainer.propTypes = {
  authenticatedUser: React.PropTypes.object
};
