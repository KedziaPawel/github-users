import { call, put } from 'redux-saga/effects';

interface ApiCall {
  method: any;
  onSuccess: Function;
  onError: Function;
  payload: any;
}

export default function* apiCall({
  method,
  onSuccess,
  onError,
  payload,
}: ApiCall) {
  try {
    const { data } = yield call(method, payload);
    yield put(onSuccess(data));
  } catch (e) {
    yield put(onError(e));
  }
}
