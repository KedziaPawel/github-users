import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { composeWithDevTools as composeWithDevToolsProd } from 'redux-devtools-extension/logOnlyInProduction';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducer';

const composeEnhancers =
  process.env.NODE_ENV === 'development'
    ? composeWithDevTools
    : composeWithDevToolsProd;

const sagaMiddleware = createSagaMiddleware();
export default {
  store: createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware)),
  ),
  runSaga: sagaMiddleware.run,
};
