import React, { useContext, useState } from "react";
import styled from "styled-components";
import { COLORS } from "../constants";
import { oCurrentUserContext } from "../contexts/CurrentUserContext";
import Errr from "./Error";
import CircularProgress from "@mui/material/CircularProgress";

const TweetInput = ({ reload, setReload }) => {
  const { currentUser, status, setStatus } = useContext(CurrentUserContext);
  console.log(currentUser);
  const [post, setPost] = useState("");

  if (currentUser === null) {
    return <CircularProgress />;
  }

  const handleClickPost = (e) => {
    e.preventDefault();
    fetch("/api/tweet", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: post }),
    })
      .then((response) => response.json())
      .then((data) => {
        setStatus("idle");
        setReload(!reload);
        setPost("");
        console.log("Success:", data);
      })
      .catch((error) => {
        setStatus("error");
        console.error("Error:", error);
      });
  };

  if (status === "error") {
    return <Error />;
  } else
    return (
      <Box>
        <Form>
          <Wrapper>
            <Avatar src={currentUser.avatarSrc} />
            <TextArea
              tabIndex="1"
              wrap="hard"
              placeholder="What's happening?"
              value={post}
              onChange={(e) => {
                setPost(e.target.value);
              }}
            />
          </Wrapper>
          <CounterWrap>
            <Counter post={post}>{280 - post.length}</Counter>
            {post.length === 0 || post.length >= 281 ? (
              <Button disabled style={{ cursor: "default", opacity: "0.4" }}>
                Meow
              </Button>
            ) : (
              <Button onClick={handleClickPost}>Meow</Button>
            )}
          </CounterWrap>
        </Form>
      </Box>
    );
};

const Box = styled.div`
  border: solid 2px ${COLORS.fourth};
  border-bottom: 8px solid ${COLORS.fourth};
  padding-bottom: 10px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  border: none;
`;

const Wrapper = styled.div`
  padding: 20px;
  display: flex;
`;

const Avatar = styled.img`
  width: 50px;
  border-radius: 50px;
`;

const CounterWrap = styled.div`
  margin-left: auto;
`;

const Button = styled.button`
  background-color: ${COLORS.primary};
  cursor: pointer;
  color: white;
  border: none;
  font-weight: 800;
  border-radius: 30px;
  width: 80px;
  height: 40px;
  margin-top: 20px;
  outline: none;
`;

const Counter = styled.span`
  color: ${COLORS.sixth};
  padding-right: 20px;
  position: relative;
  font-weight: bold;
  bottom: 0px;
  margin-right: 0px;
  color: ${({ post }) => {
    if (post.length > 225 && post.length <= 280) {
      return "#FFD700";
    } else if (post.length > 280) {
      return "red";
    }
  }};
`;

const TextArea = styled.input`
  flex: 1;
  padding-left: 20px;
  border: none;
  font-size: 25px;
  width: 500px;
  height: 60px;
  background: inherit;
  color: inherit;
  resize: none;
  outline: none;
`;

export default TweetInput;
