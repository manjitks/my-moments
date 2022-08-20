import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";
import { PersistGate } from 'redux-persist/integration/react'


import registerServiceWorker from "./registerServiceWorker"; 
import {store,persistor} from './store/store';
import "./index.css";
import App from "./app/App";
//import Test from './TestMock'
//import './MockServer/server';


ReactDOM.render(
  <Provider store={store}>
  <Router>
  <PersistGate persistor={persistor}>
        <App />
  </PersistGate>
  </Router>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
