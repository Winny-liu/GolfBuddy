import React, { useState } from "react";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import UserProfiles from "./UserProfiles";
import UserMap from "./UserMap";
import UserPosts from "./UserPosts";
import SignIn from "./SignIn";
import Filter from "./Filter";

import Header from "./Header";
function App() {
  const Homepage = () => {
    const [userPosts, setUserPosts] = useState([]);
    const [userPostsStatus, setUserPostsStatus] = useState("loading");
    const [userProfiles, setUserProfiles] = useState([]);
    const [userPostsStatus, setUsersPostsStatus] = useState("loading");

    const [start, setStart] = useState(0);

    let history = useHistory();

    useEffect(() => {
      // get all posts
      fetch(`/api/posts`)
        .then((res) => res.json())
        .then((data) => {
          setUserPosts(data.data);
          setUserPostsStatus("idle");
        });
    }, []);
    useEffect(() => {
      fetch(`/api/userposts?start=${start}&limit=6`) // to retrieve the post of the userposts above
        .then((res) => res.json())
        .then((res) => {
          setUserPosts(res.data);
        });
    }, [start]);

    useEffect(() => {
      // get all userprofiles
      fetch(`/api/users`)
        .then((res) => res.json())
        .then((data) => {
          setUserProfiles(data.data);
          setUserProfilessStatus("idle");
        });
    }, []);
    useEffect(() => {
      fetch(`/api/userprofiles?start=${start}&limit=6`) // to retrieve the post of the userposts above
        .then((res) => res.json())
        .then((res) => {
          setUserPosts(res.data);
        });
    }, [start]);

    if (userPostsStatus || userProfiles === "loading") {
      return <CircularProgress />;
    }
    return (
      <Wrapper>
        <Container>
          <Title>Looking for a game to join in?</Title>
          <Postcontainer>
            <UserPosts />
          </Postcontainer>
        </Container>
        <Container>
          <Title>Looking for a partner to play with?</Title>
          <Postcontainer>
            <UserProfiles />
          </Postcontainer>
        </Container>
      </Wrapper>
    );
  };
}

export default Homepage;

const Wrapper = styled.div``;
const Container = styled.div``;

const Title = styled.span`
  font-size: 50px;
  text-align: center;
`;

const Postcontainer = styled.div`
  border: 1px solid;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const UserProfiles = styled.div``;
