import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import { Jotain } from './sivu1';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import {createMemoryHistory} from 'history'
import { BrowserRouter as Router } from 'react-router-dom';


const root = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>    
    <Router location={createMemoryHistory().location}>
      <App />
    </Router>
  </React.StrictMode>,
  root
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

