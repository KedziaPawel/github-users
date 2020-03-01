import React from 'react';
import { Switch, Route } from 'react-router-dom';

import paths from './consts/paths';
import { Users } from './scenes';

export const Routes = () => (
  <Switch>
    <Route path={paths.users} component={Users} />
  </Switch>
);

export default Routes;
