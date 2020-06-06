import { ACTIONS } from '../constants'

const initialState = {
    logs: [],
    logsLoaded: false,
    editLog: false,
    editLogId: null
}

const logReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.GET_ALL_LOGS: return {
            ...state,
            logs: action.payload.logs,
            logsLoaded: true
        }

        case ACTIONS.GET_EDIT_LOG_ID: return {
            ...state,
            editLogId: action.payload.editLogId
        }

        case ACTIONS.SET_EDIT_LOG_FLAG: return {
            ...state,
            editLog: true
        }

        case ACTIONS.UNSET_EDIT_LOG_FLAG: return {
            ...state,
            editLog: false
        }

        case ACTIONS.SET_EDIT_LOG_ID: return {
            ...state,
            editLogId: action.payload.editLogId
        }

        case ACTIONS.AUTH_INITIATE_LOGOUT: return { 
            logsLoaded: false
        }

        default: return state
    }
}

export default logReducer