import React from 'react';
import { Provider } from 'react-redux';

import { store } from '../store';

import People from './screens/people';

const App = () => {
    return (
        <Provider store={store}>
            <People />
        </Provider>
    );
};

export default App;
