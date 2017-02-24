import React, {Component} from 'react';

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
      <div>
        <button name="signout" onClick={this.handleItemClick}>Sign out</button>
        <button name="profile" onClick={this.handleItemClick}>Profile</button>
      </div>
    );
  }
}
