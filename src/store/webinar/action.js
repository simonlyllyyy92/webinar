import { ActionTypes } from "./actionTypes"

export const getPostList = (payload) => ({
  type: ActionTypes.GET_POST_LIST,
  payload,
})

export const getMorePostList = (payload) => ({
  type: ActionTypes.GET_MORE_POST_LIST,
  payload,
})

export const storeTitleForRegister = (payload) => ({
  type: ActionTypes.STORE_TITLE_FOR_REGISTER,
  payload,
})

export const postRegister = (payload) => ({
  type: ActionTypes.POST_REGISTER,
  payload,
})

export const getFavoritePostList = (payload) => ({
  type: ActionTypes.GET_FAVORITE_POST_LIST,
  payload,
})

export const deleteFavoritePost = (payload) => ({
  type: ActionTypes.DELETE_FAVORITE_POST,
  payload,
})
