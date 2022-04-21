import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import Component1 from './App'
import Component2 from '/.App' 
import Component3 from './App'
import Component4 from './App'
import Component5 from './App'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>,
    <Component1/>,
    <Component2/>,
    <Component3/>,
    <Component4/>,
    <Component5/>


  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
