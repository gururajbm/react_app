import { API, history } from '../helpers';

function login(email, password) {
    return API.AUTH.post('/login', { email, password })
        .then((response) => { return response; })
        .catch((error) => { return Promise.reject(error); });
}

function logout() {
    localStorage.removeItem('authToken');
    localStorage.removeItem('refreshToken');
    localStorage.clear();
}

function forgotPassword(email) {
    return API.AUTH.get('/forgot-password?email=' + email)
        .then((response) => { return response; })
        .catch((error) => { return Promise.reject(error); });
}

function changePassword(password, newPassword) {
    const requestOptions = {
        password,
        'new-password': newPassword
    };
    return API.AUTH.put('/change-password', requestOptions)
        .then((response) => { return response; })
        .catch((error) => { return Promise.reject(error); });
}

function confirmPassword(username, newPassword, resetPasswordVerificationCode) {
    const requestOptions = {
        email: username,
        'new-password': newPassword,
        'reset-password-verification-code': resetPasswordVerificationCode
    };
    return API.AUTH.put('/confirm-forgot-password', requestOptions)
        .then((response) => {
            history.push('/login');
            return response;
        })
        .catch((error) => { return Promise.reject(error); });
}

function changeEmail(email, dbvId, role) {
    const requestOptions = {
        email,
        'dbv-id': dbvId,
        role
    };
    return API.AUTH.put('/update-attributes', requestOptions)
        .then((response) => { return response; })
        .catch((error) => { return Promise.reject(error); });
}

function refreshToken(email, authRefreshToken) {
    const requestOptions = {
        email,
        'refresh-token': authRefreshToken
    };
    return API.AUTH.post('/refresh', requestOptions)
        .then((response) => { return response; })
        .catch((error) => { return Promise.reject(error); });
}

function newChallengePassword(email, newPassword, session) {
    const requestOptions = {
        email,
        'new-password': newPassword,
        session
    };
    return API.AUTH.put('/new-password-challenge', requestOptions)
        .then((response) => { return response; })
        .catch((error) => { return Promise.reject(error); });
}

function getCarouselImages() {
    return API.AUTH.get('https://public2.dreesteam.com/assets/dreesteam/carousel-images')
        .then((response) => { return response; })
        .catch((error) => { return Promise.reject(error); });
}

export const authService = {
    login,
    logout,
    forgotPassword,
    changePassword,
    confirmPassword,
    changeEmail,
    refreshToken,
    newChallengePassword,
    getCarouselImages
};
