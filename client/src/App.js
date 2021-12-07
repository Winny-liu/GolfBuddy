import React, { useState } from "react";
import styled from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import GlobalStyles from "./components/GlobalStyles";
import SignIn from "./components/SignIn";

import Header from "./components/Header";
import SignUp from "./components/SignUp";
import NewPost from "./components/NewPost";


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
              Homepage
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
            
          </Switch>
        </Main>
      </BrowserRouter>
    </>
  );
}
export default App;
const Main = styled.div``;
