import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { createBrowserHistory } from "history";
import DataEntry from '../data-entry'

import LoginPage from '../login-page'

const hist = createBrowserHistory();

export class RouteContainer extends Component {
  render() {
    const { isAuthenticate } = this.props
    return (
      <Router history={hist}>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <PrivateRoute isAuthenticate={isAuthenticate} path="/data-entry" component={DataEntry} />
          <LoginPage />
        </Switch>
      </Router>
    )
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      rest.isAuthenticate ? (
        <Component {...props} />
      ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
    }
  />
);

const mapStateToProps = (state) => ({
  isAuthenticate: state.authReducer.isAuthenticate
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(RouteContainer)
