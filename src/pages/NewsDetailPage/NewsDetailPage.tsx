import React, { useEffect, useMemo } from 'react'
import env from 'react-dotenv'
import { useNavigate, useParams } from 'react-router'
import { PagesRoutes } from 'routes'
import { Element, scrollSpy } from 'react-scroll'

import { News } from 'schemas/News'
import { newsStore } from 'store/newsStore'

import { Methods, useHttp } from 'hooks/useHttp'

import redPurple from 'assets/news-hiders/red-purple.png'
import lightGreenHider from 'assets/news-hiders/light-green-green.png'
import orangeLight from 'assets/news-hiders/orange-light-orange.png'
import purpleOrange from 'assets/news-hiders/purple-orange.png'

import { Breadcrumbs } from 'components/Breadcrumbs/Breadcrumbs'
import { Preloader } from 'components/Preloader/Preloader'
import { Hiders } from 'components/Popup/CreateNews/CreateNews'
import { NewsList } from 'components/NewsList/NewsList'

import './NewsDetailPage.scss'

export const NewsDetailPage: React.FC = (props) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [news, loading, error] = useHttp<News>({
    link: `/news/${id}`,
    method: Methods.GET,
    store: newsStore,
    useAuth: false,
    dependsOn: id,
  })
  const [items, newsLoading, newsError] = useHttp<News>({
    link: `/news`,
    method: Methods.GET,
    store: newsStore,
    useAuth: false,
  })
  const imageSrc = useMemo(() => {
    switch (news?.hider) {
      case Hiders.LIGHT_GREEN:
        return lightGreenHider
      case Hiders.ORANGE_LIGHT:
        return orangeLight
      case Hiders.PURPLE_ORANGE:
        return purpleOrange
      case Hiders.RED_PURPLE:
        return redPurple
    }
  }, [news?.hider])
  useEffect(() => {
    scrollSpy.update()
  }, [])

  if (loading) {
    return <Preloader />
  }

  if (error) {
    console.log(error)
  }

  return (
    <main className="main">
      <Breadcrumbs
        crumb={[
          { name: 'Blog', path: PagesRoutes.BLOG },
          { name: news?.title as string, path: null },
        ]}
      />

      <div className="container">
        <div className="news-detail">
          <h2 className="news-detail__title news-detail__title--mobile">
            {news?.title}
          </h2>
          <div className="news-detail__left">
            <img src={`${env.BACKEND_URL}:5000/${news?.image}`} alt="" />
            <img src={imageSrc} className="news-detail__hider" alt="" />
          </div>

          <div className="news-detail__text">
            <header className="news-detail__header">
              <div className="news-detail__header-left">
                <h2 className="news-detail__title">{news?.title}</h2>
                <p className="news-detail__author">{news?.author}</p>
                <p className="news-detail__date">
                  {news && new Date(news?.createdAt).toLocaleDateString('ru')}
                </p>
              </div>
            </header>
            <div className="news-detail__chapters">
              {news?.chapter.map((ch, index) => (
                <Element name={`chapter-${index}`}>
                  {ch.name && (
                    <h3 className="news-detail__chapter-number">{ch.name}</h3>
                  )}
                  <div className="news-detail__chapter-text">
                    {ch.text.split('\n').map((p) => (
                      <p>{p}</p>
                    ))}
                  </div>
                </Element>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <NewsList />
      </div>
    </main>
  )
}
