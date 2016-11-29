import React from 'react'
import ReactDOM from 'react-dom'
//react-router
import { Router, Route, hashHistory, IndexRoute} from 'react-router'

// const NotFound = React.createClass({
// 	render() {
// 		return (
// 			<div>
// 				404
// 				Not Found
// 			</div>
// 		)
// 	}
// });

// ReactDOM.render((
//     <Router history = {hashHistory}>
//       <Route path = "/" component = {Login} >
//       	<IndexRoute component={B} />
//       </Route>
//       <Router path = '*' component = {NotFound} />
//     </Router>
// ), document.getElementById('app'))

ReactDOM.render(
	<h1>client</h1>,
	document.getElementById('app')
)