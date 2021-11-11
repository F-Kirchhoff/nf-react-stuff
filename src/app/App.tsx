import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import Stuff from './pages/Stuff/Stuff';

// const TESTTHING = {
//   id: 1,
//   name: "Marf's Magic Cards",
//   description: 'A few decks for all the colors',
//   categories: ['game', 'collectible', 'art', 'paper'],
// };

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="stuff">
          <Route path=":id" element={<Stuff />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
