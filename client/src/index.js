import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";

import { Provider } from "react-redux";
import store from "./redux/store";

import { loadUser } from "./redux/actions/authActions";
store.dispatch(loadUser());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
