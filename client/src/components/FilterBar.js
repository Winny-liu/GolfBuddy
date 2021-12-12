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
          <label htmlFor="name">Name</label>
          <input
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
          <label htmlFor="gender">Gender</label>
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
          <label htmlFor="age">Age</label>
          <input
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
          <label htmlFor="handicap">Handicap</label>
          <input
            type="text"
            className="form"
            id="handicap"
            //value={""}
            //onChange={(event)=>{handleInput( event,"handicape")}}
          />
        </Box>
        <Box>
          <label htmlFor="startDate">From</label>
          <input
            type="date"
            className="form"
            id="startDate"
            //value={""}
            //onChange={(event)=>{handleInput( event,"from")}}
          />
        </Box>
        <Box>
          <label htmlFor="endDate">To</label>
          <input
            type="date"
            className="to"
            id="endDate"
            // value={""}
            //onChange={(event)=>{handleInput( event,"to")}}
          />
        </Box>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ff6164;
  margin: 10px;
  border-radius: 20px;
  font-size: 20px;
  height: 50vh;
  width: 400px;
  color: white;
  padding: 10px;
  margin: 10px;
`;
const Box = styled.div``;
const Title = styled.div``;

export default FilterBar;
