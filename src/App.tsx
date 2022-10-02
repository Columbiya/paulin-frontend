import React from 'react';
import { Header } from './components/Header/Header';
import { Route, Routes } from 'react-router';
import { Home } from './pages/Home/Home';
import { PagesRoutes } from './routes';
import { Partners } from './pages/Partners/Partners';

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path={PagesRoutes.MAIN} element={<Home />} />
        <Route path={PagesRoutes.PARTNERS_AND_FEEDBACK} element={<Partners />} />
      </Routes>
    </div>
  );
}

export default App;
