import React, { useContext, useState } from "react";
import styled from "styled-components";
import UserMap from "./UserMap";
import { useHistory } from "react-router";
import { CurrentUserContext } from "./Contexts/CurrentUserContext";
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
  const [location, setLocation] = useState(null);

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

      <Form onSubmit={handleSubmit}>
        <Wrapper3>
          <Wrapper>
            <Title>Welcome Sign Up GolfBuddy!</Title>
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

              <Select
                id="gender"
                value={gender}
                onChange={(e) => {
                  setGender(e.target.value);
                }}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </Select>

              <Input
                type="text"
                placeholder="Handicap"
                required
                value={handicap}
                onChange={(e) => {
                  setHandicap(e.target.value);
                }}
              ></Input>

             

              
                
                {readyToSubmit ? (
                  <Button type="submit">Confirm</Button>
                ) : (
                  <Button type="submit" disabled>
                    Confirm
                  </Button>
                )}
              
            </Container>
          </Wrapper>

          <Wrapper2>
          <Div>Please double click on the map to mark your location!</Div>
            <UserMap location={location} setLocation={setLocation} />
          </Wrapper2>
        </Wrapper3>
      </Form>
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
  width: 40vw;
  height: 50vh;
  margin-right: 70px;;
`;
const Wrapper3 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #008176;
  width: 70vw;
  border-radius: 10px;
  margin-top: 50px;
  
  
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 25vw;
  height: 70vh;
  border-radius: 10px
  
  
`;
const Title = styled.div`
  display: flex;
  justify-content: center;
  font-size: 25px;
  font-weight: bolder;
  color: white;
  
  margin-bottom:30px ;
`;
const Form = styled.form`
  display: flex;
  
  justify-content: center;
  
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`;

const Input = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  border: #d2d2d2 1px solid;
  border-radius: 4px;
  
  margin: 10px;
  height: 30px;
  width: 200px;

`;


const Select = styled.select`
  display: flex;
  align-items: center;
  justify-content: center;
  border: #d2d2d2 1px solid;
  border-radius: 4px;
  margin: 10px;
  height: 30px;
  width: 200px;
`;
const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 20px;
  background-color: #ff6164;
  width: 40vw;
  padding:5px;
  
`;

const Button = styled.button`
  margin-top: 30px;
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

export default SignUp;
