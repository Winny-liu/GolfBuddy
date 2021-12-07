import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";

import { useHistory } from "react-router";

const NewPost = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [teeTime, setTeeTime] = useState("");

  const [golfCourse, setGolfCourse] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");

  let history = useHistory();

  const handleSubmit = () => {
    fetch(`/api/post/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        date,
        teeTime,
        golfCourse,
        description,
        email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 201) {
          setStatus("success");
          history.push(`/confirmed`);
        } else if (data.status === 400) {
          setStatus("error");
          //setErrMessage(data.message);
        }
      });
  };
  return (
    <>
      <Container>
        <Box>
          <Label for="name">Name: </Label>
          <Input
            type="text"
            placeholder="Name"
            required
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </Box>

        <Box>
          <Label for="email">Email: </Label>

          <Input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </Box>
        <Box>
          <Label for="golfCourse">Golf Course: </Label>
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
          <Label for="teeTime">TeeTime: </Label>
          <Input
            type="text"
            placeholder="TeeTime"
            required
            value={teeTime}
            onChange={(e) => {
              setTeeTime(e.target.value);
            }}
          />
        </Box>
        <Box>
          <Label for="date">Date: </Label>
          <Input
            type="text"
            placeholder="Date"
            required
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
        </Box>
        <Box>
          <Label for="description">Description: </Label>
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

        <Button type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 5px;
  border: solid var(--color-alabama-crimson);
`;

const Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  align-items: center;
`;

const Label = styled.div`
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

export default NewPost;
