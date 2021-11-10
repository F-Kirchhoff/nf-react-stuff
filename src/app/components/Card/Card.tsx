import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Tag from '../Tag/Tag';

type stuff = {
  id: number;
  name: string;
  description: string;
  categories: string[];
};

type CardProps = {
  payload: stuff;
  showDetails: boolean;
};

function Card({ payload, showDetails }: CardProps): JSX.Element {
  const { name, description, categories } = payload;
  return (
    <Card__Container>
      <Card__Title>{name}</Card__Title>
      {showDetails && (
        <div>
          <p>{description}</p>
          <Card__Categories>
            {categories.map((category) => (
              <Tag>{category}</Tag>
            ))}
          </Card__Categories>
        </div>
      )}
    </Card__Container>
  );
}

export default Card;

const Card__Container = styled.div`
  max-width: 679px;
  border-radius: 14px;
  padding: 20px;
  background-color: #f8f6f4;
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
