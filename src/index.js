import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const getCurrentDate = function() {
  const date = new Date();
  return date.toDateString();
}

// const greeting = React.createElement('h1',{}, 'Hello World!')
const greeting = <h1>Hello World! Today: {getCurrentDate()} </h1>;

ReactDOM.render(greeting, document.getElementById('root'));
serviceWorker.unregister();
