import React, { Component } from 'react'
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import thunk from 'redux-thunk'
import rootReducer from '../../reducers'
import Geocode from "react-geocode"

import RouteContainer from './route';

Geocode.setApiKey("AIzaSyBinn5RcjH8JVr1HqX4AW-PQPi3cU-S_4E");

export default class Start extends Component {
  state = {
    store: createStore(rootReducer, applyMiddleware(thunk))
  }

  render() {
    return (
      <Provider store={this.state.store}>
        <RouteContainer />
      </Provider>
    )
  }
}
