import { Route, Switch } from 'react-router-dom';
import Header from './header';

const Layout = () => (
  <>
    <Header />
    <Switch>
      <Route exact path="/">
        <h1>Home</h1>
      </Route>
      <Route path="calculator">
        <h1>Home</h1>
      </Route>
      <Route exact path="quote">
        <h1>Home</h1>
      </Route>
    </Switch>
  </>
);

export default Layout;
