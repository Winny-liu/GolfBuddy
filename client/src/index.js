import React from "react";
import ReactDOM from "react-dom";
import CurrentUserProvider from "./components/Contexts/CurrentUserContext";
import App from "./App";

ReactDOM.render(
  <CurrentUserProvider>
    <App />
  </CurrentUserProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vit
