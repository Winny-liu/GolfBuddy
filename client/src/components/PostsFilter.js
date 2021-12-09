import React, { useContext, useState } from "react";
import styled from "styled-components";
import dayjs from "dayjs";
import PostFilterBar from "./FilterBar";
import { PostsContext } from "./Contexts/PostsContext";

const isSameOrAfter = require("dayjs/plugin/isSameOrAfter");
const isSameOrBefore = require("dayjs/plugin/isSameOrBefore");
dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);

function PostsFilter({ visiblePost, setVisiblePost }) {
  const { posts } = useContext(PostsContext);

  const [allData, setData] = useState(posts);

  const handleFilterName = (name) => {
    const filteredData = posts.filter((post) => {
      const username = `${post.name}`;
      if (username.toLowerCase().includes(name.toLowerCase())) {
        return post;
      }
    });

    setVisiblePost(filteredData);
  };

  const handleFilterCourse = (course) => {
    const filteredData = posts.filter((post) => {
      if (course.toLowerCase().includes(post.golfCourse.toLowerCase())) {
        return post;
      }
    });

    setVisiblePost(filteredData);
  };

  const handleFilterDate = (date, field) => {
    const filteredData = posts.filter((post) => {
      if (field === "from" && dayjs(post.date).isSameOrAfter(dayjs(date))) {
        return post;
      } else if (
        field === "to" &&
        dayjs(post.date).isSameOrbefore(dayjs(date))
      ) {
        return post;
      }
    });

    setVisiblePost(filteredData);
  };

  return (
    <Container>
      <PostFilterBar
        onNameFilter={handleFilterName}
        onCourseFilter={handleFilterCourse}
        onDateFilter={handleFilterDate}
      />
    </Container>
  );
}

export default PostsFilter;

const Container = styled.div``;
