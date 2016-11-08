import React from 'react';
import {Router, browserHistory} from 'react-router';
import {requireAuth} from '../utils/authenticated';

// These have to come from somewhere backendie
import {Landing} from '../landing/Landing';
import {SomeComponentContainer} from '../component-template/SomeComponentContainer';
import {LoginContainer} from '../user/LoginContainer';

export function getRoutes(authChangeHandler) {
  const routes = [
    {
      path: '/',
      component: Landing
    }, {
      path: '/login',
      component: () => (<LoginContainer onAuthChange={authChangeHandler}/>)
    }, {
      path: '/component-template',
      component: SomeComponentContainer,
      onEnter: requireAuth
    }
  ];

  return (
    <Router history={browserHistory} routes={routes} onUpdate={handleRouterUpdates}/>
  );

  function handleRouterUpdates() {
    console.log('Routee state updated');
  }
}
