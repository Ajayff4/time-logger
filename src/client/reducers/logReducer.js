import { ACTIONS } from '../constants'

const initialState = {
    logsLoaded: false,
    logs: []
}

const logReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.GET_ALL_LOGS: return {
            ...state,
            logsLoaded: true,
            logs: action.payload.logs
        }
        case ACTIONS.LOGOUT: return {
            logsLoaded: false
        }
        default: return state
    }
}

export default logReducer