import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { CurrentUserContext } from "./Contexts/CurrentUserContext";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import UserProfiles from "./UserProfiles";
import PostProfiles from "./PostProfiles";

const HomePage = () => {
  return (
    <>
    <Bigtitle>Golf is a easy game, just not easy to play! A good Partner definitly will Help!</Bigtitle>
<Homewrapper>
    <Postswrapper>
      <PostProfiles/>
      
       </Postswrapper>

       <Userswrapper>
         <UserProfiles/>
       </Userswrapper>
       </Homewrapper>

</>
  )


}

const Bigtitle = styled.div`
font-size: 30px;
`;
const Container = styled.div`
  display: flex;
  width: 500px;
  height: 500px;
  border: 2px solid;
`;
const Postswrapper = styled.div`
  display: flex;
  width: 40vw;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  
`;

const Homewrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const Userswrapper = styled.div`
display: flex;
  width: 60vw;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  
`;

export default HomePage;
