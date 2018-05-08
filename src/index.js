import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

function Welcome(props) {
  return <h1>Current Time: {props.time}</h1>;
}
function timer() {
  const element = <Welcome time = { new Date().toLocaleTimeString() } />;
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(timer, 1000)
