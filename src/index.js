import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import {getRouter} from './app/config/router';

import '../semantic/dist/semantic.css';
import './index.scss';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const router = getRouter();

ReactDOM.render(
  router,
  document.getElementById('shell'),
  () => {
    console.log('This callback occurs after ReactDOM.render does its thing');
  }
);
