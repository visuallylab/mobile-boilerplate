import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import reducers from '@projectName/reducers';

import sagas from '../sagas';

const persistConfig = {
  storage,
  timeout: 10000,
  key: 'root',
};

const initialState = {};
const persistedReducer = persistReducer(persistConfig, reducers);
const sagaMiddleware = createSagaMiddleware();

export default () => {
  const store = createStore(
    persistedReducer,
    initialState,
    applyMiddleware(logger, sagaMiddleware),
  );
  sagaMiddleware.run(sagas);
  const persistor = persistStore(store);
  return {
    store,
    persistor,
  };
};
