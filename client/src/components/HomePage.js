import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { CurrentUserContext } from "./Contexts/CurrentUserContext";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const HomePage = () => {
  //const [posts, setposts] = useState([]);
  
  const [users, setUsers] = useState([]);
  const [usersStatus, setUsersStatus] = useState("loading");

  const { user } = useContext(CurrentUserContext);

  //const [start, setStart] = useState(0);

  //let history = useHistory();

  useEffect(() => {
    // get all users
    fetch(`/api/users`)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.data);
        setUsersStatus("idle");
      });
  }, []);

  return (
    <Container>
      {users.map((user) => {
        return (
          <Wrapper key={user._id}>
            <Image src={`${user.avatarUrl}`} />

            <Name>{user.name} </Name>
          </Wrapper>
        );
      })}
    </Container>
  );
};

const Wrapper = styled.div``;
const Container = styled.div`
  display: flex;
  width: 500px;
  height: 500px;
  border: 2px solid;
`;
const CategoryContainer = styled.div`
  display: flex;
  padding: 20px;
  width: 100vw;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 60px;
`;

const Name = styled.div`
  font-size: 50px;
  text-align: center;
`;

const Image = styled.div`
  width: 40vw;
  margin: auto;
  padding: 40px;
`;

export default HomePage;
