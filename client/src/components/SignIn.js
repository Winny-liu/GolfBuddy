import React, { useState, useContext } from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import { CurrentUserContext } from "./Contexts/CurrentUserContext";

const SignIn = () => {
  const { setUser } = useContext(CurrentUserContext);
  // Initial state of state variable inputData.
  const initialState = {
    email: "",
    password: "",
  };

  // This state variable will contain the user input as they complete the sign-in form. Initial state is declared above.
  const [inputData, setInputData] = useState(initialState);

  const history = useHistory();

  //if(sessionStorage.getItem("signInUser")){
  // console.log("signedIn");
  //history.push("/");
  //}

  // This function will be executed when the user has completed the form and clicked the Confirm button.
  const handleClick = (ev) => {
    ev.preventDefault();

    // The data to be sent to the backend is the user input from the form.
    const data = {
      email: inputData.email,
      password: inputData.password,
    };

    // Send user information to the back end.
    fetch("/api/signin", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          console.log(data);
          setUser(res.data);
          history.push("/");
        } else {
          alert("email address or password is incorrect.");
        }
      });
  };

  let readyToSubmit = false;

  // Data validation for the user sign-in form.
  if (inputData.email !== "" && inputData.password !== "") {
    // If the user input in the form meets all the requirements, `readyToSubmit` becomes true and the Confirm button is enabled.
    readyToSubmit = true;
  }

  return (
    <Wrapper>
      <Title>Sign In</Title>

      <Form onSubmit={handleClick}>
        <Container>
          <Input
            type="email"
            placeholder="Email Address "
            name="email"
            onChange={(ev) => {
              setInputData({ ...inputData, email: ev.target.value });
            }}
          />

          <Input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(ev) => {
              setInputData({ ...inputData, password: ev.target.value });
            }}
          />
        </Container>
        <Div>
          <Button type="reset">Clear</Button>
          {readyToSubmit ? (
            <Button type="submit">Confirm</Button>
          ) : (
            <Button type="submit" disabled>
              Confirm
            </Button>
          )}
        </Div>
      </Form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  top: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  background-color: #b9e769;
  width: 35vw;
  height: 50vh;
  margin-top: 30px;
  margin-bottom: 30px;
  border-radius: 50px;
`;
const Title = styled.div`
  display: flex;
  justify-content: center;
  font-size: 50px;
  font-weight: bolder;
  color: white;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: right;
  margin: 40px;
  position: relative;
  padding: 24px;
  background-color: #e1eec7;
  width: 450px;
  padding: 24px;
  margin-top: 32px;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.02),
    0 6.7px 5.3px rgba(0, 0, 0, 0.028), 0 12.5px 10px rgba(0, 0, 0, 0.035),
    0 22.3px 17.9px rgba(0, 0, 0, 0.042), 0 41.8px 33.4px rgba(0, 0, 0, 0.05),
    0 100px 80px rgba(0, 0, 0, 0.07);
  border-radius: 16px;
  font-size: 15px;
`;
const Input = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  border: #d2d2d2 1px solid;
  border-radius: 4px;
  margin: 10px;

  padding: 15px;
  height: 30px;
  width: 380px;
`;

const Button = styled.button`
  display: flex;
  text-align: center;
  align-items: center;
  height: 20px;
  width: 100px;
  padding: 10px 20px;
  border: 1px solid #008176;
  background-color: transparent;
  text-transform: uppercase;
  font-size: 14px;

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

const Div = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export default SignIn;
