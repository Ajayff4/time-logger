import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers/index'
//import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootSaga from '../saga'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(rootSaga)

export default store