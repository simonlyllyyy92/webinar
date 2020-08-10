import { fork, put, takeLatest, select } from "redux-saga/effects"
import { ActionTypes } from "./actionTypes"
import axiosBaseUrl from "../../axios/baseUrl"
import history from "../../utils/history"

//utils
import { objToQueryString } from "../utils"

function* handleGetPostList(action) {
  const queryParams = objToQueryString(action.payload)
  try {
    const res = yield axiosBaseUrl.get("/posts?" + queryParams)

    if (res.status === 200) {
      yield put({
        type: ActionTypes.GET_POST_LIST_SUCCESS,
        payload: res.data, //res.data = {data:[...], meta}
      })
    }
  } catch (e) {
    console.log(e)
  }
}

function* handleGetMorePostList(action) {
  try {
    const res = yield axiosBaseUrl.get(`${action.payload}`)

    if (res.status === 200) {
      yield put({
        type: ActionTypes.GET_MORE_POST_LIST_SUCCESS,
        payload: res.data, //res.data = {data:[...], meta}
      })
    }
  } catch (e) {
    console.log(e)
  }
}

function* handlePostRegister(action) {
  let token = yield select((state) => state.authReducer.loginUser.data.token)
  try {
    const res = yield axiosBaseUrl.post(
      "/favourites",
      {
        //body
        ids: [action.payload],
        model: "post",
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    console.log(res)
    if (res.status === 200) {
      alert("regiester succeed !")
      history.push("/registerd")
    }
  } catch (e) {
    console.log(e)
  }
}

//get list
function* watchGetPostList() {
  yield takeLatest(ActionTypes.GET_POST_LIST, handleGetPostList)
}

//get more post list
function* watchGetMorePostList() {
  yield takeLatest(ActionTypes.GET_MORE_POST_LIST, handleGetMorePostList)
}

//post register
function* watchPostRegister() {
  yield takeLatest(ActionTypes.POST_REGISTER, handlePostRegister)
}

const sagas = [
  fork(watchGetPostList),
  fork(watchGetMorePostList),
  fork(watchPostRegister),
]

export default sagas
