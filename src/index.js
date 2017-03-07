import React from 'react';
import {render} from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import configureRouter from './app/router/configureRouter';
import configureStore from './app/store/configureStore';

import {ShellContainer} from './app/shell/ShellContainer';

import './index.scss';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

render(
  <ShellContainer router={configureRouter()} store={configureStore()}/>,
  document.getElementById('root'),
  () => {
    console.log('This callback occurs after ReactDOM.render does its thing');
  }
);
