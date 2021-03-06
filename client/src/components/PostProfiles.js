import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { CircularProgress } from "@mui/material";
import dayjs from "dayjs";
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
                    <Date>Date: {dayjs(post?.date).format("DD MMM YYYY")}</Date>
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
  position: relative;
  font-size: 20px;
  color: black;
`;

const Course = styled.div`
  position: relative;
  font-size: 18px;
  color: black;
`;
const Email = styled.div`
  position: relative;
  font-size: 15px;
`;
const Date = styled.div`
  position: relative;
  font-size: 20px;
  color: black;
`;
const Time = styled.div`
  position: relative;
  font-size: 15px;
  margin: 5px;
`;
const Description = styled.div`
  height: 150px;
  font-size: 20px;
  padding: 10px;
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

  bottom: 0;
  width: 100%;
  padding: 15px;
  font-size: 10px;
  bottom: 0px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

export default PostProfiles;
