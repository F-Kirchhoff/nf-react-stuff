import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';

function SubmitPage(): JSX.Element {
  const [categories, setCategories] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const nav = useNavigate();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    await fetch('https://json-server.neuefische.de/stuff', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        description,
        categories: categories.split(','),
      }),
    });

    nav('/');
  }

  return (
    <Form__Container>
      <Form onSubmit={handleSubmit}>
        <Form__input
          type="text"
          placeholder="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <Form__input
          type="text"
          placeholder="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <Form__input
          type="text"
          placeholder="categories (,)"
          value={categories}
          onChange={(event) => setCategories(event.target.value)}
        />
        <SubmitButton>submit</SubmitButton>
        <ReturnButton to="/">back</ReturnButton>
      </Form>
    </Form__Container>
  );
}

export default SubmitPage;

const Form__Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const Form = styled.form`
  position: relative;
  margin-top: 100px;
  padding: 20px;
  background-color: #b8babe;
  border-radius: 5px;
  display: grid;
  gap: 20px;
`;

const Form__input = styled.input`
  font-size: 20px;
  padding: 10px;
  background-color: transparent;
  border: solid 3px #8888aa;
  color: #333344;
  border-radius: 10px;
`;

const SubmitButton = styled.button`
  background-color: #1cbe88;
  border: none;
  padding: 10px;
  font-size: 20px;
  border-radius: 10px;
  font-weight: bold;
  color: #f8b7b7;
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
