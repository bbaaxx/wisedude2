import React, {Component} from 'react';

export class Shell extends Component {
  render() {
    return this.props.routerComponent;
  }
}

Shell.propTypes = {
  routerComponent: React.PropTypes.element
};
