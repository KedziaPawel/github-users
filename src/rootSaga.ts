import { all } from 'redux-saga/effects';

import { user, repo } from './services';

export default function* () {
  yield all([...user.sagas, ...repo.sagas]);
}
