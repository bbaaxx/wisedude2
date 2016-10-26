import React, {Component} from 'react';
// import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';

import {Home} from '../stateless/home';
import {Hello} from '../stateless/hello';

export class Shell extends Component {
  render() {
    return (
      <div>
        <Router history={browserHistory}>
          <Route path="/" component={Home}/>
          <Route path="/hello" component={Hello}/>
        </Router>
      </div>
    );
  }
}
