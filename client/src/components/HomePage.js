import React from "react";
import styled from "styled-components";
import { CurrentUserContext } from "./Contexts/CurrentUserContext";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import UserProfiles from "./UserProfiles";
import PostProfiles from "./PostProfiles";
import background from "../assets/background.jpg";
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
      <Img src={background} />
      <Container>
        <WrapperLeft>
          <Bigtitle>
            <Div> Golf is a easy game, </Div>
            <Div>just not easy to play! </Div>
            <Div> A good Partner definitly will Help!</Div>
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
          <Bigtitle>
            <Div> Too busy to book a game? </Div>
            <Div> No idea where to play? </Div>
          </Bigtitle>

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
const Img = styled.img`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  z-index: -1;
  filter: grayscale(0.3);
`;
const Div = styled.div`
  color: white;
  margin: 10px;
  font-weight: 600;
  font-size: 30px;
`;

const Bigtitle = styled.div`

display: flex;
flex-direction: column;
  font-size: 25px;
  padding: 20px;
  color: pink;
  width:500px;
  height: 200px;
  justify-content: center;
  align-items: center;
  background-color: #FF6164 opacity: 0.4;
`;
const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100vw;
  height: 100vh;
`;

const WrapperLeft = styled.div`
  justify-content: center;
  align-items: center;
  height: 300px;
  border: 2px solid rgba(255, 255, 255, 0.5);
  margin: 200px;
  display: flex;
  flex-direction: column;
  width: 50vw;
  flex-wrap: wrap;
`;

const WrapperRight = styled.div`
  justify-content: center;
  align-items: center;
  height: 300px;
  border: 2px solid rgba(255, 255, 255, 0.5);
  margin: 200px;
  display: flex;
  flex-direction: column;
  width: 50vw;

  flex-wrap: wrap;
`;
const PostProfile = styled.button`
  border: 2px solid white;
  font-size: 30px;
  padding: 3px;
  border-radius: 10px;
`;
const UserProfile = styled.button`
  border: 2px solid white;
  font-size: 30px;
  padding: 3px;
  border-radius: 10px;
`;

export default HomePage;
