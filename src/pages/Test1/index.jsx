import React from 'react';
import { useParams } from 'react-router';

const Test1 = () => {
  const { testParam } = useParams();

  return <div>{`test1 ${testParam}`}</div>;
};

export default Test1;
