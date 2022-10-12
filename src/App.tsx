import React, { useEffect } from 'react';
import { Header } from './components/Header/Header';
import { Route, Routes } from 'react-router';
import { Home } from './pages/Home/Home';
import { PagesRoutes } from './routes';
import { Partners } from './pages/Partners/Partners';
import { Footer } from './components/Footer/Footer';
import { NewsPage } from './pages/NewsPage/NewsPage';
import { NewsDetailPage } from './pages/NewsDetailPage/NewsDetailPage';
import { BusinessConsulting } from './pages/BusinessConsulting/BusinessConsulting';
import { AuthPage } from './pages/AuthPage/AuthPage';
import { AdminPanel } from './pages/AdminPanel/AdminPanel';
import { Methods, useHttp } from './hooks/useHttp';
import { authStore } from './store/authStore';
import { getAuthToken } from './helpers/getAuthToken';
import { Preloader } from './components/Preloader/Preloader';
import AOS from 'aos'
import 'aos/dist/aos.css';

const access_token = getAuthToken()

function App() {
  const [isAuthorized, authLoading, error] = useHttp<boolean>(
    {link: '/auth', periodic: true, method: Methods.PUT, useAuth: false, store: authStore, headers: {Authorization: `Bearer ${access_token}`}}
  )

  useEffect(() => {
    if (!authLoading && isAuthorized) {
      authStore.item = isAuthorized
    }
    else {
      authStore.item = false
    }
  }, [authLoading])

  useEffect(() => {
    AOS.init({
      delay: 5000,
      duration: 900,
      offset: 70
    })
  }, [])

  if (authLoading) {
    return <Preloader />
  }

  if (error) {
    console.log(error)
  }

  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path={PagesRoutes.MAIN} element={<Home />} />
        <Route path={PagesRoutes.PARTNERS_AND_FEEDBACK} element={<Partners />} />
        <Route path={PagesRoutes.BLOG} element={<NewsPage />} />
        <Route path={PagesRoutes.BLOG + "/:id"} element={<NewsDetailPage />} />
        <Route path={PagesRoutes.BUSINESS_CONSULTING} element={<BusinessConsulting />} />
        <Route path={PagesRoutes.AUTH} element={<AuthPage />} />
        <Route path={PagesRoutes.ADMIN_PANEL} element={<AdminPanel />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
