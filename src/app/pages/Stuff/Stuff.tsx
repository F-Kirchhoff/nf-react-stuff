import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import DetailCard from '../../components/DetailCard/DetailCard';
import type { Thing } from '../../Types/types';

function Stuff(): JSX.Element {
  const [thing, setThing] = useState<Thing | null>(null);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    async function fetchThing() {
      const res = await fetch(`https://json-server.neuefische.de/stuff/${id}`);
      const fetchedThing = await res.json();
      setLoading(false);
      fetchedThing.id
        ? setThing(fetchedThing)
        : console.error('404: No Thing found under this id.');
    }

    fetchThing();
  }, []);

  return (
    <Stuff__Container>
      <h1>Stuff</h1>
      {thing ? (
        <DetailCard key={thing.id} content={thing} />
      ) : !loading ? (
        <ErrorFlag>404: not found</ErrorFlag>
      ) : (
        <></>
      )}
    </Stuff__Container>
  );
}

export default Stuff;

const Stuff__Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 60px;
`;

const ErrorFlag = styled.h2`
  font-size: 2.5rem;
  opacity: 0.6;
  background-image: url('http://source.unsplash.com/random/500x500?lost');
  width: 500px;
  height: 500px;
  padding: 20px;
  text-align: center;
  border-radius: 8px;
`;
