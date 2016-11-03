import React, {Component} from 'react';
import {Button, Checkbox, Form, Icon} from 'semantic-ui-react';
import * as firebase from 'firebase';

export class EmailPasswordForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      emailValue: 'test@example.com',
      passwordValue: 'test123'
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      emailValue: e.target.email.value,
      passwordValue: e.target.password.value
    });

    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.emailValue, this.state.passwordValue)
      .then(result => {
        // User signed in!
        console.log('User signed in!', result);
        // Update upstream
        this.props.onAuthChange(result);
      })
      .catch(e => {
        console.log('Error on sign in!', e);
        this.setState({error: e});
      });
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <label>Email</label>
          <input name="email" placeholder="your@email.please"/>
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input name="password" placeholder="(8 to 12 characters)" type="password"/>
        </Form.Field>
        <Form.Field>
          <Checkbox label="Remember me" name="rememberme"/>
        </Form.Field>
        <Button type="submit" primary animated fluid>
          <Button.Content visible>Sign in</Button.Content>
          <Button.Content hidden>
            <Icon name="right arrow"/>
          </Button.Content>
        </Button>
      </Form>
    );
  }
}

EmailPasswordForm.propTypes = {
  onAuthChange: React.PropTypes.func
};
