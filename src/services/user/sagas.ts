import { call, takeLatest } from 'redux-saga/effects';

import apiCall from 'utils/apiCall';

import * as api from '../api';

import {
  getUsersSuccess,
  getUsersError,
  getUserSuccess,
  getUserError,
} from './actions';
import { GET_USERS, GET_USER } from './constants';

interface IGetUsersAction {
  payload?: {
    since?: number;
  };
}

export function* getUsersSaga(action: IGetUsersAction | unknown) {
  const { payload } = action as IGetUsersAction;

  yield call(apiCall, {
    method: api.getUsers,
    onSuccess: getUsersSuccess,
    onError: getUsersError,
    payload: payload,
  });
}

interface IGetUserAction {
  payload: number;
}

export function* getUserSaga(action: IGetUserAction | unknown) {
  const { payload } = action as IGetUsersAction;

  yield call(apiCall, {
    method: api.getUser,
    onSuccess: getUserSuccess,
    onError: getUserError,
    payload,
  });
}

export default [
  takeLatest(GET_USERS, getUsersSaga),
  takeLatest(GET_USER, getUserSaga),
];
