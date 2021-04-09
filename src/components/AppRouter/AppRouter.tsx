import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { publicRoutes } from '../../routes';
import { HOME_ROUTE } from '../../utils';

// import NavBar from '../NavBar';

const AppRouter = (): JSX.Element => (
  <Switch>
    {publicRoutes.map(({ path, Component }) => (
      <Route key={path} path={path} component={Component} exact />
    ))}
    <Redirect to={HOME_ROUTE} />
  </Switch>
);

export default AppRouter;
