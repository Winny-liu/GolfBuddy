import React from "react";
import ReactDOM from "react-dom";
import CurrentUserProvider from "./components/Contexts/CurrentUserContext";
import App from "./App";
import PostsProvider from "./components/Contexts/PostsContext";
import UsersProvider from "./components/Contexts/UsersContext";

ReactDOM.render(
  <CurrentUserProvider>
    <UsersProvider>
      <PostsProvider>
      
        <App />
        </PostsProvider>
      
    </UsersProvider>
  </CurrentUserProvider>,
  document.getElementById("root")
);
