import React, {Component} from 'react';
import {
  Button,
  Divider,
  Header,
  Grid,
  Icon,
  Segment
} from 'semantic-ui-react';
import {EmailPasswordForm} from './EmailPasswordForm';

export class Login extends Component {
  render() {
    return (
      <Segment raised>
        <Grid columns={2} stackable divided>

          <Grid.Column>

            <Header as="h2">Sign in with one of these:</Header>
            <Button color="google plus" fluid>
              <Icon name="google"/>Google
            </Button>

            <Divider/>

            <Button color="facebook" fluid>
              <Icon name="facebook"/>Facebook
            </Button>

            <Divider/>

            <Button fluid>
              <Icon name="github"/>Github
            </Button>

            <Divider/>

            <Button color="twitter" fluid>
              <Icon name="twitter"/>Twitter
            </Button>

          </Grid.Column>

          <Grid.Column>
            <Header as="h2">Or try an email and password:</Header>
            <EmailPasswordForm onAuthChange={this.props.onAuthChange}/>
          </Grid.Column>

        </Grid>
      </Segment>

    );
  }
}

Login.propTypes = {
  onAuthChange: React.PropTypes.func,
  router: React.PropTypes.object,
  location: React.PropTypes.object
};
