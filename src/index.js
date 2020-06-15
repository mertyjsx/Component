import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Upload from "./components/upload"
import C from "./components/componentpage"
import App from './App';
import * as serviceWorker from './serviceWorker';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Route exact path="/" component={App}/>
    <Route path="/upload" component={Upload}/>
    <Route path="/components" component={C}/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
