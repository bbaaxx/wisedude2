import React, {Component} from 'react';

export class SomeComponent extends Component {
  render() {
    return (
      <p>{this.props.someText && this.props.someText}</p>
    );
  }
}

SomeComponent.propTypes = {
  someText: React.PropTypes.string
};
