import qs from 'qs';
import axios from 'axios';
// import { Message } from 'element-ui';

let source = axios.CancelToken.source();
const router = import('@/router');
// const isProduction = process.env.NODE_ENV === 'production';
const BASE_API = process.env.VUE_APP_BASE_API;

const service = axios.create({
  baseURL: BASE_API,
  timeout: 65000,
  withCredentials: true,
  headers: {},
});

service.interceptors.request.use(request => {
  request.cancelToken = source.token;
  return request;
});
router.then(lib => {
  lib.default.beforeEach((to, from, next) => {
    source.cancel();
    source = axios.CancelToken.source();
    next();
  });
});

service.interceptors.response.use(
  response => response,
  // error => {
  //   if (error.response && error.response.status === 401) {
  //     //
  //   } else if (error.response && error.response.status === 401) {
  //     //
  //   } else {
  //     if (location.host === '') {
  //       location.href = '';
  //     } else if (location.host === '') {
  //       location.href = '';
  //     }
  //     Message({
  //       message: '网络异常',
  //       type: 'error',
  //       duration: 5 * 1000,
  //     });
  //     return Promise.reject(error);
  //   }
  // },
);

export default {
  get(url: string, params?: any, options?: object) {
    return service.get(url, { params, ...options });
  },
  post(url: string, data?: any, options?: object) {
    return service.post(url, qs.parse(data), options); // TODO: data 统一 qs 处理？
  },
};
