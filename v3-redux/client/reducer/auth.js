//login reducer
import { ADD, DEL } from '../action/auth'
import {fromJS} from 'immutable'

const defaultState = {
	count : 0,
}

export default function auth(state = defaultState, action) {
	switch (action.type) {
		case ADD:
			return Object.assign({}, state, {
				count : state.count + 1
			})
		case DEL:
			return Object.assign({}, state, {
				count : state.count - 1
			})
		default:
			return state
	}
}