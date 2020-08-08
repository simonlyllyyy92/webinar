import { ActionTypes } from "./actionType"

export const postUserLogin = (payload) => ({
  type: ActionTypes.LOGIN_USER,
  payload,
})
