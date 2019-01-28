import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';
const loggerMiddleware = createLogger();

export const store = createStore(
    rootReducer,
    {
        auth: { authenticated: localStorage.getItem('authToken') }
    },
    applyMiddleware(
         thunkMiddleware,
         loggerMiddleware
    )
);
