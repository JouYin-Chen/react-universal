import React from 'react'
import ReactDOM from 'react-dom'
//react-router
import { Router, Route, browserHistory, IndexRoute, } from 'react-router'
import routes from '../modules/routes.js'


ReactDOM.render(
  <Router routes = {routes} history = {browserHistory} />
	, document.getElementById('app')
)
