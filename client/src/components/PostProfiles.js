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
              <Course>Course: {post.golfCourse}</Course>
            </Boxup>

            <Description>Description</Description>
            <Description>{post.description}</Description>

            <Boxdown>
              <Name>Name: {post.name} </Name>

              <Email>Email: {post.email}</Email>
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

margin-left: ;

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
  background-color: white;
`;
const Name = styled.div`
  
  
`;

const Course = styled.div`
  position: relative;
  font-size: 20px;
`;
const Email = styled.div``;
const Date = styled.div``;
const Time = styled.div``;
const Description = styled.div`
height: 150px;
`;
const Age = styled.div``;


const Wrapper1 = styled.div`
  display: flex;
  flex-direction: column;
`;
const Title = styled.div`
  display: flex;
  justify-content: right;
  font-size: 35px;
  font-weight: bolder;
  color: white;
  margin-top: 20px;
  margin-right: 140px;
  z-index: 2;
`;

const Container = styled.form`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  width: 75vw;
  margin-top: 0;
`;


const Boxup = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  top: 0px;
  height: 100px;
  background-color: #ff6164;
  bottom: 0;
  width: 100%;
  padding: 15px;
  font-size: 20px;
  font-weight: bolder;
  bottom: 0px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  
`;

const Boxdown = styled.div`
   display: flex;
  flex-direction: column;
  font-size: 25px;
  position: relative;
  

  height: 50px;
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
