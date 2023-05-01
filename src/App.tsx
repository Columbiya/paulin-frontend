import React, { useEffect, useState } from 'react'
import AOS from 'aos'

import { Route, Routes } from 'react-router'
import { PagesRoutes } from 'routes'

import { Methods, useHttp } from 'hooks/useHttp'
import { authStore } from 'store/authStore'
import { getAuthToken } from 'helpers/getAuthToken'

import { Home } from 'pages/Home/Home'
import { Partners } from 'pages/Partners/Partners'
import { NewsPage } from 'pages/NewsPage/NewsPage'
import { NewsDetailPage } from 'pages/NewsDetailPage/NewsDetailPage'
import { BusinessConsulting } from 'pages/BusinessConsulting/BusinessConsulting'
import { AuthPage } from 'pages/AuthPage/AuthPage'
import { AdminPanel } from 'pages/AdminPanel/AdminPanel'
import { AuditPage } from 'pages/AuditPage/AuditPage'

import { Header } from 'components/Header/Header'
import { Footer } from 'components/Footer/Footer'
import { Preloader } from 'components/Preloader/Preloader'
import { Popup } from 'components/Popup/Popup'
import { RequestSection } from 'components/RequestSection/RequestSection'

import 'aos/dist/aos.css'
import './App.scss'

const access_token = getAuthToken()

function App() {
  const [isAuthorized, authLoading, error] = useHttp<boolean>({
    link: '/auth',
    periodic: true,
    method: Methods.PUT,
    useAuth: false,
    store: authStore,
    headers: { Authorization: `Bearer ${access_token}` },
  })
  const [isPopupActive, setActive] = useState(false)

  useEffect(() => {
    if (!authLoading && isAuthorized) {
      authStore.item = isAuthorized
    } else {
      authStore.item = false
    }
  }, [authLoading])

  useEffect(() => {
    AOS.init({
      delay: 5000,
      duration: 900,
      offset: 70,
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

      {isPopupActive && (
        <Popup isWhite isWide onHide={() => setActive(false)}>
          <RequestSection isPopup onHide={() => setActive(false)} />
        </Popup>
      )}

      <div id="app">
        <Routes>
          <Route
            path={PagesRoutes.MAIN}
            element={<Home setActive={setActive} />}
          />
          <Route
            path={PagesRoutes.PARTNERS_AND_FEEDBACK}
            element={<Partners />}
          />
          <Route path={PagesRoutes.BLOG} element={<NewsPage />} />
          <Route
            path={PagesRoutes.BLOG + '/:id'}
            element={<NewsDetailPage />}
          />
          <Route
            path={PagesRoutes.BUSINESS_CONSULTING}
            element={<BusinessConsulting setActive={setActive} />}
          />
          <Route path={PagesRoutes.AUTH} element={<AuthPage />} />
          <Route
            path={PagesRoutes.AUDIT}
            element={<AuditPage setActive={setActive} />}
          />
          <Route path={PagesRoutes.ADMIN_PANEL} element={<AdminPanel />} />
        </Routes>
      </div>

      <Footer />
    </div>
  )
}

export default App
