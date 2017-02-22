import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';

export class Layout extends Component {
  render() {
    return (
      <div className="layout-container">
        {this.props.renderHeader && this.props.headerComponent}
        <Container>
          <Row>
            <Col>
              {this.props.router}
            </Col>
          </Row>
        </Container>
        {this.props.renderFooter && this.props.footerComponent}
      </div>
    );
  }
}

Layout.propTypes = {
  router: React.PropTypes.element,
  headerComponent: React.PropTypes.element,
  footerComponent: React.PropTypes.element,
  renderHeader: React.PropTypes.bool,
  renderFooter: React.PropTypes.bool
};
