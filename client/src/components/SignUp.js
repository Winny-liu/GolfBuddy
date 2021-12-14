import React, { useContext, useState } from "react";
import styled from "styled-components";
import UserMap from "./UserMap";
import { useHistory } from "react-router";
import { CurrentUserContext } from "./Contexts/CurrentUserContext";
import PostFilterBar from "./PostFilterBar";
import UserProfiles from "./UserProfiles";
import background2 from "../assets/background2.jpg";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [handicap, setHandicap] = useState("");
  // const [zipCode, setZipCode] = useState("");
  const [status, setStatus] = useState("");
  const { setUser } = useContext(CurrentUserContext);
  const [location, setLocation] = useState([]);

  let history = useHistory();

  const handleSubmit = (ev) => {
    ev.preventDefault();

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
        location,
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
    location !== ""
  ) {
    // If the user input in the form meets all the requirements, `readyToSubmit` becomes true and the Confirm button is enabled.
    readyToSubmit = true;
  }

  return (
    <>
      <Img src={background2} />
      <Wrapper3>
        <Wrapper>
          <Title>Sign Up</Title>
          <Form onClick={handleSubmit}>
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

              {/*<Input
                type="text"
                placeholder="Location"
                required
                value={location}
                onChange={(e) => {
                  setZipCode(e.target.value);
                }}
              ></Input>*/}

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
            </Container>
          </Form>
        </Wrapper>
        <Wrapper2>
          <UserMap />
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
const Wrapper2 = styled.div`
  display: block;
  margin: 50px;
  border: 2px solid;
  width: 50vw;
  height: 50vh;
`;
const Wrapper3 = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
`;

const Wrapper = styled.div`
  position: relative;
  top: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #008176;

  width: 25vw;
  height: 80vh;
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
  margin-top: 10px;
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

const Container = styled.div`
  display: flex;
  flex-direction: column;
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

const Div = styled.div`
  display: flex;
  justify-content: space-evenly;
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

export default SignUp;
