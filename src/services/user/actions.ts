import { createAction } from 'utils/actions';

import {
  GET_USERS,
  GET_USERS_SUCCESS,
  GET_USERS_ERROR,
  GET_USER,
  GET_USER_SUCCESS,
  GET_USER_ERROR,
  RESET,
} from './constants';

export const getUsers = createAction(GET_USERS);
export const getUsersSuccess = createAction(GET_USERS_SUCCESS);
export const getUsersError = createAction(GET_USERS_ERROR);

export const getUser = createAction(GET_USER);
export const getUserSuccess = createAction(GET_USER_SUCCESS);
export const getUserError = createAction(GET_USER_ERROR);

export const reset = createAction(RESET);
