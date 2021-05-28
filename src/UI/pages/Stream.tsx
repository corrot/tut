import * as React from 'react';
import { useParams } from 'react-router-dom';
import Video from 'lib/OpenVidu';

interface IStreamProps {
  id: string;
  streamId: string;
}

const Stream = () => {
  // eslint-disable-next-line prettier/prettier
  const params = useParams<IStreamProps>();
  const {id, streamId} = params;

  return (
    <>
      <p>Course {id}</p>
      <p>Stream {streamId}</p>

      <div><Video /></div>
    </>
  );
};

export default Stream;
