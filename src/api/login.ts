import fetch from '@/utils/http';

/**
 * @desc 登出
 */
export const logout = (params?: any, options?: any) => fetch.get('/login', params, options);

/**
 * @desc 登陆
 */
export const login = (params?: any, options?: any) => fetch.post('/login', params, options);
