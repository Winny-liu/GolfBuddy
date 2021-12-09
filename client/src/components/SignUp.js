import React, { useContext, useState } from "react";
import styled from "styled-components";

import { useHistory } from "react-router";
import { CurrentUserContext } from "./Contexts/CurrentUserContext";
import UserCard from "./UserCard";
import FilterBar from "./FilterBar";
import UserProfiles from "./UserProfiles";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [handicap, setHandicap] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [status, setStatus] = useState("");

  const { setUser } = useContext(CurrentUserContext);
  let history = useHistory();

  const handleSubmit = () => {
    fetch(`/api/signup/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
        age,
        gender,
        handicap,
        zipCode,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 201) {
          setUser(data.user);
          console.log(data);
          history.push(`/`);
        } else if (data.status === 400) {
          setStatus("error");
          //setErrMessage(data.message);
        }
      });
  };

  let readyToSubmit = false;

  // Data validation for the user sign-up form.
  if (
    name !== "" &&
    email !== "" &&
    password !== "" &&
    age !== "" &&
    gender !== "" &&
    handicap !== "" &&
    zipCode !== ""
  ) {
    // If the user input in the form meets all the requirements, `readyToSubmit` becomes true and the Confirm button is enabled.
    readyToSubmit = true;
  }

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

        <select
          id="gender"
          onChange={(e) => {
            setGender(e.target.value);
          }}
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

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

        <Div>
          <Button type="reset">Clear</Button>
          {readyToSubmit ? (
            <Button type="submit" onClick={handleSubmit}>
              Confirm
            </Button>
          ) : (
            <Button type="submit" onClick={handleSubmit} disabled>
              Confirm
            </Button>
          )}
        </Div>
      </Container>
      <UserCard />
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

const Div = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Button = styled.button`
  border: 1px solid;
  background-color: transparent;
  text-transform: uppercase;
  font-size: 14px;
  padding: 10px 20px;
  font-weight: 300;
  border-radius: 5px;
  height: 5vh;

  &&:hover {
    background-color: #b9e769;
    -webkit-box-shadow: 10px 10px 99px 6px rgba(185, 231, 105, 1);
    -moz-box-shadow: 10px 10px 99px 6px rgba(185, 231, 105, 1);
    box-shadow: 10px 10px 99px 6px rgba(185, 231, 105, 1);
  }
`;

export default SignUp;
