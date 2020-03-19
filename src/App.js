import React from 'react';
import './App.css';
import ListUsers from './users/views/ListUsers';
import { Route, Switch, Redirect } from 'react-router-dom';
import NotFound from './static-pages/NotFound';

function App() {
  return (
    <>
      <main>
        <Switch>
          <Route path='/users' component={ListUsers} />
          <Route path='/users/create' component={ListUsers} />
          <Route path='/404' component={NotFound} />
          <Redirect exact from='/' to='/users' />
          <Redirect to='/404' />
        </Switch>
      </main>
    </>
  );
}

export default App;
