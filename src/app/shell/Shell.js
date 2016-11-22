import React, {Component} from 'react';

export class Shell extends Component {
  render() {
    return (
      <div className="outer-shell">
        <div className="heading-shell">
          {this.props.headingComponent}
        </div>
        <div className="routing-shell">
          {this.props.routerComponent}
        </div>
        <div className="footing-shell">
          {this.props.footingComponent}
        </div>
      </div>
    );
  }
}

Shell.propTypes = {
  routerComponent: React.PropTypes.element,
  headingComponent: React.PropTypes.element,
  footingComponent: React.PropTypes.element
};
