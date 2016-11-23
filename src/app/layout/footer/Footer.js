import React, {Component} from 'react';

export class Footer extends Component {
  render() {
    return (
      <footer>
        <p>Built with ♥ by bbaaxx from Codetitlan </p>
      </footer>
    );
  }
}
Footer.propTypes = {
  authenticatedUser: React.PropTypes.object
};
