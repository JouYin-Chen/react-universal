import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

const NotFound = () => (<div>404 Not Found</div>)
const Root = () => (<h1>Client Root</h1>)
const A = () => (<h1>Client A</h1>)
const B = () => (<h2>Client B</h2>)
import RootIndex from '../client/containers/rootindex'

export default function(history) {
  return (
    <Router history={history}>
			<Route path = "/" >
		    <IndexRoute component = {RootIndex} />
		    <Route path = "/A" component = {A} />
		    <Route path = "/B" component = {B} />
		    <Route path = '*' component = {NotFound} />
		  </Route>
	  </Router>
	)
}