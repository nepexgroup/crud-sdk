// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import axios from 'axios'
import app from '@/utils/constants'

const baseURL = app.API_URL;

const httpConfig = axios.create({
    baseURL: baseURL,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
});

if (localStorage.getItem('token')) {
    const token = JSON.parse(localStorage.getItem('token'));
    httpConfig.defaults.headers['Authorization'] = `Token ${token}`
}

// request interceptor
http.interceptors.request.use((config) => {
    // store.commit('app/SET_LOADING', true);
    return config
}, (error) => {
    // store.commit('app/SET_LOADING', false);
    // Do something with request error
    return Promise.reject(error)
});


// response interceptor
http.interceptors.response.use((response) => {
    // store.commit('app/SET_LOADING', false);
    return response
}, (error) => {
    // store.commit('app/SET_LOADING', false);

    let message;
    const errorResponse = error.response;
    const status = errorResponse === undefined ? 0 : errorResponse.status;

    // Validation Error from backend
    if (status === 400 && Array.isArray(errorResponse.data)){
        message = errorResponse.data[0]
    }

    if (message === undefined){
        switch (status) {
            case  400 :
                message = 'Request error';
                break;
            case  401 :
                message = 'Unauthorized, please log in';
                break;
            case  403 :
                message = 'Access denied';
                break;
            case  404 :
                message = `Request address error: ${error.response.config.url} `;
                break;
            case  408 :
                message = 'Request timed out';
                break;
            case  500 :
                message = 'Server internal error';
                break;
            case  501 :
                message = 'Service not implemented';
                break;
            case  502 :
                message = 'Gateway error';
                break;
            case  503 :
                message = 'Service unavailable';
                break;
            case  504 :
                message = 'Gateway timeout';
                break;
            case  505 :
                message = 'HTTP version is not supported';
                break;
            default:
                break
        }
    }

    if (status === 401) {
        // store.dispatch('app/notify', ['error', message]);
        // No direct remove as per requirement
        // store.dispatch('user/removeUser');
        // router.push({name: 'Login'});
    } else if (status && message) {
        // store.dispatch('app/notify', ['error', message]);
    } else {
        if (!errorResponse.data?.non_field_errors) {
            // store.dispatch('app/notify', ['error', errorResponse.data]);
        }
    }
    // console.clear()
    return Promise.reject(error)
});

export const http = httpConfig;
