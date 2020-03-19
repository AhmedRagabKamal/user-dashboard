import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Route, Switch, Redirect } from 'react-router-dom';
import ListUsers from './users/views/ListUsers';
import NotFound from './static-pages/NotFound';
import AddUser from './users/views/AddUser';
import './App.css';

function App() {
  return (
    <>
      <ToastContainer />
      <main className='container m-auto mt-2'>
        <Switch>
          <Route path='/users' exact component={ListUsers} />
          <Route path='/users/create' component={AddUser} />
          <Route path='/404' component={NotFound} />
          <Redirect exact from='/' to='/users' />
          <Redirect to='/404' />
        </Switch>
      </main>
    </>
  );
}

export default App;
