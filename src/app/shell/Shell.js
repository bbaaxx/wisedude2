import React, {Component} from 'react';
import {Provider} from 'react-redux';

export class Shell extends Component {
  render() {
    return (
      <div className="application-shell">
        <Provider store={this.props.store}>
          {this.props.router}
        </Provider>
      </div>
    );
  }
}

Shell.propTypes = {
  router: React.PropTypes.element,
  store: React.PropTypes.object
};
