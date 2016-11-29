const route = require('koa-router')()

import koa from 'koa'
import path from 'path'
import serve from 'koa-static'
const app =  module.exports = koa()

import { match } from 'react-router'

import React from 'react'
import ReactDOM from 'react-dom'
import { renderToString, renderToStaticMarkup } from 'react-dom/server'

//react render
const ReactComponent = () => (<h1>client</h1>)
const html = renderToString(<ReactComponent />)

function* authFail(next){
  //console.log('authFail')
  yield next
  console.log(`[server]<--[Brower] ${this.request.path}`)
}

function* begin(next) {
	//console.log('getLogin')
	yield next
	this.body = `<!doctype html>
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
route.get('/', begin)
app.listen(3030)