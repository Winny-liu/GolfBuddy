import { useState } from "react";
import styled from "styled-components";

const PostFilterBar = ({ onNameFilter, onDateFilter, onCourseFilter }) => {
  const [filters, setFilters] = useState({
    name: "",
    from: "",
    to: "",
    course: "",
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
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form"
            id="name"
            onChange={(event) => {
              handleInput(event, "name");
            }}
          />
        </Box>

        <Box>
          <label htmlFor="course">Golf Course</label>
          <input
            type="text"
            className="form"
            id="course"
            onChange={(event) => {
              handleInput(event, "course");
            }}
          />
        </Box>

        <Box>
          <label htmlFor="startDate">From</label>
          <input
            type="date"
            className="form"
            id="startDate"
            onChange={(event) => {
              handleInput(event, "from");
            }}
          />
        </Box>
        <Box>
          <label htmlFor="endDate">To</label>
          <input
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
const Container = styled.div``;
const Box = styled.div``;
const Title = styled.div``;

export default PostFilterBar;
