import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import ToggleTheme from "./utils/ToggleTheme";
import store from "./app/store";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ToggleTheme>
        <Router>
          <App />
        </Router>
      </ToggleTheme>
    </Provider>
  </React.StrictMode>
);
