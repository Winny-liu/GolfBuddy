import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { CurrentUserContext } from "./Contexts/CurrentUserContext";
import { useHistory } from "react-router";
import UserProfiles from "./UserProfiles";

//const CurrentUser = sessionStorage.getItem("signInUser");

const NewPost = () => {
  const { user, setStatus } = useContext(CurrentUserContext);

  const [teeTime, setTeeTime] = useState("");

  const [golfCourse, setGolfCourse] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [currentPost, setCurrentPost] = useState([]);

  let history = useHistory();
  console.log(user);

  const handleSubmit = (ev) => {
    ev.preventDefault();

    fetch(`/api/posts/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: user.name,
        email: user.email,
        date,
        teeTime,
        golfCourse,
        description,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 201) {
          setStatus("success");
          setCurrentPost([
            ...currentPost,
            {
              name: user.name,
              email: user.email,
              date,
              teeTime,
              golfCourse,
              description,
            },
          ]);
        } else if (data.status === 400) {
          setStatus("error");
          //setErrMessage(data.message);
        }
      });
  };

  console.log(currentPost);

  return (
    <>
      <Container onSubmit={handleSubmit}>
        <Box>
          <Label htmlFor="golfCourse">Golf Course: </Label>
          <Input
            type="text"
            placeholder="GolfCourse"
            required
            value={golfCourse}
            onChange={(e) => {
              setGolfCourse(e.target.value);
            }}
          />
        </Box>
        <Box>
          <Label htmlFor="teeTime">TeeTime: </Label>
          <Input
            type="time"
            placeholder="TeeTime"
            required
            value={teeTime}
            onChange={(e) => {
              setTeeTime(e.target.value);
            }}
          />
        </Box>
        <Box>
          <Label htmlFor="date">Date: </Label>
          <Input
            type="date"
            placeholder="Date"
            required
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
        </Box>
        <Box>
          <Label htmlFor="description">Description: </Label>
          <Input
            type="text"
            placeholder="Description"
            required
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </Box>

        <Button type="submit">Submit</Button>
      </Container>
      {currentPost.map((post) => {
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
    </>
  );
};

const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 5px;
  border: solid var(--color-alabama-crimson);
`;
const Date = styled.div``;
const Time = styled.div``;
const Name = styled.div``;
const Email = styled.div``;
const Description = styled.div``;

const Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  align-items: center;
`;

const Label = styled.label`
  margin: 20px;
`;
const Input = styled.input`
  width: 300px;
  margin-bottom: 5px;
`;

const Button = styled.button`
  margin-top: 5px;
  cursor: pointer;
  background: var(--color-alabama-crimson);
  border: none;
  color: var(--color-selective-yellow);
  border-radius: 5px;
`;
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

const Course = styled.div`
  position: relative;
  top: 0;

  width: 100;
  height: 100;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
`;

const Age = styled.div``;

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

export default NewPost;
