import * as React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import About from 'UI/pages/About';

import Home from 'UI/pages/Home';
import Landing from 'UI/pages/Landing';
import LogIn from 'UI/pages/LogIn';
import LogOut from 'UI/pages/LogOut';
import NotFound from 'UI/pages/NotFound';
import Terms from 'UI/pages/Terms';
import Course from 'UI/pages/Course';
import Stream from 'UI/pages/Stream';

import LoggedOutRoute from './LoggedOutRoute';
import LoggedInRoute from './LoggedInRoute';

const Pages = () => {
  return (
    <Switch>
      <LoggedOutRoute path="/" exact component={Landing} />
      <LoggedOutRoute path="/about" exact component={About} />
      <LoggedOutRoute path="/log-in" exact component={LogIn} />
      <LoggedInRoute path="/log-out" exact component={LogOut} />
      <LoggedInRoute path="/home" exact component={Home} />
      <LoggedInRoute path="/course/:id" exact component={Course} />
      <LoggedInRoute path="/course/:id/:streamId" exact component={Stream} />
      <LoggedInRoute path="/terms" exact component={Terms} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Pages;
