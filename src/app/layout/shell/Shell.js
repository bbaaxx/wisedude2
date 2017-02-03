import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';

export class Shell extends Component {
  render() {
    return (
      <div>
        {this.props.renderHeader && this.props.headerComponent}
        <Container>
          <Row>
            <Col>
              {this.props.routerComponent}
            </Col>
          </Row>
        </Container>
        {this.props.renderFooter && this.props.footerComponent}
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
