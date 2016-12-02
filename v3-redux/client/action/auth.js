//login action
import fetch from 'isomorphic-fetch'

import { hashHistory } from 'react-router'

export const ADD = 'ADD'
export const DEL = 'DEL'


export function Add(){
	return {
		type: ADD,
	}
}

export function Del(){
	return { 
		type: DEL
	}
}
