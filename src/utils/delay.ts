import { call, delay } from 'redux-saga/effects';

const MAX_DELAY = 60000;

// Use this instead of redux-saga delay.
// see: https://github.com/facebook/react-native/issues/12981
export default function* cappedDelay(time: number) {
  const endTimestamp = Date.now() + time;

  while (Date.now() < endTimestamp) {
    yield call(delay, Math.min(MAX_DELAY, time, endTimestamp - Date.now()));
  }
}
