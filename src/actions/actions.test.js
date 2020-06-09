import * as actions from './index'
import {ACTIONS} from '../constants'

describe('Action Testing', () => {

    it(`should create an action as ${ACTIONS.AUTH_USER_LOGIN}`, () => {
        const username = "ajayff4";
        const password = "1234"
        const expectedAction = {
            type: ACTIONS.AUTH_USER_LOGIN,
            payload: {
                username,
                password
            }
        }
        expect(actions.login(username,password)).toEqual(expectedAction)
    });

    it(`should create an action as ${ACTIONS.GET_ALL_LOGS}`, () => {
       const logs = []
        const expectedAction = {
            type: ACTIONS.GET_ALL_LOGS,
            payload: {
                logs
            }
        }
        expect(actions.getAllLogs(logs)).toEqual(expectedAction)
    });

    it(`should create an action as ${ACTIONS.SIGNUP}`, () => {
        const expectedAction = {
            type: ACTIONS.SIGNUP
        }
        expect(actions.signup()).toEqual(expectedAction)
    });

    it(`should create an action as ${ACTIONS.ADD_CATEGORY}`, () => {
        const expectedAction = {
            type: ACTIONS.ADD_CATEGORY
        }
        expect(actions.addCategory()).toEqual(expectedAction)
    });

    it(`should create an action as ${ACTIONS.ADD_TAG}`, () => {
        const expectedAction = {
            type: ACTIONS.ADD_TAG
        }
        expect(actions.addTag()).toEqual(expectedAction)
    });

    it(`should create an action as ${ACTIONS.ADD_LOG}`, () => {
        const expectedAction = {
            type: ACTIONS.ADD_LOG
        }
        expect(actions.addLog()).toEqual(expectedAction)
    });

    it(`should create an action as ${ACTIONS.AUTH_START}`, () => {
        const expectedAction = {
            type: ACTIONS.AUTH_START
        }
        expect(actions.authStart()).toEqual(expectedAction)
    });

    it(`should create an action as ${ACTIONS.AUTH_INITIATE_LOGOUT}`, () => {
        const expectedAction = {
            type: ACTIONS.AUTH_INITIATE_LOGOUT
        }
        expect(actions.logout()).toEqual(expectedAction)
    });

    it(`should create an action as ${ACTIONS.SET_USER_DATA}`, () => {
        const username = "ajayff4";
        const fullname = "Ajay Agrawal"
        const email = "ajayff4@gmail.com"
        const expectedAction = {
            type: ACTIONS.SET_USER_DATA,
            payload: {
                username,
                fullname,
                email
            }
        }
        expect(actions.setUserData(username,fullname,email)).toEqual(expectedAction)
    });

    it(`should create an action as ${ACTIONS.FAILED_TO_FETCH_DATA}`, () => {
        const error = "Error for testing action"
        const expectedAction = {
            type: ACTIONS.FAILED_TO_FETCH_DATA,
            payload: {
                error
            }
        }
        expect(actions.failedToFetchData(error)).toEqual(expectedAction)
    });

    it(`should create an action as ${ACTIONS.GET_ALL_CATEGORY}`, () => {
        const expectedAction = {
            type: ACTIONS.GET_ALL_CATEGORY
        }
        expect(actions.getAllCategory()).toEqual(expectedAction)
    });

    it(`should create an action as ${ACTIONS.DELETED_LOG}`, () => {
        const expectedAction = {
            type: ACTIONS.DELETED_LOG
        }
        expect(actions.deletedLog()).toEqual(expectedAction)
    });

    it(`should create an action as ${ACTIONS.COMPLETED_LOG}`, () => {
        const expectedAction = {
            type: ACTIONS.COMPLETED_LOG
        }
        expect(actions.completedLog()).toEqual(expectedAction)
    });

    it(`should create an action as ${ACTIONS.SET_COOKIE}`, () => {
        const expectedAction = {
            type: ACTIONS.SET_COOKIE
        }
        expect(actions.setCookie()).toEqual(expectedAction)
    });

    it(`should create an action as ${ACTIONS.UNSET_COOKIE}`, () => {
        const expectedAction = {
            type: ACTIONS.UNSET_COOKIE
        }
        expect(actions.unsetCookie()).toEqual(expectedAction)
    });

})