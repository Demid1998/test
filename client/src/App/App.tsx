import React from 'react';
import { Route, Routes } from 'react-router';

import Main from './MainPage';
import Layout from './Layout';
import Favorites from '../features/auth/Favorites';
import './App.css';

function App(): JSX.Element {
  


  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Main />} />
        <Route path="/fav" element={<Favorites />} />
      </Route>
    </Routes>
  );
}

export default App;
