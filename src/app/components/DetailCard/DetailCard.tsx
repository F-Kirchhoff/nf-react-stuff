import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import type { Thing } from '../../Types/types';
import Tag from '../Tag/Tag';

type CardProps = {
  content: Thing;
};

function DetailCard({ content }: CardProps): JSX.Element {
  const { name, description, categories } = content;

  return (
    <Card__Container>
      <Card__Title>{name}</Card__Title>
      <p>{description}</p>
      <Card__Categories>
        {categories.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Card__Categories>
      <ReturnButton to="/">back</ReturnButton>
    </Card__Container>
  );
}

export default DetailCard;

const Card__Container = styled.article`
  max-width: 679px;
  position: relative;
  margin-top: 20px;
  border-radius: 14px;
  padding: 20px;
  background-color: #c2bfbc;
  color: #1d1a1a;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

const Card__Title = styled.h2`
  font-size: 1.2rem;
  margin: 0;
`;

const Card__Categories = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 0;
`;

const ReturnButton = styled(Link)`
  text-decoration: none;
  border: none;
  background-color: transparent;
  position: absolute;
  top: -32px;
  color: #000;
  opacity: 0.6;
  right: 16px;
  font-size: 1rem;
  font-family: arial;
  font-weight: bold;
  cursor: pointer;
`;
