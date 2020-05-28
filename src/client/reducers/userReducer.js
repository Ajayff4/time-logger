import { ACTIONS } from '../constants'

const initialState = {
    username: 'Johney',
    password: '0000',
    fullname: 'John Doe',
    email: 'john.doe@gmail.com',
    loggedIn: false
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.LOGIN: return {
            ...state,
            username: action.payload.username,
            password: action.payload.password,
            fullname: action.payload.fullname ? action.payload.fullname : state.fullname,
            email: action.payload.email ? action.payload.email : state.email,
            loggedIn: true
        }
        case ACTIONS.LOGOUT: return {
            loggedIn: false
        }
        default: return state
    }
}

export default userReducer;