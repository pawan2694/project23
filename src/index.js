// src/index.js or your main component file
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./App";
import "./index.css"; // Import your CSS file

ReactDOM.render(
 <Provider store={store}>
  <div className="app-container">
   <App />
  </div>
 </Provider>,
 document.getElementById("root")
);
