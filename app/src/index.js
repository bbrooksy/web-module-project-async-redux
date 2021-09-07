import React from "react";
import ReactDOM from "react-dom";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import logger from 'redux-logger';
import Quote from './components/Quotes'
import './index.css'

import { appReducer } from "./reducers";
import thunk from "redux-thunk";

const store = createStore(appReducer, applyMiddleware(logger, thunk));

export default function App() {
  return (
    <div className="App">
      <Quote />
    </div>
  );
}


const rootElement = document.getElementById("root");
ReactDOM.render(<Provider store={store}><App /></Provider>, rootElement);