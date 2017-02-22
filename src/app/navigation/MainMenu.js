import React, {Component} from 'react';

export class MainMenu extends Component {
  render() {
    return (
      <a onClick={this.props.onItemClick}>
        {this.props.activeItem}
      </a>
    );
  }
}

MainMenu.propTypes = {
  activeItem: React.PropTypes.string,
  onItemClick: React.PropTypes.func
};
