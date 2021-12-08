import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { CircularProgress } from "@mui/material";
import { UsersContext } from "./Contexts/UsersContext";


const UserProfiles = () => {
  const { users, usersStatus } = useContext(UsersContext);
  


  if (usersStatus === "loading") {
    return <CircularProgress />;
  }

  return (
    <Container>
      {users.map((user) => {
        console.log(user);
        return (
          <Wrapper key={user._id}>
            <Image src={user.avatar} />

            <Name>{user.name} </Name>
          </Wrapper>
        );
      })}
    </Container>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid;

  width: 200px;
  height: 300px;
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  width: 100vw;
`;
const Image = styled.img`
 line-height:0;

  width: 40px;
  height: auto;
 
  
`;

const Name = styled.div`
  font-size: 50px;
  text-align: center;
`;

export default UserProfiles;
