import { createStore, compose, applyMiddleware } from 'redux'
import rootReducer from '../reducers/index'
import logger from 'redux-logger'

const store = createStore(
    rootReducer,
    compose(applyMiddleware(logger),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

export default store