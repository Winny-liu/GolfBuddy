import React, { useState, useContext } from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import { CurrentUserContext } from "./Contexts/CurrentUserContext";
import background2 from "../assets/background2.jpg";


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
    <>
      <Img src={background2} />
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
const Wrapper = styled.div`
  position: relative;
  top: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  background-color: #008176;

  width: 25vw;
  height: 45vh;
  margin-top: 30px;
  margin-bottom: 30px;
  border-radius: 50px;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.02),
    0 6.7px 5.3px rgba(0, 0, 0, 0.028), 0 12.5px 10px rgba(0, 0, 0, 0.035),
    0 22.3px 17.9px rgba(0, 0, 0, 0.042), 0 41.8px 33.4px rgba(0, 0, 0, 0.05),
    0 100px 80px rgba(0, 0, 0, 0.07);
  border-radius: 16px;
`;
const Title = styled.div`
  display: flex;
  justify-content: center;
  font-size: 35px;
  font-weight: bolder;
  color: white;
  margin-top:20px;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  position: relative;

  width: 250px;

  margin-top: 20px;

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
  position: relative;
  right: 33px;

  height: 40px;
  width: 300px;
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
  margin: 30px 50px 30px 50px;

  border-radius: 5px;

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
