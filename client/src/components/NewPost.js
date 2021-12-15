import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { CurrentUserContext } from "./Contexts/CurrentUserContext";
import { useHistory } from "react-router";
import UserProfiles from "./UserProfiles";
import background3 from "../assets/background3.jpg";
import dayjs from "dayjs";

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
          setDate("");
          setTeeTime("");
          setGolfCourse("");
          setDescription("");
        } else if (data.status === 400) {
          setStatus("error");
          //setErrMessage(data.message);
        }
      });
  };

  console.log(currentPost);

  return (
    <>
      <Img src={background3} />
      <Wrapper3>
        <Wrapper1>
          <Container onSubmit={handleSubmit}>
            <Title>New Post</Title>
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
              <Textarea
                type="text area"
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
        </Wrapper1>
        <Wrapper2>
          {currentPost.map((post) => {
            return (
              <Wholewrap>
                <Wrapper key={post._id}>
                  <Boxup>
                    <Date>Date: {dayjs(post?.date).format("DD MMM YYYY")}</Date>
                    <Time>TeeTime: {post.teeTime}</Time>
                    <Course>Golf Course: {post.golfCourse}</Course>
                  </Boxup>

                  <Div>Description</Div>
                  <Description>{post.description}</Description>

                  <Boxdown>
                    <Name>Name: {post.name} </Name>

                    <Email>Email: {post.email}</Email>
                  </Boxdown>
                </Wrapper>
              </Wholewrap>
            );
          })}
        </Wrapper2>
      </Wrapper3>
    </>
  );
};

const Img = styled.img`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  z-index: -1;
`;
const Wrapper3 = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;
const Wrapper1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const Wrapper2 = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
  position: relative;
  width: 70vw;
  flex-direction: row; ;
`;
const Title = styled.div`
  font-size: 35px;
  font-weight: bolder;
  color: white;
  margin: 15px;
`;

const Container = styled.form`
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #008176;
  padding-top: 10px;
  width: 25vw;
  height: 80vh;
  border-radius: 50px;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.02),
    0 6.7px 5.3px rgba(0, 0, 0, 0.028), 0 12.5px 10px rgba(0, 0, 0, 0.035),
    0 22.3px 17.9px rgba(0, 0, 0, 0.042), 0 41.8px 33.4px rgba(0, 0, 0, 0.05),
    0 100px 80px rgba(0, 0, 0, 0.07);
  border-radius: 16px;
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
const Name = styled.div`
  position: relative;
  font-size: 15px;
  color: black;
`;
const Email = styled.div`
  position: relative;
  font-size: 15px;
`;
const Div = styled.div`
  display: flex;
  justify-content: right;
  font-size: 20px;
  font-weight: bolder;
  margin-bottom: 10px;
`;

const Description = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 150px;
  width: 200px;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: right;
  align-items: center;
`;

const Label = styled.label`
  margin: 0px;
  position: relative;
  left: -120px;
  color: white;
  font-size: 20px;
`;
const Input = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  border: #d2d2d2 1px solid;
  border-radius: 4px;
  margin: 10px;
  position: relative;
  right: 0px;
  height: 40px;
  width: 300px;
  font-size: 20px;
`;
const Textarea = styled.textarea`
  border: #d2d2d2 1px solid;
  border-radius: 4px;
  margin: 10px;
  for
  rows:"3"
  right: 0px;
  height: 80px;
  width: 300px;
  font-size:20px;
`;

const Button = styled.button`
  margin: 10px;
  font-size: 20px;
  padding: 5px;
  display: flex;
  text-align: center;
  align-items: center;
  border: 1px solid #008176;
  background-color: #ff6164;
  position: relative;
  border-radius: 5px;

  &&:hover {
    background-color: #b9e769;
    -webkit-box-shadow: 10px 10px 99px 6px rgba(185, 231, 105, 1);
    -moz-box-shadow: 10px 10px 99px 6px rgba(185, 231, 105, 1);
    box-shadow: 10px 10px 99px 6px rgba(185, 231, 105, 1);
  }
`;
const Wholewrap = styled.div`
  display: flex;
  flex-direction: row;
  width: 400px;
  margin-top: 0;
  flex-wrap: wrap;
  align-items: left;
  
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  width: 250px;
  height: 300px;
  border-radius: 20px;
  background-color: white;
`;

const Course = styled.div`
  position: relative;
  font-size: 20px;
  color: black;
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
  padding: 20px;
  font-size: 25px;
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

export default NewPost;
