import{ take, call, put} from 'redux-saga/effects'
// import { ACTIONS } from '../constants'
import * as actions from '../actions'

function* setCookieSaga() {
    yield console.log("saga on")
}

export default function* rootSaga() {
    yield take(actions.setCookie());
    yield put()
    yield call(setCookieSaga);
    yield console.log("Saga is running")
}