import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import registerServiceWorker from './registerServiceWorker';

import RouteRoot from './router/router';

ReactDOM.render(
    <Provider store={store}>
        <RouteRoot />
    </Provider>
    , document.getElementById('root')
);
registerServiceWorker();
