import fetch from '@/utils/http';

/**
 * @desc 登出
 */
export const logout = (params?: any, options?: any) => fetch.get('/api/marketing/task/list', params, options);

/**
 * @desc 登出
 */
export const login = (params?: any, options?: any) => fetch.get('/mock/api/marketing/task/list', params, options);
