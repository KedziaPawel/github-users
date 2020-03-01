import React, { FC } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

import { List, Details, Finder } from './scenes';

interface Props {
  match: { path: string };
}

const Users: FC<Props> = ({ match: { path } }) => (
  <Switch>
    <Route exact path={path} component={List as any} />
    <Route exact path={`${path}/finder/app`} component={Finder} />
    <Route exact path={`${path}/:username`} component={Details} />
  </Switch>
);

Users.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
  }).isRequired,
};

export default Users;
