import axios from 'axios';
import moment from 'moment';
import { authService } from '../services';
import { history } from '../helpers';

let isFetchingToken = false;
let tokenSubscribers = [];
const { ENV } = process.env;

function subscribeTokenRefresh(cb) {
    tokenSubscribers.push(cb);
}
function onTokenRefreshed(errRefreshing, token) {
    tokenSubscribers.map((cb) => {
        return cb(errRefreshing, token);
    });
}

function forceLogout() {
    isFetchingToken = false;
    localStorage.clear();
    authService.logout();
    window.location.href = '/login';
}

function isRefreshTokenExpiring() {
    if (localStorage.getItem('loggintime')) {
        const loginTime = moment(localStorage.getItem('loggintime'));
        const now = moment();
        const expiredTime = now.diff(loginTime);
        const seconds = Math.floor(expiredTime / 1000);
        if (seconds > 14400) {
            return true;
        }
        return false;
    }
    return false;
}

const APP_ENDPOINT = axios.create({
    baseURL: ENV.API_BASE_URL,
    timeout: 9999999,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json, application/octet-stream'
    }
});

APP_ENDPOINT.interceptors.request.use(
    (config) => {
        config.headers.authorization = localStorage.getItem('authToken');
        config.headers['X-Requested-With'] = 'XMLHttpRequest';
        config.headers.Expires = '-1';
        config.headers['Cache-Control'] = 'no-cache,no-store,must-revalidate,max-age=-1,private';
        config.headers.Pragma = 'no-cache';

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

APP_ENDPOINT.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response.status === 403) {
            return forceLogout();
        }
        if (error.response.status !== 401) {
            return Promise.reject(error);
        }
        if (!isFetchingToken) {
            isFetchingToken = true;
            const refreshToken = localStorage.getItem('refreshToken');
            if (!refreshToken) {
                return forceLogout();
            }
            if (isRefreshTokenExpiring()) {
                return forceLogout();
            }
            const email = localStorage.getItem('emailId');
            authService
                .refreshToken(email, refreshToken)
                .then((newAccessToken) => {
                    const auth = newAccessToken.data.cognitoInitiateAuthResult;
                    localStorage.setItem('authToken', auth.authenticationResult.accessToken);
                    localStorage.setItem('loggintime', moment());
                    isFetchingToken = false;
                    onTokenRefreshed(null, auth.authenticationResult.accessToken);
                    tokenSubscribers = [];
                })
                .catch(() => {
                    onTokenRefreshed(new Error('Unable to refresh access token'), null);
                    tokenSubscribers = [];
                    forceLogout();
                });
        }
        const initTokenSubscriber = new Promise((resolve, reject) => {
            subscribeTokenRefresh((errRefreshing, newToken) => {
                if (errRefreshing) {
                    return reject(errRefreshing);
                }
                error.config.headers.authorization // eslint-disable-line no-param-reassign
                    = newToken;
                return resolve(axios(error.config));
            });
        });
        return initTokenSubscriber;
    }
);


export const API = {
    APP_ENDPOINT
};
