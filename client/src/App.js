import React, { useState } from "react";
import styled from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import GlobalStyles from "./components/GlobalStyles";
import SignIn from "./components/SignIn";
import HomePage from "./components/HomePage";
import UserMap from "./components/UserMap";
import Header from "./components/Header";
import SignUp from "./components/SignUp";
import NewPost from "./components/NewPost";
import UserProfiles from "./components/UserProfiles";
import PostProfiles from "./components/PostProfiles";

function App() {
  const [user, setUser] = useState(null);
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Main>
          <Header />
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>

            <Route path="/sign-in">
              <SignIn user={user} setUser={setUser} />
            </Route>
            <Route exact path="/signup">
              <SignUp />
            </Route>
            <Route exact path="/newpost">
              <NewPost />
            </Route>
            <Route exact path="/users">
              <UserProfiles />
            </Route>
            <Route exact path="/posts">
              <PostProfiles />
            </Route>
            <Route exact path="/usermap">
              <UserMap />
            </Route>
           
          </Switch>
        </Main>
      </BrowserRouter>
    </>
  );
}
export default App;
const Main = styled.div``;
