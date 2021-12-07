import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router";




const SignIn = ({ user, setUser }) => {
  // Initial state of state variable inputData.
  const initialState = {
    email: "",
    password: "",
  };

  // This state variable will contain the user input as they complete the sign-in form. Initial state is declared above.
  const [inputData, setInputData] = useState(initialState);

  const history = useHistory();

  if(sessionStorage.getItem("signInUser")){
    console.log("signedIn");
    history.push("/");
}

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
        if (res.status === 200) {
          console.log(data);
          setUser(data);
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
            type=" email"
            placeholder="Email Address "
            name="email"
            onChange={(ev) => {
              setInputData({ ...inputData, email: ev.target.value });
            }}
          />

          <Input
            type=" password"
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  background-color: lightgray;
  width: 50vw;
  height: 60vh;
  margin-top: 30px;
  margin-bottom: 30px;
  border-radius: 50px;
`;
const Title = styled.div`
  display: flex;
  justify-content: center;
  font-size: 50px;
  font-weight: bolder;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: right;
  margin: 40px;
  position: relative;
  padding: 24px;
  background-color: white;
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
align-items:center;
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
  height: 30px;
  width: 120px;
  padding: 10px 20px;
  border-radius: 7px;
  justify-content: center;
  background: linear-gradient(
    97deg,
    rgba(22, 160, 133, 1) 0%,
    rgba(243, 199, 83, 1) 31%,
    rgba(22, 160, 133, 1) 81%
  );
  background-position: 125%;

  @keyframes shine {
    to {
      background-position: -70%;
    }
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
