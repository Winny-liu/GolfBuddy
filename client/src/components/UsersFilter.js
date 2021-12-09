import React, { useContext, useState } from "react";
import styled from "styled-components";
import dayjs from "dayjs";
import FilterBar from "./FilterBar";
import { UsersContext } from "./Contexts/UsersContext";

const isSameOrAfter = require("dayjs/plugin/isSameOrAfter");
const isSameOrBefore = require("dayjs/plugin/isSameOrBefore");
dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);

function UsersFilter({ visibleUser, setVisibleUser }) {
  const { users } = useContext(UsersContext);

  const [allData, setData] = useState(users);

  const handleFilterName = (name) => {
    
    const filteredData = users.filter((user) => {
      const username = `${user.name}`;
      if (username.toLowerCase().includes(name.toLowerCase())) {
        return user;
      }
    });

    setVisibleUser(filteredData);
  };

  const handleFilterAge = (age) => {
    const filteredData = users.filter((user) => {
      if (user.age === age) {
        return user;
      }
    });

    setVisibleUser(filteredData);
  };

  const handleFilterGender = (gender) => {
    const filteredData = users.filter((user) => {
      return user.gender.toLowerCase() === gender.toLowerCase();
    });

    setVisibleUser(filteredData);
  };

  const handleFilterHandicap = (handicap) => {
    const filteredData = users.filter((user) => {
      if (user.handicap === handicap) {
        return user;
      }
    });

    setVisibleUser(filteredData);
  };

  const handleFilterDate = (date, field) => {
    const filteredData = users.filter((user) => {
      if (field === "from" && dayjs(user.date).isSameOrAfter(dayjs(date))) {
        return user;
      } else if (
        field === "to" &&
        dayjs(user.date).isSameOrbefore(dayjs(date))
      ) {
        return user;
      }
    });

    setVisibleUser(filteredData);
  };

  return (
    <Container>
      <FilterBar
        onNameFilter={handleFilterName}
        onGenderFilter={handleFilterGender}
        onAgeFilter={handleFilterAge}
        onHandicapFilter={handleFilterHandicap}
        onDateFilter={handleFilterDate}
      />
    </Container>
  );
}

export default UsersFilter;

const Container = styled.div``;
