import React, {Component} from 'react';
import {getRouter} from '../config/router';
import {Shell} from './Shell';

export class ShellContainer extends Component {
  render() {
    return (
      <Shell routerComponent={getRouter()}/>
    );
  }
}
