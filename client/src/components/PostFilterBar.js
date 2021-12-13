import { Input } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";

const PostFilterBar = ({ onNameFilter, onDateFilter, onCourseFilter }) => {
  const [filters, setFilters] = useState({
    name: "",
    from: "",
    to: "",
    course: "",
    date: "",
  });

  const handleInput = (event, field) => {
    const { value } = event.target;
    console.log(value);

    setFilters({
      ...filters,
      [field]: value,
    });

    switch (field) {
      case "name":
        onNameFilter(value);
        break;

      case "course":
        onCourseFilter(value);
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
            onChange={(event) => {
              handleInput(event, "name");
            }}
          />
        </Box>

        <Box>
          <Label htmlFor="course">Golf Course</Label>
          <Input
            type="text"
            className="form"
            id="course"
            onChange={(event) => {
              handleInput(event, "course");
            }}
          />
        </Box>

        <Box>
          <Label htmlFor="startDate">From</Label>
          <Input
            type="date"
            className="form"
            id="startDate"
            onChange={(event) => {
              handleInput(event, "from");
            }}
          />
        </Box>
        <Box>
          <Label htmlFor="endDate">To</Label>
          <Input
            type="date"
            className="to"
            id="endDate"
            onChange={(event) => {
              handleInput(event, "to");
            }}
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

const Box = styled.div``;

const Title = styled.div`
  display: flex;
  justify-content: center;
  font-size: 35px;
  font-weight: bolder;
  color: white;
  margin-top: 10px;
`;
const Label = styled.div`
  margin: 0px;
  position: relative;

  color: white;
  font-size: 20px;
`;

export default PostFilterBar;
