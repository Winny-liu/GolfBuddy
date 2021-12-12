import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { CircularProgress } from "@mui/material";
import { UsersContext } from "./Contexts/UsersContext";
import golfball from "../assets/golfball.jpg";
import UsersFilter from "./UsersFilter";
//import UsersFilter from "./UsersFilter";

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
                  <Teetop></Teetop>
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
  width: 200px;
  height: 300px;
  border-radius: 20px;
  background-color: #b9e769;
`;
const Name = styled.div`
  display: flex;
  position: relative;
  margin: 15px;
  padding-bottom: 5px;
  font-size: 20px;
  color: white;
`;

const Teetop = styled.div`
  position: relative;
  top: 0;

  width: 100;
  height: 100;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  background-color: red;
`;
const Tee = styled.div`
  width: 15px;
  height: 120px;
  position: relative;
  background-color: white;
`;
const Wholewrap = styled.div`
  display: flex;
`;
const Filter = styled.div``;
const Email = styled.div``;

const Zipcode = styled.div``;
const Gender = styled.div``;
const Handicap = styled.div``;
const Age = styled.div``;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  margin: 10%;
  
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
