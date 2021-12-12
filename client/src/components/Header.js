import React, { useContext } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { CurrentUserContext } from "./Contexts/CurrentUserContext";

import UserMap from "./UserMap";

const Header = () => {
  let history = useHistory();
  const handleHomePageClick = () => {
    history.push(`/`);
  };
  const handleSignInClick = () => {
    history.push(`/sign-in`);
  };
  const handleSignUpClick = () => {
    history.push(`/signup`);
  };

  const handleNewPostClick = () => {
    history.push(`/newpost`);
  };

  const { user } = useContext(CurrentUserContext);
  return (
    <Wrapper>
      <Container>
        <HomeButton
          onClick={handleHomePageClick}
          onKeyPress={handleHomePageClick}
          tabIndex="0"
        >
          Home
        </HomeButton>
        <Title>GolfBuddy</Title>

        <RightSideButtons>
          {user ? (
            <NewPost
              onClick={handleNewPostClick}
              onKeyPress={handleNewPostClick}
              tabIndex="0"
            >
              Post a game
            </NewPost>
          ) : (
            <>
              <SignUp
                onClick={handleSignUpClick}
                onKeyPress={handleSignUpClick}
                tabIndex="0"
              >
                Sign up
              </SignUp>
              <SignIn
                onClick={handleSignInClick}
                onKeyPress={handleSignInClick}
                tabIndex="0"
              >
                Sign in
              </SignIn>
            </>
          )}
        </RightSideButtons>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-shadow: 0 0 5px 0px rgb(0 0 0 / 0.5);

  border-radius: 0 0 3px 3px;
  margin: 10px;
  border-radius: 20px;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
`;
const Title = styled.div`

  font-size: 10rem;
  text-align: center;


  color: black;
  font-size: 40px;
  font-weight: 800;
`;
const HomeButton = styled.button`
  margin: 10px;
  font-size: 20px;
  padding: 5px;
  border-radius: 10px;
  cursor: pointer;
  border: none;
  color: var(--color-don-juan);
  &:active {
    background-color: #ff6164;
  }
`;

const RightSideButtons = styled.div`
  font-size: 20px;
  display: flex;
  align-items: center;
`;

const NewPost = styled.button`
  font-size: 20px;
  padding: 3px;
  border-radius: 10px;
  cursor: pointer;
  border: none;
  background-color: var(--color-moss-green);
  color: var(--color-don-juan);
  &:active {
    background-color: #ff6164;
  }
`;

const SignIn = styled.button`
 margin: 10px;
  font-size: 20px;
  padding: 5px;
  border-radius: 10px;
  cursor: pointer;
  border: none;
  color: var(--color-don-juan);
  &:active {
    background-color: #ff6164;
  }
`;

const SignUp = styled.button`
 margin: 10px;
  font-size: 20px;
  padding: 5px;
  border-radius: 10px;
  cursor: pointer;
  border: none;
  color: var(--color-don-juan);
  &:active {
    background-color: #ff6164;
  }
`;

export default Header;
