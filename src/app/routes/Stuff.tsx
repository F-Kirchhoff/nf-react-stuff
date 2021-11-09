import React from 'react';
import { useParams } from 'react-router-dom';

function Stuff(): JSX.Element {
  const { item } = useParams();
  return (
    <div>
      <p> Stuff: {item}</p>
    </div>
  );
}

export default Stuff;
