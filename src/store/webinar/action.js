import { ActionTypes } from "./actionTypes"

export const getPostList = (payload) => ({
  type: ActionTypes.GET_POST_LIST,
  payload,
})

export const getMorePostList = (payload) => ({
  type: ActionTypes.GET_MORE_POST_LIST,
  payload,
})
