import React, {Component} from 'react';

export class Footing extends Component {
  render() {
    return (
      <footer>
        <p>Built with ♥ by bbaaxx from Codetitlan </p>
      </footer>
    );
  }
}
Footing.propTypes = {
  authenticatedUser: React.PropTypes.object
};
