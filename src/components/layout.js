import { Route, Switch } from 'react-router-dom';

import CalculatorContainer from '../pages/calc-cont';
import Home from '../pages/home';
import Quote from '../pages/quote';
import Header from './header';

const Layout = () => (
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

export default Layout;
