import { Route, Switch } from 'react-router-dom';
import Navbar from './navbar';

const Layout = () => (
  <>
    <Navbar />
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
