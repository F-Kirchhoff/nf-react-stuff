import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import Stuff from './pages/Stuff/Stuff';
import SubmitPage from './pages/SubmitPage/SubmitPage';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="stuff">
          <Route path=":id" element={<Stuff />}></Route>
        </Route>
        <Route path="add" element={<SubmitPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
