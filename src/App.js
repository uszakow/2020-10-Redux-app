import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Menu from './components/Menu/Menu';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import User from './components/User/User';

function App() {
  return (
    <Router>
      <Menu />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/user/:name?">
          <User />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
