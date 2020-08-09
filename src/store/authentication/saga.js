import { fork, put, takeLatest, select } from "redux-saga/effects"
import { ActionTypes } from "./actionType"
import axiosBaseUrl from "../../axios/baseUrl"
import history from "../../utils/history"

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

    if (res.status === 200) {
      yield put({
        type: ActionTypes.LOGIN_USER_SUCCESS,
        payload: res.data,
      })
      history.push("/")
    }
  } catch (e) {
    console.log("login failed in saga", e)
  }
}

function* handleLogoutUser(action) {
  let token = yield select((state) => state.authReducer.loginUser.data.token)
  try {
    const res = yield axiosBaseUrl.post(
      "/auth/logout",
      {
        //...data
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    if (res.data.success) {
      yield put({ type: ActionTypes.LOGOUT_USER_SUCCESS })
      history.push("/login")
      alert("logout success!")
    }
  } catch (e) {
    alert("login expired please login again")
    yield put({ type: ActionTypes.CLEAR_TOKEN })
    history.push("/login")
    console.log(e)
  }
}

//watchers

//login
function* watchUserLogin() {
  yield takeLatest(ActionTypes.LOGIN_USER, handleLoginUser)
}
//logout
function* watchUserLogout() {
  yield takeLatest(ActionTypes.LOGOUT_USER, handleLogoutUser)
}

const sagas = [fork(watchUserLogin), fork(watchUserLogout)]

export default sagas
