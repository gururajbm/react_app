import { API } from './api_helper';

const buildQueryParam = (params) => {
    const esc = encodeURIComponent;
    return Object.keys(params)
        .map((k) => {
            if (params[k] === '') {
                return '';
            }
            return esc(k) + '=' + esc(params[k]);
        })
        .join('&');
};

export const service = {
    buildQueryParam
};
