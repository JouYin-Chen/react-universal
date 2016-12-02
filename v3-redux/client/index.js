import React from 'react'
import ReactDOM from 'react-dom'
//react-router
import { Router, Route, browserHistory, IndexRoute, } from 'react-router'
import createRoutes from '../modules/routes.js'

import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
//import { fromJS } from 'immutable'

// 從 server 取得傳進來的 initialState。由於從字串轉回物件，又稱為 rehydration（覆水）
const initialState = window.__PRELOADED_STATE__;
// 由於我們使用 ImmutableJS，所以需要把在 server-side dehydration（脫水）
//又在前端 rehydration（覆水）的 initialState 轉成 ImmutableJS 資料型態
//，並傳進 configureStore 建立 store
const store = configureStore(initialState);

// let reduxState = {}
// if (window.__PRELOADED_STATE__) {
//   try {
//     let plain = JSON.parse(unescape(__PRELOADED_STATE__))
//     _.each(plain, (val, key)=> {
//       reduxState[key] = Immutable.fromJS(val)
//     })
//   } catch (e) {
//   }
// }

// const store = configureStore(reduxState)
ReactDOM.render(
	<Provider store={store}>
		{createRoutes(browserHistory)}
  </Provider>
	, document.getElementById('app')
)
