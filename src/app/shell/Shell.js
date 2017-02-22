import React, {Component} from 'react';

export class Shell extends Component {
  render() {
    return (
      <div className="application-shell">
        {this.props.router}
      </div>
    );
  }
}

Shell.propTypes = {
  router: React.PropTypes.element
};
