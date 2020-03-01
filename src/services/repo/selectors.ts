import { createSelector } from 'reselect';

import { GlobalState } from 'rootReducer';
import Repo from 'types/repo';

import { State } from './types';
import { NAME } from './constants';

const local = (state: GlobalState): State => state[NAME];

export const repos = createSelector(local, ({ repos }): Repo[] => repos);

export const error = createSelector(local, ({ error }) => error);

export const fetching = createSelector(local, ({ fetching }) => fetching);
