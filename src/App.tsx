import React from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import Login from './containers/auth/Login'
import Register from './containers/auth/Register';
import NewsFeed from './containers/newsFeed'
import NavBar from './components/navbar/Navbar';

function App() {
  return (
    <div>
      <Route  path='/app' component={NavBar} />
      <Route exact={true} path='/' component={Login} />
      <Route exact={true} path='/register' component={Register} />
      <Route exact={true} path='/app/newsfeed' component={NewsFeed} />

    </div>

  );
}

export default App;
