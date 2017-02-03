import React, {Component} from 'react';
import {MainMenu} from './MainMenu';

export class MainMenuContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: null
    };
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(e, {name}) {
    e.preventDefault();
    console.log('item click', name);
    this.setState({
      activeItem: name
    });
  }

  render() {
    return (
      <MainMenu onItemClick={this.handleItemClick} activeItem={this.state.activeItem}/>
    );
  }
}
