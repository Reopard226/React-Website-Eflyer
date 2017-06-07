import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Router, Route, IndexRedirect } from 'react-router';
import requireAuth from './require-auth';

import AppLayout from '../components/layout/AppLayout';
import BasePage from '../components/layout/BasePage';
import Home from './home/Home';
import Design from './design/Design';
import LoginRequired from './public-pages/LoginRequired';
import SessionExpired from './public-pages/SessionExpired';
import NotFound from './public-pages/NotFound';

const routes = (
  <Route>
    <Route path="/" component={AppLayout} onEnter={requireAuth}>

      {/* Default route*/}
      <IndexRedirect to="home" />

      <Route path="home" component={Home}/>
      <Route path="design" component={Design}/>

    </Route>

    <Route path="/" component={BasePage}>
      <Route path="login-required" component={LoginRequired}/>
      <Route path="session-expired" component={SessionExpired}/>

      {/* Not found handler */}
      <Route path="*" component={NotFound}/>
    </Route>
  </Route>
);

export default class Routes extends Component {
  render() {
    return (
      <Router history={this.props.history}>
        {routes}
      </Router>
    );
  }
}

Routes.propTypes = {
  history: PropTypes.object.isRequired
};