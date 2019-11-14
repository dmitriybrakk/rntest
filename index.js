import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { name as appName } from './app.json';
import { store } from './store';
import AppRouter from './src';

const App = () => (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

AppRegistry.registerComponent(appName, () => App);
