import React, {Component} from 'react';
import {Dropdown} from 'semantic-ui-react';

export class MainMenu extends Component {
  render() {
    return (
      <Dropdown icon="wrench">
        <Dropdown.Menu>
          <Dropdown.Header>Active: {this.props.activeItem}</Dropdown.Header>
          <Dropdown.Divider/>
          <Dropdown.Item onClick={this.props.onItemClick} name="open">Open</Dropdown.Item>
          <Dropdown.Item onClick={this.props.onItemClick} name="save">Save...</Dropdown.Item>
          <Dropdown.Item onClick={this.props.onItemClick} name="editPermissions">Edit Permissions</Dropdown.Item>
          <Dropdown.Divider/>
          <Dropdown.Header>Export</Dropdown.Header>
          <Dropdown.Item onClick={this.props.onItemClick} name="share">Share</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

MainMenu.propTypes = {
  activeItem: React.PropTypes.string,
  onItemClick: React.PropTypes.func
};
