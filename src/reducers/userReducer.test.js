import userReducer from './userReducer'
import { ACTIONS } from '../constants'

describe('User Reducer Test', () => {

    const initialState = {
        username: '--',
        fullname: '--',
        email: '--',
        error: '--',
        loggedIn: false,
    }

    it('should return default state when empty action object is passed', () => {
        const newState = userReducer(initialState, {});
        expect(newState).toEqual(initialState);
    });

    it('should return defualt state when none matches', () => {
        const newState = userReducer(initialState, {type: 'AJAY'});
        expect(newState).toEqual(initialState);
    });

    it('should return new state if action type is FAILED_TO_FETCH_DATA', () => {
        const expectedState = {
            username: '--',
            fullname: '--',
            email: '--',
            error: 'Error message for test',
            loggedIn: false
        }

        const newState = userReducer(initialState, {
            type: ACTIONS.FAILED_TO_FETCH_DATA,
            payload: {
                error: "Error message for test"
            }
        });
        expect(newState).toEqual(expectedState);
    });

    it('should return new state if action type is SET_USER_DATA', () => {
        const expectedState = {
            username: 'ajayff4',
            fullname: 'Ajay Agrawal',
            email: 'ajayff4@gmail.com',
            error: '--',
            loggedIn: true
        }

        const newState = userReducer(initialState, {
            type: ACTIONS.SET_USER_DATA,
            payload: {
                username: 'ajayff4',
                fullname: 'Ajay Agrawal',
                email: 'ajayff4@gmail.com'
            }
        });
        expect(newState).toEqual(expectedState);
    });

    it('should return new state if action type is AUTH_INITIATE_LOGOUT', () => {
        const expectedState = {
            loggedIn: false
        }

        const newState = userReducer(initialState, {
            type: ACTIONS.AUTH_INITIATE_LOGOUT,
        });
        expect(newState).toEqual(expectedState);
    });

});