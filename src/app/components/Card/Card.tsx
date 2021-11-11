import React from 'react';
import styled from 'styled-components';
import type { Thing } from '../../Types/types';

type CardProps = {
  content: Thing;
};

function Card({ content }: CardProps): JSX.Element {
  const { name, description } = content;
  return (
    <Card__Container>
      <Card__Title>{name}</Card__Title>
      <p>{description}</p>
    </Card__Container>
  );
}

export default Card;

const Card__Container = styled.li`
  max-width: 679px;
  border-radius: 14px;
  padding: 20px;
  background-color: #c2bfbc;
  color: #1d1a1a;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

const Card__Title = styled.h2`
  font-size: 1.2rem;
`;
