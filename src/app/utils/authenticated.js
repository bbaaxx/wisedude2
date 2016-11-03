import * as firebase from 'firebase';
import {firebaseConfig} from '../../../firebase.config.js';

firebase.initializeApp(firebaseConfig);

export function requireAuth(nextState, replace, callback) {
  firebase
    .auth()
    .onAuthStateChanged(currentUser => {
      console.log('this is happening');
      if (currentUser === null) {
        console.log('No user');
        replace({
          pathname: '/login',
          state: {nextPathname: nextState.location.pathname}
        });
      }
      callback();
    });
}
