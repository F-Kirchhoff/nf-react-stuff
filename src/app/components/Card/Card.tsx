import React from 'react';
import styled from 'styled-components';
import Tag from '../Tag/Tag';

type Stuff = {
  id: number;
  name: string;
  description: string;
};

type CardProps = {
  payload: Stuff;
};

function Card({ payload }: CardProps): JSX.Element {
  const { name, description } = payload;
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

const Card__Categories = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;
