import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { StateProvider } from "./utils/StateProvider.jsx";
import reducer, { initialState } from "./utils/reducer.js";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <App />
  </StateProvider>
);
