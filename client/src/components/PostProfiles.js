import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { CircularProgress } from "@mui/material";

import PostsFilter from "./PostsFilter";

const PostProfiles = () => {
  const [postsStatus, setPostsStatus] = useState("loading");
  const [visiblePost, setVisiblePost] = useState(null);

  useEffect(() => {
    // get all posts

    fetch(`/api/posts`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setVisiblePost(data.data);
        setPostsStatus("idle");
      });
  }, []);

  if (postsStatus === "loading") {
    return <CircularProgress />;
  }

  return (
    <>
      <Wholewrap>
    <Container>
      {visiblePost &&
        visiblePost.map((post) => {
          return (
            <Wrapper key={post._id}>
              <Boxup>
                <Date>Date:{post.date}</Date>
                <Time>TeeTime: {post.teeTime}</Time>
              </Boxup>

              <Description>{post.description}</Description>

              <Boxdown>
                <Name>Name: {post.name} </Name>
                <Course>Golf Course: {post.golfCourse}</Course>

                <Email>Email: {post.email}</Email>
                <Description></Description>
              </Boxdown>
            </Wrapper>
          );
        })}
    </Container>
    <PostsFilter
    visiblePost={visiblePost}
    setVisiblePost={setVisiblePost}
    />
    </Wholewrap>
  </>
  );
};

const Wholewrap = styled.div`
  display: flex;
`;


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px;

  align-items: center;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  width: 300px;
  height: 400px;
  border-radius: 20px;
  background-color: white;
`;
const Name = styled.div`
  display: flex;
  position: relative;
  margin: 15px;
  padding-bottom: 5px;
  font-size: 20px;
  color: red;
`;

const Course = styled.div`
  position: relative;
  top: 0;

  width: 100;
  height: 100;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
`;

const Email = styled.div``;
const Date = styled.div``;
const Time = styled.div``;
const Description = styled.div``;
const Age = styled.div``;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  margin: 5%;
`;

const Boxup = styled.div`
  display: flex;
  flex-direction: column;

  position: relative;
  top: 0px;

  height: 90px;
  background-color: #b9e769;
  bottom: 0;
  width: 100%;

  padding: 15px;
  font-size: 30px;
  bottom: 0px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

const Boxdown = styled.div`
  display: flex;
  flex-direction: column;

  position: relative;
  top: 75px;

  height: 90px;
  background-color: #b9e769;
  bottom: 0;
  width: 100%;

  padding: 15px;
  font-size: 10px;
  bottom: 0px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

export default PostProfiles;
