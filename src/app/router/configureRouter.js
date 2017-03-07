import React from 'react';
import {Router, browserHistory} from 'react-router';
import {requireAuth} from '../utils/authenticated';

// These have to come from somewhere backendie
import {LayoutContainer} from '../layout/LayoutContainer';
import {SomeComponentContainer} from '../component-template/SomeComponentContainer';
import {LoginContainer} from '../user/LoginContainer';
import {LandingContainer} from '../landing/LandingContainer';

import App from '../containers/App';

export default function configureRouter() {
  const routes = [
    {
      path: '/',
      component: LayoutContainer,
      indexRoute: {component: LandingContainer},
      childRoutes: [
        {
          path: 'login',
          component: LoginContainer
        }, {
          path: 'todoapp',
          component: App
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
