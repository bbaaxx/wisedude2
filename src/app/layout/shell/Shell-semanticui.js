import React, {Component} from 'react';
// import {Sidebar, Segment, Menu, Icon} from 'semantic-ui-react';

export class Shell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
    this.handleToggleSidebar = this.handleToggleSidebar.bind(this);
  }

  handleToggleSidebar(e) {
    e.preventDefault();
    this.setState({visible: !this.state.visible});
  }

  render() {
    const pusherSegment = (
      <Segment basic>
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
      </Segment>
    );
    const sidebar = (
      <Sidebar
        className="navigation-container"
        as={Menu}
        animation="overlay"
        direction="top"
        visible={this.state.visible}
        inverted
        >
        <Menu.Item name="home">
          <Icon name="home"/>
          Home
        </Menu.Item>
        <Menu.Item name="gamepad">
          <Icon name="gamepad"/>
          Games
        </Menu.Item>
        <Menu.Item name="camera">
          <Icon name="camera"/>
          Channels
        </Menu.Item>
      </Sidebar>
    );
    return (
      <div className="outer-shell">
        <div className="main-menu-button">
          <Icon
            name="bars"
            size="big"
            inverted
            onClick={this.handleToggleSidebar}
            />
        </div>
        <Sidebar.Pushable>
          {sidebar}
          <Sidebar.Pusher>
            {pusherSegment}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
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
