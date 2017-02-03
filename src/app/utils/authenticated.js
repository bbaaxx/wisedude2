import * as firebase from 'firebase';
import {firebaseConfig} from '../../../firebase.config.js';

firebase.initializeApp(firebaseConfig);

export function requireAuth(nextState, replace, callback) {
  firebase
    .auth()
    .onAuthStateChanged(currentUser => {
      console.log('firebase auth state changed (authenticated.js)');
      if (currentUser === null) {
        console.log('No user (authenticated.js)');
        replace({
          pathname: '/login',
          state: {nextPathname: nextState.location.pathname}
        });
      }
      callback();
    });
}
