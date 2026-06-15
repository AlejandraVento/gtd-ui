import axios from 'axios';

export const BASE_URL = import.meta.env.VITE_BACKEND_URL;

const singleton = Symbol();
const singletonEnforcer = Symbol();

const defaultOptions = {
    baseURL: BASE_URL,
    withCredentials: true,
    crossDomain: true,
};

class ApiService {
    constructor(enforcer) {
        if (enforcer !== singletonEnforcer) {
            throw new Error('Cannot construct singleton');
        }

        this.session = axios.create(defaultOptions);

        this.session.interceptors.request.use((config) => {
            const token = sessionStorage.getItem('access_token');
            if (token) {
                config.headers['Authorization'] = `Bearer ${token}`;
            }
            config.params = Object.assign({}, config.params || {});

            return config;
        });

        this.session.interceptors.response.use(
            (response) => {
                return response.data;
            },
            (error) => {
                if (error?.response?.status === 401) {
                    sessionStorage.clear();
                    console.log('error 401', error);
                }
                if (
                    error?.response?.status === 403
                ) {
                    sessionStorage.clear();
                    console.log('error 403', error);
                }
                return Promise.reject(error?.response?.data?.errors);
            },
        );
    }

    static get instance() {
        if (!this[singleton]) {
            this[singleton] = new ApiService(singletonEnforcer);
        }

        return this[singleton];
    }

    get = (url, options = {}) =>
        this.session.get(url, { ...defaultOptions, ...options });
    post = (url, data, options = {}) =>
        this.session.post(url, data, { ...defaultOptions, ...options });
    put = (url, data, options = {}) =>
        this.session.put(url, data, { ...defaultOptions, ...options });
    delete = (url, options = {}) =>
        this.session.delete(url, { ...defaultOptions, ...options });
    patch = (url, data, options = {}) =>
        this.session.patch(url, data, { ...defaultOptions, ...options });
}

export default ApiService.instance;
