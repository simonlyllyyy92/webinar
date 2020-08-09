import { ActionTypes } from "./actionType"

const INITIAL_STATE = {
  loginUser: {
    data: {},
    loading: true,
    error: "",
  },
}

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.LOGIN_USER_SUCCESS:
      return {
        ...state,
        loginUser: {
          data: action.payload,
          loading: false,
          error: "",
        },
      }
    case ActionTypes.LOGOUT_USER_SUCCESS:
      return {
        ...state,
        loginUser: {
          data: {},
          loading: false,
          error: "",
        },
      }
    case ActionTypes.CLEAR_TOKEN:
      return INITIAL_STATE
    default:
      return state
  }
}

export default authReducer
