const route = require('koa-router')()

import koa from 'koa'
import path from 'path'
import serve from 'koa-static'
const app = new koa()

//react
import React from 'react'
import ReactDOM from 'react-dom'
import { renderToString, renderToStaticMarkup } from 'react-dom/server'
//react-router
import { Router, Route, IndexRoute, RouterContext, match, useRouterHistory }  from 'react-router'

import createRoutes from '../modules/routes.js'

//v3 redux
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'

import configureStore from '../client/store/configureStore'
import { createMemoryHistory, useQueries, createLocation } from 'history'

function* authFail(next){
  yield next
  console.log(`[server]<--[Brower] ${this.request.path}`)
}

// const renderHtml = (renderProps) => {
// 	return renderToString(<RouterContext {...renderProps} />)
// }

//Add windows.__PRELOADED_STATE to client
function sendRenderResult(html, preloadedState) {
	return `<!doctype html>
		<html>
		<head><title>Universal Example</title></head>
		<body>
			<div id="app">${html}</div>
			<script>
				window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\x3c')}
			</script>
			<script src="/dist/bundle.js"></script>
		</body>
	</html>`
}

// router
app.use(route.routes())
app.use(route.allowedMethods())
app.use(serve(path.resolve(__dirname,'../'),{
  maxage: 0
}));

//routes
app.use(authFail)
// app.use(begin)
//route.get('/', serverRenderWithRouterMiddwware)

function* serverRenderWithRouterMiddwware(next) {
	yield next

  let history = createMemoryHistory()//useRouterHistory(useQueries(createMemoryHistory))()
  // 建立一個 redux store

  const initialState = {
  	auth: {
  		count : 0
		},
	}
	let store = configureStore(initialState)

  let routes = createRoutes(history)
  let location = createLocation(this.request.url)//history.createLocation(this.request.url)
  
	// 將 HTML 和 initialState 傳到 client-side
	match({
		routes: routes,
		location: location, //this.request.url,
		}, (error, redirectLocation, renderProps) => {
			if (redirectLocation) {
				this.status = 301
      	this.body =  redirectLocation.pathname + redirectLocation.search
    	} else if (error) {
    		this.status = 500
      	this.body =  error.message
    	} else if (renderProps == null) {
    		this.status = 404
      	this.body =  'Not found'
    	} else {
    		let reqUrl = location.pathname + location.search
    		let [ getCurrentUrl, unsubscribe ] = subscribeUrl()
    		// 從建立的 redux store 中取得 initialState
				let reduxState = store.getState()
  			//let reduxState = escape(JSON.stringify(store.getState()))
  			
  			const appHtml = renderToString(
					<Provider store={store}>
						<RouterContext {...renderProps}/>
					</Provider>
				)

    		if ( getCurrentUrl() === reqUrl ) {
    			this.body = sendRenderResult(appHtml, reduxState)
          //res.render('index', {  html, scriptSrcs, reduxState, styleSrc })
        } else {
          this.status = 301
          this.body = getCurrentUrl()
        }
			}
		})
	function subscribeUrl () {
	  let currentUrl = location.pathname + location.search
	  let unsubscribe = history.listen((newLoc)=> {
	    if (newLoc.action === 'PUSH' || newLoc.action === 'REPLACE') {
	      currentUrl = newLoc.pathname + newLoc.search
	    }
	  })
	  return [
	    ()=> currentUrl,
	    unsubscribe
	  ]
	}
}

app.use(serverRenderWithRouterMiddwware)

app.listen(3030)