import { takeLatest } from 'redux-saga/effects'
import { ACTIONS } from '../constants'

let token = "W5bQ1dro6Yi9sdRm8rSY39facyEdgX5lrLN55fk0K8q1n0wSM90cji2MKt9XV715";
let d = new Date();
let seconds = 1800;
let expireAt = d.setTime(d.getDate() + seconds*1000);
let expires=new Date("Thu, 01 Jan 1970 00:00:00 UTC");

function* unsetCookieSaga() {
    expireAt = new Date();
    document.cookie = `token=${token}; expires=${expires}`;
    yield console.log("unset cookie done")
}

function* setCookieSaga(setCookieAction) {
    yield console.log("saga on")
    document.cookie = `token=${token}; expires=${expireAt}; max-age=${seconds}`;
    console.log("cookie set",setCookieAction.payload)
}

export default function* rootSaga() {
    yield takeLatest(ACTIONS.SET_COOKIE, setCookieSaga);
    yield takeLatest(ACTIONS.UNSET_COOKIE, unsetCookieSaga);
}

// let d = new Date();
// let seconds = 30;
// let expireAt = d.setTime(d.getDate() + seconds*1000);
// document.cookie = `username=${username}; expires=${expireAt}; max-age=${seconds};`;
// document.cookie = `token=${token}; expires=${expireAt}; max-age=${seconds}`;
// alert(document.cookie);
// console.log("cookie set",setCookieAction.payload)