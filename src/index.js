
import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import {ShellContainer} from './app/shell/ShellContainer';

import '../semantic/dist/semantic.css';
import './index.scss';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

ReactDOM.render(
  <ShellContainer/>,
  document.getElementById('shell'),
  () => {
    console.log('This callback occurs after ReactDOM.render does its thing');
  }
);
