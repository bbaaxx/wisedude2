import React, {Component} from 'react';
import {SomeComponent} from './SomeComponent';

export class SomeComponentContainer extends Component {
  render() {
    console.log('this.props', this.props);
    return (
      <SomeComponent someText="This is some component"/>
    );
  }
}
