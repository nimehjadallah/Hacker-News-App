import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from'redux';
import{Provider} from "react-redux";
import thunk from "redux-thunk";
import reducers from"./reducers/index.js";
import './index.css';
import App from './App';

let store = createStore(reducers, applyMiddleware(thunk))

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );