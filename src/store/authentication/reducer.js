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
    default:
      return state
  }
}

export default authReducer
