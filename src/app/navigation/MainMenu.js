import React, {Component} from 'react';
import {Button, Dropdown, Icon} from 'semantic-ui-react';

export class MainMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: null
    };
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(e, {name}) {
    e.preventDefault();
    this.setState({
      activeItem: name
    });
    console.log('item click', name);
  }

  render() {
    return (
      <Dropdown as={Button} circular icon="wrench">
        <Dropdown.Menu>
          <Dropdown.Item>
            <Icon name="dropdown icon"/>
            <span className="text">New</span>

            <Dropdown.Menu>
              <Dropdown.Item>Document</Dropdown.Item>
              <Dropdown.Item>Image</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown.Item>
          <Dropdown.Item>Open</Dropdown.Item>
          <Dropdown.Item>Save...</Dropdown.Item>
          <Dropdown.Item>Edit Permissions</Dropdown.Item>
          <Dropdown.Divider/>
          <Dropdown.Header>Export</Dropdown.Header>
          <Dropdown.Item>Share</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}
