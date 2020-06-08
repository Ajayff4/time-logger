import logReducer from './logReducer'
import { ACTIONS } from '../constants'

describe('Log Reducer Test', () => {

    const initialState = {
        logs: [],
        logsLoaded: false
    }

    it('should return default state when empty action object is passed', () => {
        const newState = logReducer(initialState, {});
        expect(newState).toEqual(initialState);
    });

    it('should return defualt state when none matches', () => {
        const newState = logReducer(initialState, {type: 'AJAY'});
        expect(newState).toEqual(initialState);
    });

    it('should return new state if action type is GET_ALL_LOGS', () => {
        const expectedState = {
            logs: [{
                "id": 3,
                "username": "test",
                "tag": "demo",
                "date": "2020-06-07",
                "time": "16:47:46.297",
                "duration": 0,
                "completed": false,
                "log_details": "test log made by John"
            }],
            logsLoaded: true
        }

        const newState = logReducer(initialState, {
            type: ACTIONS.GET_ALL_LOGS,
            payload: {
                logs: [{
                    "id": 3,
                    "username": "test",
                    "tag": "demo",
                    "date": "2020-06-07",
                    "time": "16:47:46.297",
                    "duration": 0,
                    "completed": false,
                    "log_details": "test log made by John"
                }]
            }
        });
        expect(newState).toEqual(expectedState);
    });

    it('should return new state if action type is AUTH_INITIATE_LOGOUT', () => {
        const expectedState = {
            logsLoaded: false
        }
        const newState = logReducer(initialState, {
            type: ACTIONS.AUTH_INITIATE_LOGOUT
        });
        expect(newState).toEqual(expectedState);
    });

});