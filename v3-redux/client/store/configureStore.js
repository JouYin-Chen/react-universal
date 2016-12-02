import rootReducer from '../reducer';
import { createStore, applyMiddleware, compose } from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

const loggerMiddleware = createLogger()

const createStoreWithMiddleware = compose(
	applyMiddleware(
  	thunkMiddleware,
  	loggerMiddleware
	),
	typeof window === 'object' && 
	typeof window.devToolsExtension !== 'undefined'
  ? window.devToolsExtension()
  : f => f )(createStore)

export default function configureStore(preloadedState) {
  const store = createStoreWithMiddleware(rootReducer, preloadedState)

  // if (module.hot) {
  //   // Enable Webpack hot module replacement for reducers
  //   module.hot.accept('../reducers', () => {
  //     const nextRootReducer = require('../reducers')
  //     store.replaceReducer(nextRootReducer)
  //   })
  // }

  return store
}