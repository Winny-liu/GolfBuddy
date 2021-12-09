import React, { useContext } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { CurrentUserContext } from "./Contexts/CurrentUserContext";
import UserProfiles from "./UserProfiles";

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
  const handleUserProfilesClick = () => {
    history.push(`/users`);
  };

  const handlePostProfilesClick = () => {
    history.push(`/posts`);
  };


const {user} = useContext(CurrentUserContext)
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

        <PostProfile
                onClick={handlePostProfilesClick}
                onKeyPress={handlePostProfilesClick}
                tabIndex="0"
              >
                PostProfiles
              </PostProfile>
        <UserProfile
                onClick={handleUserProfilesClick}
                onKeyPress={handleUserProfilesClick}
                tabIndex="0"
              >
                UserProfiles
              </UserProfile>
          {user?<NewPost
            onClick={handleNewPostClick}
            onKeyPress={handleNewPostClick}
            tabIndex="0"
          >
            Post a game
          </NewPost> : (<>
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
            </>)}
          
          
        </RightSideButtons>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-shadow: 0 0 5px 0px rgb(0 0 0 / 0.5);
  background-color: #FF6164;
  border-radius: 0 0 3px 3px;
  margin: 10px;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
`;
const Title = styled.div`
color: #008176;
font-size: 40px;

`;
const HomeButton = styled.button`
  font-size: 30px;
  padding: 3px;
  border-radius: 3px;
  cursor: pointer;
  border: none;
  background-color: var(--color-moss-green);
  color: var(--color-don-juan);
  &:active {
    background-color: var(--color-tahuna-sands);
  }
`;

const RightSideButtons = styled.div`
  font-size: 30px;
  display: flex;
  align-items: center;
`;

const NewPost = styled.button`
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

const SignIn = styled.button`
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

const SignUp = styled.button`
  font-size: 30px;
  padding: 3px;
  border-radius: 3px;
  cursor: pointer;
  border: none;
  background-color: var(--color-moss-green);
  color: var(--color-don-juan);
  &:active {
    background-color: var(--color-tahuna-sands);
  }
`;

export default Header;
