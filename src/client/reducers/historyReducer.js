import { ACTIONS } from '../constants'

const initialState = {
    logs: []
}

const historyReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.LOGIN: return {
            ...state,
            logs: [...state.logs, {
                action: ACTIONS.LOGIN,
                message: 'Logging in...'
            }]
        }
        case ACTIONS.GET_ALL_LOGS: return {
            ...state,
            logs: [...state.logs, {
                action: ACTIONS.GET_ALL_LOGS,
                message: 'Getting all logs'
            }]
        }
        case ACTIONS.LOGOUT: return {
            logs: [{
                action: ACTIONS.LOGOUT,
                message: 'Logging out...'
            }]
        }
        default: return state
    }
}

export default historyReducer