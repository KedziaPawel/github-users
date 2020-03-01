import { createSelector } from 'reselect';

import { GlobalState } from 'rootReducer';
import User from 'types/user';

import { State } from './types';
import { NAME } from './constants';

const local = (state: GlobalState): State => state[NAME];

export const users = createSelector(local, ({ users }): User[] => users);

export const userById = createSelector(
  users,
  (_: GlobalState, username: string) => username,
  (list, username) => list.find(element => element.login === username),
);

export const error = createSelector(local, ({ error }) => error);

export const fetching = createSelector(local, ({ fetching }) => fetching);
