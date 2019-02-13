/** @format */

import React from 'react';
import { Provider } from 'react-redux';
import { AppRegistry } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';

import App from './App';
import { name as appName } from './app.json';
import configureStore from '@biime/store';

const { persistor, store } = configureStore();

const AppContainer = () => (
  <Provider store={store}>
    <PersistGate
      loading={null} /* render nothing while loading */
      persistor={persistor}
    >
      <App store={store} />
    </PersistGate>
  </Provider>
);

AppRegistry.registerComponent(appName, () => AppContainer);
