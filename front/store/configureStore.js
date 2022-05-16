import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createWrapper } from 'next-redux-wrapper'; // use createWrapper from next-redux-wrapper to provide the store to all pages.
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from '../reducers';
import rootSaga from '../sagas';

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const enhancer = process.env.NODE_ENV === 'production'
    ? compose(applyMiddleware(...middlewares))
    : composeWithDevTools(
      applyMiddleware(...middlewares),
    );
  const store = createStore(reducer, enhancer);
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

const wrapper = createWrapper(configureStore, { debug: process.env.NODE_ENV === 'development' });
// configureStore: store를 만든다.
// createWrapper : store를 만드는 함수를 정의해서 넘긴다.
export default wrapper;
