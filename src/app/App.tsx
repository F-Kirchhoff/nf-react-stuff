import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Stuff from './routes/Stuff';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<p>Main</p>} />
        <Route path="/about" element={<p>About</p>} />
        <Route path="/stuff">
          <Route path=":item" element={<Stuff />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
