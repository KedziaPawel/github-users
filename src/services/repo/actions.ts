import { createAction } from 'utils/actions';

import {
  GET_REPOS,
  GET_REPOS_SUCCESS,
  GET_REPOS_ERROR,
  RESET,
} from './constants';

export const getRepos = createAction(GET_REPOS);
export const getReposSuccess = createAction(GET_REPOS_SUCCESS);
export const getReposError = createAction(GET_REPOS_ERROR);

export const reset = createAction(RESET);
