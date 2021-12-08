import React from "react";
import ReactDOM from "react-dom";
import CurrentUserProvider from "./components/Contexts/CurrentUserContext";
import App from "./App";

import UsersProvider from "./components/Contexts/UsersContext";

ReactDOM.render(
  <CurrentUserProvider>
    <UsersProvider>
      <App />
    </UsersProvider>
  </CurrentUserProvider>,
  document.getElementById("root")
);

