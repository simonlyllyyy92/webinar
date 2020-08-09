import { all } from "redux-saga/effects"

import authSaga from "./authentication/saga"
import webinarSaga from "./webinar/saga"

export default function* rootSaga() {
  try {
    yield all([...authSaga, ...webinarSaga])
  } catch (e) {
    console.log("error caught in rootsaga:", e)
  }
}
