import { ActionTypes } from "./actionType"

export const postUserLogin = (payload) => ({
  type: ActionTypes.LOGIN_USER,
  payload,
})

export const postUserLogOut = () => ({
  type: ActionTypes.LOGOUT_USER,
})

export const clearToken = () => ({
  type: ActionTypes.CLEAR_TOKEN,
})
