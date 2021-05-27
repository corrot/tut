import * as React from 'react';
import { Link, useParams } from 'react-router-dom';

interface ICourseProps {
  id: string;
}

const Course = () => {
  // eslint-disable-next-line prettier/prettier
  const params = useParams<ICourseProps>();
  const {id} = params;

  const streamId = 0;

  return (
    <>
      <p>Course {id}</p>
      <Link to={`${id}/${streamId}`}>go to stream with id: 0</Link>
    </>
  );
};

export default Course;
