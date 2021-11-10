import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Card from './components/Card/Card';

const TESTSTUFF = {
  id: 1,
  name: "Marf's Magic Cards",
  description: 'A few decks for all the colors',
  categories: ['game', 'collectible', 'art', 'paper'],
};

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Card payload={TESTSTUFF} showDetails={true} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
