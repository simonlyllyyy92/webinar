import { ActionTypes } from "./actionTypes"

const INITIAL_STATE = {
  webinar_list: {
    data: {},
    loading: true,
    error: "",
  },
  register: {
    title: "Topic 1",
    id: 1,
  },
  favorite_list: {
    data: {},
    loading: true,
    error: "",
  },
}

const webinarReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.GET_POST_LIST_SUCCESS:
      return {
        ...state,
        webinar_list: {
          data: action.payload,
          loading: false,
          error: "",
        },
      }
    case ActionTypes.GET_MORE_POST_LIST_SUCCESS:
      return {
        ...state,
        webinar_list: {
          data: {
            data: [...state.webinar_list.data.data, ...action.payload.data],
            meta: action.payload.meta,
          },
          loading: false,
          error: "",
        },
      }
    case ActionTypes.STORE_TITLE_FOR_REGISTER:
      return {
        ...state,
        register: {
          title: action.payload.title,
          id: action.payload.id,
        },
      }

    case ActionTypes.GET_FAVORITE_POST_LIST_SUCCESS:
      return {
        ...state,
        favorite_list: {
          data: action.payload,
          loading: false,
          error: "",
        },
      }
    default:
      return state
  }
}

export default webinarReducer
