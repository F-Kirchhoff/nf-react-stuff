import React, { useState } from 'react';
import { useNavigate } from 'react-router';
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
    <FormContainer>
      <SubmitForm onSubmit={handleSubmit}>
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
      </SubmitForm>
    </FormContainer>
  );
}

export default SubmitPage;

const FormContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const SubmitForm = styled.form`
  margin-top: 100px;
  padding: 20px;
  background-color: #aaaabb;
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
  background-color: red;
  border: none;
  padding: 10px;
  font-size: 20px;
  border-radius: 10px;
  font-weight: bold;
  color: #f8b7b7;
`;
