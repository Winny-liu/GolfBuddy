import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { CurrentUserContext } from "./Contexts/CurrentUserContext";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import UserProfiles from "./UserProfiles";
import PostProfiles from "./PostProfiles";
import golfleft from "../assets/golfleft.jpg";

import { useHistory } from "react-router-dom";

const HomePage = () => {
  let history = useHistory();
  const handleUserProfilesClick = () => {
    history.push(`/users`);
  };

  const handlePostProfilesClick = () => {
    history.push(`/posts`);
  };

  return (
    <>
      <Container>
        <WrapperLeft>
          <Bigtitle>
            Golf is a easy game, just not easy to play! A good Partner definitly
            will Help!
          </Bigtitle>

          <UserProfile
            onClick={handleUserProfilesClick}
            onKeyPress={handleUserProfilesClick}
            tabIndex="0"
          >
            Click me to find one!
          </UserProfile>
        </WrapperLeft>

        <WrapperRight>
          <Bigtitle>Too busy to book a game? No idea where to play?</Bigtitle>

          <PostProfile
            onClick={handlePostProfilesClick}
            onKeyPress={handlePostProfilesClick}
            tabIndex="0"
          >
            Click me to find a game!
          </PostProfile>
        </WrapperRight>
      </Container>
    </>
  );
};

const Bigtitle = styled.div`
  font-size: 30px;
  padding: 40px;
`;
const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 100vw;
  height: 100vh;
  border: 2px solid;
`;
const Postswrapper = styled.div`
  display: flex;
  width: 40vw;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const WrapperLeft = styled.div`
 left: 0;
  
  background-Image:"url(${golfleft.jpg}}";
  background-size: cover;


  display: flex;
  width: 60vw;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color:green ;

  :before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
`;

const WrapperRight = styled.div`
  display: flex;
  width: 60vw;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  right: 0;
  background: url('golfright.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  :before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  transition: all var(--speed) ease-in-out;
  .hover {
  width: var(--hover-width);
  
`;
const PostProfile = styled.button`
  font-size: 30px;
  padding: 3px;
  border-radius: 10px;
  cursor: pointer;
  border: none;
  background-color: var(--color-moss-green);
  color: var(--color-don-juan);
  &:active {
    background-color: var(--color-tahuna-sands);
  }
`;
const UserProfile = styled.button`
  font-size: 30px;
  padding: 3px;
  border-radius: 10px;
  cursor: pointer;
  border: none;
  background-color: var(--color-moss-green);
  color: var(--color-don-juan);
  &:active {
    background-color: var(--color-tahuna-sands);
  }
`;

export default HomePage;
