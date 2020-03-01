import { combineReducers } from 'redux';

import { Action } from './types/action';
import { user, repo } from './services';

export interface GlobalState {
  [user.NAME]: user.types.State;
  [repo.NAME]: repo.types.State;
}

const appReducer = combineReducers({
  [user.NAME]: user.reducer,
  [repo.NAME]: repo.reducer,
});

export default (state: GlobalState | undefined, action: Action) =>
  appReducer(state, action);
