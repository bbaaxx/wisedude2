import React from 'react';
import {Router, browserHistory} from 'react-router';
import {requireAuth} from '../utils/authenticated';

// These have to come from somewhere backendie
import {ShellContainer} from '../layout/shell/ShellContainer';
import {SomeComponentContainer} from '../component-template/SomeComponentContainer';
import {LoginContainer} from '../user/LoginContainer';
import {Landing} from '../landing/Landing';

export function getRouter() {
  const routes = [
    {
      path: '/',
      component: ShellContainer,
      indexRoute: {component: Landing},
      childRoutes: [
        {
          path: 'login',
          component: LoginContainer
        }, {
          path: 'component-template',
          component: SomeComponentContainer,
          onEnter: requireAuth
        }
      ]
    }
  ];

  return (
    <Router history={browserHistory} routes={routes} onUpdate={handleRouteUpdate}/>
  );

  function handleRouteUpdate() {
    console.log('Route state updated');
  }
}
