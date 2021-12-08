import { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { CurrentUserContext } from "./Contexts/CurrentUserContext";
import UserProfiles from "./UserProfiles";





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
       {/* <Box>
          <label htmlFor="gender">Gender</label>
          <select className="form" id="gender" onChange={handleInput("gender")}>
            <option value="">Select</option>
            {users.map((gender) => (
              <option value={gender} key={gender}>
                {gender}
              </option>
            ))}
          </select>
            </Box>*/}

<Box>
          <label htmlFor="age">Age</label>
          <input
            type="age"
            className="form"
            id="age"
            value={""}
            onChange={handleInput("age")}
          />
        </Box>
        <Box>
          <label htmlFor="handicap">Handicap</label>
          <input
            type="text"
            className="form"
            id="handicap"
            value={""}
            onChange={handleInput("handicap")}
          />
        </Box>
            <Box>
          <label htmlFor="startDate">From</label>
          <input
            type="date"
            className="form"
            id="startDate"
            value={""}
            onChange={handleInput("from")}
          />
        </Box>
        <Box>
          <label htmlFor="endDate">To</label>
          <input
            type="date"
            className="to"
            id="endDate"
            value={""}
            onChange={handleInput("to")}
          />
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
