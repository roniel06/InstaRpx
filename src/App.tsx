import React from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import Login from './containers/auth/Login'
import Register from './containers/auth/Register';
function App() {
  return (
    <div>
      <Route exact={true} path='/' component={Login} />
      <Route exact={true} path='/register' component={Register} />

    </div>

  );
}

export default App;
