
import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import {Shell} from './app/shell/components/stateful/shell';

import '../semantic/dist/semantic.css';
import './index.scss';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

ReactDOM.render(
  <Shell/>,
  document.getElementById('shell')
);
