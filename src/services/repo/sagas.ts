import { call, takeLatest } from 'redux-saga/effects';

import apiCall from 'utils/apiCall';

import * as api from '../api';

import { getReposSuccess, getReposError } from './actions';
import { GET_REPOS } from './constants';

interface IGetUsersAction {
  payload?: {
    username: string;
  };
}

export function* getReposSaga(action: IGetUsersAction | unknown) {
  const { payload } = action as IGetUsersAction;

  yield call(apiCall, {
    method: api.getReposByUsername,
    onSuccess: getReposSuccess,
    onError: getReposError,
    payload: payload,
  });
}

export default [takeLatest(GET_REPOS, getReposSaga)];
