import React, {Component} from 'react';

export class Footer extends Component {
  render() {
    return (
      <footer>
        <p>Built with ♥ by Eduardo M(bbaaxx) at Codetitlan </p>
      </footer>
    );
  }
}
Footer.propTypes = {
  authenticatedUser: React.PropTypes.object
};
