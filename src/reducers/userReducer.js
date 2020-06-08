import { ACTIONS } from '../constants'

const initialState = {
    username: '--',
    fullname: '--',
    email: '--',
    error: '--',
    loggedIn: false,
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.SET_USER_DATA: return {
            ...state,
            username: action.payload.username,
            fullname: action.payload.fullname,
            email: action.payload.email,
            loggedIn:true
        }
        case ACTIONS.FAILED_TO_FETCH_DATA: return {
            ...state,
            error: action.payload.error
        }  
        case ACTIONS.AUTH_INITIATE_LOGOUT: return {
            loggedIn: false
        }
        default: return state
    }
}

export default userReducer;