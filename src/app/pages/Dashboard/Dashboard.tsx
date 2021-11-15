import React from 'react';
import styled from 'styled-components';
import Card from '../../components/Card/Card';
import type { Thing } from '../../Types/types';
import { Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

function Dashboard(): JSX.Element {
  const things = useFetch<Thing[]>('https://json-server.neuefische.de/stuff');

  return (
    <div>
      <NavContainer>
        <h1>Dashboard</h1>
        <ToAdd to="/add">Add</ToAdd>
      </NavContainer>
      <StuffList>
        {things &&
          things.map((thing) => (
            <Detail__Link key={thing.id} to={`/stuff/${thing.id}`}>
              <Card content={thing} />
            </Detail__Link>
          ))}
      </StuffList>
    </div>
  );
}

export default Dashboard;

const StuffList = styled.ul`
  list-style: none;
  display: grid;
  padding: 10px;
  grid-template-columns: repeat(auto-fill, minmax(auto, 500px));
  gap: 10px;
`;

const Detail__Link = styled(Link)`
  text-decoration: none;
`;

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

const ToAdd = styled(Link)`
  text-decoration: none;
  background-color: red;
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  padding: 10px 14px;
  border-radius: 999px;
`;
