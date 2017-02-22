import React, {Component} from 'react';
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
      <form>
        <label>Email</label>
        <input name="email" placeholder="your@email.please"/>
        <label>Password</label>
        <input name="password" placeholder="(8 to 12 characters)" type="password"/>
      </form>
    );
  }
}

EmailPasswordForm.propTypes = {
  onAuthChange: React.PropTypes.func
};
