import {
  getPostList,
  getMorePostList,
  storeTitleForRegister,
  postRegister,
  getFavoritePostList,
  deleteFavoritePost,
} from "../../store/webinar/action"
import { ActionTypes } from "../../store/webinar/actionTypes"

test("should setup getPostList action object", () => {
  const action = getPostList({
    per_page: 12,
    page: 1,
  })
  expect(action).toEqual({
    type: ActionTypes.GET_POST_LIST,
    payload: {
      per_page: 12,
      page: 1,
    },
  })
})

test("should setup storeTitleForRegister action object", () => {
  const action = storeTitleForRegister({
    title: "this is a demo title",
    id: "123",
  })

  expect(action).toEqual({
    type: ActionTypes.STORE_TITLE_FOR_REGISTER,
    payload: {
      title: "this is a demo title",
      id: "123",
    },
  })
})
