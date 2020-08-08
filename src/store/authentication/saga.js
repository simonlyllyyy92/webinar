import { fork, put, takeLatest, select } from "redux-saga/effects"
import { ActionTypes } from "./actionType"
import axiosBaseUrl from "../../axios/baseUrl"

//handlers
function* handleLoginUser(action) {
  // const {a, b} = action.payload
  const { email, password } = action.payload
  // const response = yield axios.get/post/...
  // let state = yield select(state => state.aaa.bbb)
  try {
    const res = yield axiosBaseUrl.post(
      "/auth/email/login",
      {
        email,
        password,
      },
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      }
    )

    if (res) {
      console.log(res)
    }
  } catch (e) {
    console.log(e)
  }
}

//watchers

function* watchUserLogin() {
  yield takeLatest(ActionTypes.LOGIN_USER, handleLoginUser)
}

const sagas = [fork(watchUserLogin)]

export default sagas
