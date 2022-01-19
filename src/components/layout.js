import { Route, Switch } from 'react-router-dom';
import Home from '../pages/home';
import Header from './header';

const Layout = () => (
  <>
    <Header />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="calculator">
        <h1>calc</h1>
      </Route>
      <Route exact path="quote">
        <h1>quote</h1>
      </Route>
    </Switch>
  </>
);

export default Layout;
