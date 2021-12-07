import { useState } from "react";
import styled from "styled-components";


const FilterBar = ({
  gender,
  onGenderFilter,
  onNameFilter,
  onEmailFilter,
  onDateFilter,
  onHandicapFilter,
  onAgeFilter,
}) => {
  const [filters, setFilters] = useState({
    name: "",
    email: "",
    gender: "",
    from: "",
    to: "",
    handicap: "",
    age: "",
  });

  const handleInput = (field) => (event) => {
    const { value } = event.target;

    setFilters({
      ...filters,
      [field]: value,
    });

    switch (field) {
      case "name":
        onNameFilter(value);
        break;

      case "email":
        onEmailFilter(value);
        break;
      case "gender":
        onGenderFilter(value);
        break;
      case "from":
        onDateFilter(value, "from");
        break;
      case "to":
        onDateFilter(value, "to");
        break;
      case "handicap":
        onHandicapFilter(value);
        break;
      case "age":
        onAgeFilter(value);
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
            value={""}
            onChange={handleInput("name")}
          />
        </Box>
        <Box>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            className="form"
            id="email"
            value={""}
            onChange={handleInput("email")}
          />
        </Box>
        <Box>
          <label htmlFor="gender">Gender</label>
          <select className="form" id="gender" onChange={handleInput("gender")}>
            <option value="">Select</option>
            {users.map((gender) => (
              <option value={gender} key={gender}>
                {gender}
              </option>
            ))}
          </select>
        </Box>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
const Container = styled.div``;
const Box = styled.div``;
const Title = styled.div``;

export default FilterBar;
