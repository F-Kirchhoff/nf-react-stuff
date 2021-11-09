import React from 'react';
import { useParams } from 'react-router';

function Item(): JSX.Element {
  const params = useParams();
  return <p>{params.item}</p>;
}

export default Item;
