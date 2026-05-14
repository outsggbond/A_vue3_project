//同意管理项目用户相关的
import request from '../../utils/request'
import type { loginForm, loginResponseData, userResponseData } from './type'
//统一管理接口

export const API = {
  LOGIN_URL: '/user/login',
  USERINFO_URL: '/user/Info',
} as const

export const reqLogin = (data: any) =>
  request.post<any, loginResponseData>(API.LOGIN_URL, data)

export const reqUserInfo = () =>
  request.get<any, userResponseData>(API.USERINFO_URL)
