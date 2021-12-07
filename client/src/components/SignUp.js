import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";

import { useHistory } from "react-router";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [handicap, setHandicap] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [status, setStatus] = useState("");

  let history = useHistory();

  const handleSubmit = () => {
    fetch(`/api/signup/`, {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
        age,
        handicap,
        zipCode,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 201) {
          setStatus("confirmed");
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
        <Input
          type="text"
          placeholder="Name"
          required
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></Input>

        <Input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></Input>

        <Input
          type="password"
          placeholder="password"
          required
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></Input>

        <Input
          type="text"
          placeholder="Age"
          required
          value={age}
          onChange={(e) => {
            setAge(e.target.value);
          }}
        ></Input>

        <Input
          type="text"
          placeholder="Gender"
          required
          value={gender}
          onChange={(e) => {
            setGender(e.target.value);
          }}
        ></Input>

        <Input
          type="text"
          placeholder="Handicap"
          required
          value={handicap}
          onChange={(e) => {
            setHandicap(e.target.value);
          }}
        ></Input>

        <Input
          type="text"
          placeholder="ZipCode"
          required
          value={zipCode}
          onChange={(e) => {
            setZipCode(e.target.value);
          }}
        ></Input>

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

export default SignUp;
