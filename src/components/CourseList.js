/*
 * This file contains a component to display a list of courses from a course
 * data object.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled/macro';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

const CourseListList = styled.ul`
  margin: 0;
  padding-left: 10px;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
`;

const CourseItem = styled.li`
  margin-right: 20px;
  font-weight: 400;
`;

function CourseList({ term, courses }) {
  return (
    <CourseListList>
      {Object.keys(courses).map((course, i) => (
        <CourseItem key={i}>
          <FontAwesomeIcon icon={faAngleDoubleRight} /> &nbsp;
          <Link to={`/teaching/${course}-${term}`}>
            {courses[course].number} &ndash; {courses[course].title}
          </Link>
        </CourseItem>
      ))}
    </CourseListList>
  )
}

CourseList.propTypes = {
  courses: PropTypes.object.isRequired,
  term: PropTypes.string.isRequired
};

export default CourseList;
