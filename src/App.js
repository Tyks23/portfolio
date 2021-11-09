import React from 'react';

import { Home, About, Projects, InfoHarlog} from './pages';

import { Nav } from './layout';

import {
  BrowserRouter as Router,
  Switch,
  Route
  } from "react-router-dom";

function App() {
  return (
    <Router>
        <Nav />
        <Switch>
          <Route exact path='/about'>
             <About />
          </Route>
          <Route exact path='/infoharlog'>
             <InfoHarlog />
          </Route>   
          <Route exact path='/projects'>
             <Projects />
          </Route>
          <Route exact path='/'>
             <Home />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
