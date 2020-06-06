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
        case ACTIONS.ADD_CATEGORY: return {
            ...state,
            logs: [...state.logs, {
                action: ACTIONS.ADD_CATEGORY,
                message: 'Added category'
            }]
        }
        case ACTIONS.ADD_TAG: return {
            ...state,
            logs: [...state.logs, {
                action: ACTIONS.ADD_TAG,
                message: 'Added tag'
            }]
        }
        case ACTIONS.ADD_LOG: return {
            ...state,
            logs: [...state.logs, {
                action: ACTIONS.ADD_LOG,
                message: 'Added log'
            }]
        }
        case ACTIONS.PROFILE_LOAD: return {
            ...state,
            logs: [...state.logs, {
                action: ACTIONS.PROFILE_LOAD,
                message: 'User profile loaded'
            }]
        }
        case ACTIONS.AUTH_INITIATE_LOGOUT: return {
            logs: [{
                action: ACTIONS.AUTH_INITIATE_LOGOUT,
                message: 'Logging out...'
            }]
        }
        default: return state
    }
}

export default historyReducer