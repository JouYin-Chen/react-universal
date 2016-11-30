import React from 'react'
import { Route, IndexRoute } from 'react-router'

const NotFound = () => (<div>404 Not Found</div>)
const Root = () => (<h1>Client Root</h1>)
const A = () => (<h1>Client A</h1>)
const B = () => (<h2>Client B</h2>)

module.exports = (
	<Route path = "/" >
    <IndexRoute component = {Root} />
    <Route path = "/A" component = {A} />
    <Route path = "/B" component = {B} />
    <Route path = '*' component = {NotFound} />
  </Route>
)