import { Action } from 'types/action';

import { State } from './types';
import {
  GET_REPOS,
  GET_REPOS_SUCCESS,
  GET_REPOS_ERROR,
  RESET,
} from './constants';

const initialState: State = {
  error: null,
  repos: [],
  fetching: false,
};

export default (state = initialState, { type, payload }: Action): State => {
  switch (type) {
    case GET_REPOS:
      return {
        ...state,
        fetching: true,
      };
    case GET_REPOS_SUCCESS:
      return {
        ...state,
        fetching: false,
        repos: payload,
        error: null,
      };
    case GET_REPOS_ERROR:
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
