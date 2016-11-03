import React, {Component} from 'react';

export class Footing extends Component {
  render() {
    return (
      <footer>
        <h3>The footer</h3>
      </footer>
    );
  }
}
Footing.propTypes = {
  authenticatedUser: React.PropTypes.object
};
