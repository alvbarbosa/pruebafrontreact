import React, { Component } from 'react'
import LoginPage from '../login-page'
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import thunk from 'redux-thunk'

import rootReducer from '../../reducers'


export default class Start extends Component {
  state = {
    store: createStore(rootReducer, applyMiddleware(thunk))
  }
  render() {
    return (
      <Provider store={this.state.store}>
        <LoginPage />
      </Provider>
    )
  }
}
