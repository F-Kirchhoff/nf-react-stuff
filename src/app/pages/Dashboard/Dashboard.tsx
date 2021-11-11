import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from '../../components/Card/Card';

type Thing = {
  id: number;
  name: string;
  description: string;
  categories: string[];
};

function Dashboard(): JSX.Element {
  const [things, setThings] = useState<Thing[] | null>(null);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('https://json-server.neuefische.de/stuff');
      const data = await res.json();
      setThings(data);
    }
    fetchData();
  });

  return (
    <div>
      <h1>Dashboard</h1>
      <StuffList>
        {things &&
          things.map((thing) => <Card key={thing.id} content={thing} />)}
      </StuffList>
    </div>
  );
}

export default Dashboard;

const StuffList = styled.ul`
  list-style: none;
  display: grid;
  padding: 0;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  gap: 10px;
`;
