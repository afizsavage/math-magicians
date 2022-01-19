/* eslint-disable react/prefer-stateless-function */

import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/home';
import Quote from './pages/quote';
import Header from './components/header';
import CalculatorContainer from './pages/calc-cont';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/calculator">
            <CalculatorContainer />
          </Route>
          <Route path="/quote">
            <Quote />
          </Route>
        </Switch>
      </>
    );
  }
}

export default App;
