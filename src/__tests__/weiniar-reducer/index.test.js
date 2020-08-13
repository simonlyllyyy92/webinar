import webinarReducer from "../../store/webinar/reducer"
import { ActionTypes } from "../../store/webinar/actionTypes"
import { currentState as defaultState } from "../../defaultState"

test("should setup default filter values", () => {
  const state = webinarReducer(undefined, { type: "@@INIT" })
  expect(state).toEqual(defaultState)
})

test("should store post list when success", () => {
  const state = webinarReducer(undefined, {
    type: ActionTypes.GET_POST_LIST_SUCCESS,
    payload: { data: ["topic 1", "topic 2"] },
  })
  expect(state.webinar_list).toEqual({
    data: {
      data: ["topic 1", "topic 2"],
    },
    loading: false,
    error: "",
  })
})

test("should store more post list to redux", () => {
  const currentState = {
    ...defaultState,
    webinar_list: {
      data: {
        data: ["topic 1", "topic 2"],
      },
      loading: true,
      error: "",
    },
  }

  const action = {
    type: ActionTypes.GET_MORE_POST_LIST_SUCCESS,
    payload: {
      data: ["topic 3", "topic 4"],
      meta: { link: "this is the link" },
    },
  }

  const state = webinarReducer(currentState, action)
  expect(state.webinar_list).toEqual({
    data: {
      data: ["topic 1", "topic 2", "topic 3", "topic 4"],
      meta: { link: "this is the link" },
    },
    loading: false,
    error: "",
  })
})
