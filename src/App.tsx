import React from 'react';
import { Header } from './components/Header/Header';
import { Route, Routes } from 'react-router';
import { Home } from './pages/Home/Home';
import { PagesRoutes } from './routes';
import { Partners } from './pages/Partners/Partners';
import { Footer } from './components/Footer/Footer';
import { NewsPage } from './pages/NewsPage/NewsPage';
import { NewsDetailPage } from './pages/NewsDetailPage/NewsDetailPage';

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path={PagesRoutes.MAIN} element={<Home />} />
        <Route path={PagesRoutes.PARTNERS_AND_FEEDBACK} element={<Partners />} />
        <Route path={PagesRoutes.BLOG} element={<NewsPage />} />
        <Route path={PagesRoutes.BLOG + "/:id"} element={<NewsDetailPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
