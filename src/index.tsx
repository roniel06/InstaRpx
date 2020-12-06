import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import * as reducers from './ducks'
import thunk from 'redux-thunk'
import services from './services/firebase';

const store = createStore(combineReducers({
  ...reducers
}), applyMiddleware(thunk.withExtraArgument(services)));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
  ,
  document.getElementById('root')
);

reportWebVitals();
