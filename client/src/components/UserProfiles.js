import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { CircularProgress } from "@mui/material";
import { UsersContext } from "./Contexts/UsersContext";

import UsersFilter from "./UsersFilter";

const UserProfiles = () => {
  const { users, usersStatus } = useContext(UsersContext);
  const [visibleUser, setVisibleUser] = useState(users);

  useEffect(() => {
    // get all users

    fetch(`/api/users`)
      .then((res) => res.json())
      .then((data) => {
        setVisibleUser(data.data);
      });
  }, []);

  if (usersStatus === "loading") {
    return <CircularProgress />;
  }

  return (
    <>
      <Wholewrap>
        <Container>
          {visibleUser &&
            visibleUser.map((user) => {
              return (
                <Wrapper key={user._id}>
                  <Name>{user.name} </Name>
                  <Img src={user.avatar} />

                  <Tee></Tee>
                  <Box>
                    <Gender>Gender: {user.gender}</Gender>
                    <Age>Age:{user.age}</Age>

                    <Handicap>Handicap: {user.handicap}</Handicap>

                    <Email>Email: {user.email}</Email>
                  </Box>
                </Wrapper>
              );
            })}
        </Container>

        <UsersFilter
          visibleUser={visibleUser}
          setVisibleUser={setVisibleUser}
        />
      </Wholewrap>
    </>
  );
};

const Img = styled.img`
  display: flex;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: white;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;

  align-items: center;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  width: 300px;
  height: 280px;
  border-radius: 20px;
  background-color: #ff6164;
`;
const Name = styled.div`
  display: flex;
  position: relative;
  margin: 5px;
  padding-bottom: 5px;
  font-size: 20px;
  color: white;
`;

const Tee = styled.div`
  width: 15px;
  height: 120px;
  position: relative;
  background-color: white;
`;
const Wholewrap = styled.div`
  display: flex;
  margin-left: ;
`;

const Email = styled.div``;
const Gender = styled.div``;
const Handicap = styled.div``;
const Age = styled.div``;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  width: 75vw;
  margin-top: 0;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  top: 0px;
  height: 90px;
  background-color: white;
  bottom: 0;
  width: 100%;
  padding: 15px;
  font-size: 10px;
  bottom: 0px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

export default UserProfiles;
