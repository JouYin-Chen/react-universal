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
import { Router, Route, IndexRoute, RouterContext, match }  from 'react-router'

/*
* React Component for Server Render
*/
const NotFound = () => (<div>404 Not Found</div>)
const Root = () => (<h1>Client Root</h1>)
const A = () => (<h1>Client A</h1>)
const B = () => (<h2>Client B</h2>)

const routes = (
	<Route path = "/" >
    <IndexRoute component = {Root} />
    <Route path = "/A" component = {A} />
    <Route path = "/B" component = {B} />
    <Route path = '*' component = {NotFound} />
  </Route>
)

function* authFail(next){
  yield next
  console.log(`[server]<--[Brower] ${this.request.path}`)
}

const renderHtml = (renderProps) => {
	return renderToString(<RouterContext {...renderProps} />)
}

function sendRenderResult(html) {
	return `<!doctype html>
		<html>
		<head><title>Universal Example</title></head>
		<body>
			<div id="app">${html}</div>
			<script> </script>
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
	//console.warn(this)
	match({
		routes: routes,
		location: this.request.url,
	}, (error, redirectLocatin, renderProps) => {
		//const appHtml = renderToString(<RouterContext {...renderProps}/>)
		this.body = sendRenderResult(renderHtml(renderProps))
	})
}

app.use(serverRenderWithRouterMiddwware)

app.listen(3030)