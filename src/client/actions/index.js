import { ACTIONS } from '../constants'

export const login = (username, password) => {
    return {
        type: ACTIONS.LOGIN,
        payload: {
            username: username,
            password: password
        }
    }
}

export const logout = () => {
    return {
        type: ACTIONS.LOGOUT
    }
}

export const getAllLogs = (logs) => {
    return {
        type: ACTIONS.GET_ALL_LOGS,
        payload: {
            logs: logs
        }
    }
}

export const signup = () => {
    return {
        type: ACTIONS.SIGNUP
    }
}

export const addCategory = () => {
    return {
        type: ACTIONS.ADD_CATEGORY
    }
}

export const addTag = () => {
    return {
        type: ACTIONS.ADD_TAG
    }
}

export const addLog = () => {
    return {
        type: ACTIONS.ADD_LOG
    }
}

export const profileLoad = () => {
    return {
        type: ACTIONS.PROFILE_LOAD
    }
} 