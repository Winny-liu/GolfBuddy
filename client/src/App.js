import React, { useState } from "react";
import styled from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import UserPosts from "./UserPosts";
import UserProfiles from "./UserProfiles";
import UserForm from "./UserForm";
import UserMap from "./UserMap";
import Homepage from "./Homepage";
import SignIn from "./SignIn";
import Filter from "./Filter";
//import Confirmation from "./Confirmation";
import Header from "./Header";
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
              <Homepage />
            </Route>
            <Route path="/usermap">
              <UserMap />
            </Route>
            <Route path="/sign-in">
              <SignIn user={user} setUser={setUser} />
            </Route>
            <Route exact path="/post">
              <Post />
            </Route>
            <Route exact path="/usersposts">
              <UserPosts />
            </Route>
            <Route path="/userform">
              <UserForm />
            </Route>
            <Route path="/userprofiles">
              <UserProfiles />
            </Route>
            <Route path="/filter">
              <Filter />
            </Route>
            <Route path="/confirmed">
              <Confirmation />
            </Route>
          </Switch>
          <Footer />
        </Main>
      </BrowserRouter>
    </>
  );
}
export default App;
const Main = styled.div``;
