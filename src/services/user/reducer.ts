import { Action } from 'types/action';

import { State } from './types';
import {
  GET_USERS,
  GET_USERS_SUCCESS,
  GET_USERS_ERROR,
  GET_USER,
  GET_USER_SUCCESS,
  GET_USER_ERROR,
  RESET,
} from './constants';

const initialState: State = {
  error: null,
  users: [],
  fetching: false,
};

export default (state = initialState, { type, payload }: Action): State => {
  switch (type) {
    case GET_USERS:
    case GET_USER:
      return {
        ...state,
        fetching: true,
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        fetching: false,
        users: [payload],
        error: null,
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        fetching: false,
        users: [...state.users, ...payload],
        error: null,
      };
    case GET_USER_ERROR:
    case GET_USERS_ERROR:
      return {
        ...state,
        fetching: false,
        error: payload.message,
      };
    case RESET:
      return initialState;
    default:
      return state;
  }
};
