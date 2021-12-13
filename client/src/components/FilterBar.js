import { useState } from "react";
import styled from "styled-components";

const FilterBar = ({
  onGenderFilter,
  onNameFilter,
  onDateFilter,
  onHandicapFilter,
  onAgeFilter,
}) => {
  const [filters, setFilters] = useState({
    name: "",
    gender: "",
    from: "",
    to: "",
    handicap: "",
    age: "",
  });

  const handleInput = (event, field) => {
    const { value } = event.target;

    setFilters({
      ...filters,
      [field]: value,
    });

    switch (field) {
      case "name":
        onNameFilter(value);
        break;

      case "gender":
        onGenderFilter(value);
        break;
      case "age":
        onAgeFilter(value);
        break;
      case "handicap":
        onHandicapFilter(value);
        break;
      case "from":
        onDateFilter(value, "from");
        break;
      case "to":
        onDateFilter(value, "to");
        break;

      default:
        break;
    }
  };

  return (
    <Wrapper>
      <Container>
        <Title>Filters</Title>
        <Box>
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            className="form"
            id="name"
            //value={""}
            onChange={(event) => {
              handleInput(event, "name");
            }}
          />
        </Box>

        <Box>
          <Label htmlFor="gender">Gender</Label>
          <select
            id="gender"
            onChange={(event) => {
              handleInput(event, "gender");
            }}
          >
            <option>Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </Box>

        <Box>
          <Label htmlFor="age">Age</Label>
          <Input
            type="age"
            className="form"
            id="age"
            //value={""}
            onChange={(event) => {
              handleInput(event, "age");
            }}
          />
        </Box>
        <Box>
          <Label htmlFor="handicap">Handicap</Label>
          <Input
            type="text"
            className="form"
            id="handicap"
            //value={""}
            onChange={(event)=>{handleInput( event,"handicape")}}
          />
        </Box>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
const Container = styled.div`
  position: absolute;
  top: 95px;
  right: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  background-color: #008176;

  width: 20vw;
  height: 50vh;
  margin-top: 30px;
  margin-bottom: 30px;
  border-radius: 50px;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.02),
    0 6.7px 5.3px rgba(0, 0, 0, 0.028), 0 12.5px 10px rgba(0, 0, 0, 0.035),
    0 22.3px 17.9px rgba(0, 0, 0, 0.042), 0 41.8px 33.4px rgba(0, 0, 0, 0.05),
    0 100px 80px rgba(0, 0, 0, 0.07);
  border-radius: 16px;
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
  width: 200px;
`;
const Box = styled.div``;

const Label = styled.div`
  margin: 0px;
  position: relative;

  color: white;
  font-size: 20px;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  font-size: 35px;
  font-weight: bolder;
  color: white;
  margin-top: 10px;
`;

export default FilterBar;
