import { combineReducers } from 'redux'
import userReducer from './userReducer'
import logReducer from './logReducer';
import historyReducer from './historyReducer';

const rootReducer = combineReducers({
    user: userReducer,
    log: logReducer,
    historyLog: historyReducer
})

export default rootReducer;