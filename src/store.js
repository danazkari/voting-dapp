import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import promiseMiddleware from 'redux-promise-middleware'
import createHistory from 'history/createBrowserHistory'
import rootReducer from 'modules'
import applyCandidatesEventListeners from 'modules/candidates/candidates.event-listeners'

export const history = createHistory()

const initialState = {}
const enhancers = []
const middleware = [
  routerMiddleware(history),
  promiseMiddleware(),
]

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers
)

applyCandidatesEventListeners(store.dispatch, store.getState);

export default store
