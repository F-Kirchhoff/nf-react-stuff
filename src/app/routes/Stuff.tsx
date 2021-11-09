import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

type StuffProps = {
  color: string;
};

function Stuff({ color }: StuffProps): JSX.Element {
  const { item } = useParams();
  return <StuffContainer color={color}>Stuff: {item}</StuffContainer>;
}

export default Stuff;

const StuffContainer = styled.div`
  padding: 20px;
  background-color: ${(props) => props.color};
  color: white;
`;
