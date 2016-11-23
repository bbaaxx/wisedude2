import React, {Component} from 'react';

export class Shell extends Component {
  render() {
    return (
      <div className="outer-shell">
        {this.props.renderHeader && (
          <div className="header-shell">
            {this.props.headerComponent}
          </div>
        )}

        <div className="routing-shell">
          {this.props.routerComponent}
        </div>

        {this.props.renderFooter && (
          <div className="footer-shell">
            {this.props.footerComponent}
          </div>
        )}
      </div>
    );
  }
}

Shell.propTypes = {
  routerComponent: React.PropTypes.element,
  headerComponent: React.PropTypes.element,
  footerComponent: React.PropTypes.element,
  renderHeader: React.PropTypes.bool,
  renderFooter: React.PropTypes.bool
};
