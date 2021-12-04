import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import UserMap from "./UserMap";
import Filter from "./Filter";

const Header = () => {
  let history = useHistory();
  const handleHomePageClick = () => {
    history.push(`/`);
  };
  const handleSignInClick = () => {
    history.push(`/sign-in`);
  };
  const handleFilterClick = () => {
    history.push(`/filter`);
  };
  const handleUserMapClick = () => {
    history.push(`/usermap`);
  };

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
          <Filter
            onClick={handleFilterClick}
            onKeyPress={handleFilterClick}
            tabIndex="0"
          >
            Find a game or a partner
          </Filter>

          <SignIn
            onClick={handleSignInClick}
            onKeyPress={handleSignInClick}
            tabIndex="0"
          >
            Sign in
          </SignIn>
          <UserMap
            onClick={handleUserMapClick}
            onKeyPress={handleUserMapClick}
            tabIndex="0"
          >
            UserMap
          </UserMap>
        </RightSideButtons>
      </Container>
    </Wrapper>
  );
};
export default Header;
const Wrapper = styled.div`
  box-shadow: 0 0 5px 0px rgb(0 0 0 / 0.5);
  background-color: var(--color-elm);
  border-radius: 0 0 3px 3px;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
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

const SignIn = styled.button`
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

const Filter = styled.div``;
const UserMap = styled.button`
  font-size: 30px;
  margin: 0 0 0 10px;
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
