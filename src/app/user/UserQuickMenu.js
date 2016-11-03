import React, {Component} from 'react';
import {Button, Icon, Menu} from 'semantic-ui-react';

export class UserQuickMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'inbox'
    };
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(e, {name}) {
    this.setState({activeItem: name});
  }

  render() {
    return (
      <Menu className="user-quick-menu" compact icon="labeled" vertical>
        <Menu.Item name="signout" onClick={this.handleItemClick}>
          <Button>
            <Icon name="sign out"/>
            Sign out
          </Button>
        </Menu.Item>
        <Menu.Item name="profile" onClick={this.handleItemClick}>
          <Button>
            <Icon name="user"/>
            User profile
          </Button>
        </Menu.Item>
      </Menu>
    );
  }
}
