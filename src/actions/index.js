import { ACTIONS } from '../constants'

export const login = (username, password) => {
    return {
        type: ACTIONS.AUTH_USER_LOGIN,
        payload: {
            username: username,
            password: password
        }
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

export const getEditLogId = (logId) => {
    return {
        type: ACTIONS.GET_EDIT_LOG_ID,
        payload: {
            editLogId: logId
        }
    }
}

export const setEditLogFlag = () => {
    return {
        type: ACTIONS.SET_EDIT_LOG_FLAG
    }
}

export const unsetEditLogFlag = () => {
    return {
        type: ACTIONS.UNSET_EDIT_LOG_FLAG
    }
}

export const setEditLogId = logId => {
    return {
        type: ACTIONS.SET_EDIT_LOG_ID,
        payload: {
            editLogId: logId 
        }
    }
}

export const authStart = () => {
    return {
        type: ACTIONS.AUTH_START
    }
}

export const authSuccess = (token, username) => {
    return {
        type: ACTIONS.AUTH_SUCCESS,
        payload: {
            token: token,
            username: username
        }
    }
}

export const authFail = (error) => {
    return {
        type: ACTIONS.AUTH_FAIL,
        payload: {
            error: error
        }
    }
}

export const logoutSucceed = () => {
    return {
        type: ACTIONS.AUTH_LOGOUT
    }
}

export const logout = () => {
    return {
        type: ACTIONS.AUTH_INITIATE_LOGOUT
    }
}

export const checkAuthTimeout = (expirationTime) => {
    return {
        type: ACTIONS.AUTH_CHECK_TIMEOUT,
        payload: {
            expirationTime: expirationTime
        }
    }
}

export const setUserData = (username, fullname, email) => {
    return {
        type: ACTIONS.SET_USER_DATA,
        payload: {
            username: username,
            fullname: fullname,
            email: email
        }
    }
}

export const failedToFetchData = (error) => {
    return {
        type: ACTIONS.FAILED_TO_FETCH_DATA,
        payload: {
            error: error
        }
    }
}

export const getAllCategory = () => {
    return {
        type: ACTIONS.GET_ALL_CATEGORY
    }
}

export const deletedLog = () => {
    return {
        type: ACTIONS.DELETED_LOG
    }
}

export const completedLog = () => {
    return {
        type: ACTIONS.COMPLETED_LOG
    }
}

export const setCookie = () => {
    return {
        type: ACTIONS.SET_COOKIE
    }
}

export const unsetCookie = () => {
    return {
        type: ACTIONS.UNSET_COOKIE,
    }
}