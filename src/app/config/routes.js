import React from 'react';
import {Router, browserHistory} from 'react-router';
import {requireAuth} from '../utils/authenticated';

// These have to come from somewhere backendie
import {Landing} from '../landing/Landing';
import {LoginContainer} from '../user/LoginContainer';
import {Sandbox} from '../shell/Sandbox';

import {Hello} from '../shell/hello';

export function getRoutes(authChangeHandler) {
  const routes = [
    {
      path: '/',
      component: Landing
    }, {
      path: '/login',
      component: () => (<LoginContainer onAuthChange={authChangeHandler}/>)
    }, {
      path: '/sandbox',
      component: Sandbox,
      onEnter: requireAuth
    }, {
      path: '/hello',
      component: Hello,
      onEnter: requireAuth
    }
  ];
  return (
    <Router history={browserHistory} routes={routes}/>
  );
}
