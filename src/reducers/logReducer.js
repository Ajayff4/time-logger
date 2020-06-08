import { ACTIONS } from '../constants'

const initialState = {
    logs: [],
    logsLoaded: false
}

const logReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.GET_ALL_LOGS: return {
            ...state,
            logs: action.payload.logs,
            logsLoaded: true
        }

        case ACTIONS.AUTH_INITIATE_LOGOUT: return { 
            logsLoaded: false
        }

        default: return state
    }
}

export default logReducer