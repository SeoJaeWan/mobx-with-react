import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "mobx-react";
import CounterStore from "./stores/counter";

const counter = new CounterStore();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider counter={counter}>
    <App />
  </Provider>
);
