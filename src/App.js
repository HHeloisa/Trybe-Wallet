import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

function App() {
  return (
    <section>
      <Switch>
        <Route path="/" component={ Login } />
        <Route path="/carteira" component={ Wallet } />
      </Switch>
    </section>);
}

export default App;
