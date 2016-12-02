import React from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Add, Del } from '../action/auth'
import RootIndex from '../components/rootindex'

//let store = createStore(todoApp)
function mapStateToProps(state){
  return { auth: state.auth }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({ Add, Del } , dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(RootIndex);