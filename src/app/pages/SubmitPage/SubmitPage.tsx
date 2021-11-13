import React, { useState } from 'react';
import { useNavigate } from 'react-router';

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
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="text"
          placeholder="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <input
          type="text"
          placeholder="categories (,)"
          value={categories}
          onChange={(event) => setCategories(event.target.value)}
        />
        <button>submit</button>
      </form>
    </div>
  );
}

export default SubmitPage;
