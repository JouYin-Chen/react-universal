import React from 'react'
import ReactDOM from 'react-dom'

export default class RootIndex extends React.Component {

 	componentDidMount() {
 		//console.log("componentDidMount")
 	}
 	Add = (e) => {
    e.preventDefault()
    this.props.Add()
 	}
 	Del = (e) => {
    e.preventDefault()
    this.props.Del()
 	}
	render() {
		const { count } = this.props.auth
		console.log(this.props.auth)
		return (
			<div>
			{count}
      	<button onClick={this.Add}>+</button>
	    	<button onClick={this.Del}>-</button>
			</div>
		)
	}
}