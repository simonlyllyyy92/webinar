import { all } from "redux-saga/effects"

import authSaga from "./authentication/saga"

export default function* rootSaga() {
  try {
    yield all([...authSaga])
  } catch (e) {
    console.log("error caught in rootsaga:", e)
  }
}
