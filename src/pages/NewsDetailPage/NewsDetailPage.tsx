import React, { useEffect } from 'react'
import env from 'react-dotenv'
import { useNavigate, useParams } from 'react-router'
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs'
import { Preloader } from '../../components/Preloader/Preloader'
import { Methods, useHttp } from '../../hooks/useHttp'
import { PagesRoutes } from '../../routes'
import { News } from '../../schemas/News'
import { newsStore } from '../../store/newsStore'
import { animateScroll as scroll, Link, Element, scrollSpy } from 'react-scroll'
import './NewsDetailPage.scss'

export const NewsDetailPage: React.FC = (props) => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [news, loading, error] = useHttp<News>({link: `/news/${id}`, method: Methods.GET, store: newsStore, useAuth: false})

    useEffect(() => {
        scrollSpy.update()
    }, [])

    if (loading) {
        return <Preloader />
    }

    if (error) {
        console.log(error)
    }

    let chapterCount: number[] = []

    if (news?.chapter) {
        for (let i = 0; i < news?.chapter.length; i++) {
            chapterCount.push(i)
        }
    }

    return (
        <main className="main">
            <Breadcrumbs 
                crumb={[
                    {name: 'Blog', path: PagesRoutes.BLOG},
                    {name: news?.title as string, path: null}
                ]} 
            />

            <div className="container">
                <div className="news-detail">
                    <div className="news-detail__left">
                        <img src={`${env.BACKEND_URL}/${news?.image}`} alt="" />
                    </div>

                    <div className="news-detail__text">
                        <header className="news-detail__header">
                            <div className="news-detail__header-left">
                                <h2 className="news-detail__title">{news?.title}</h2>
                                <p className="news-detail__author">{news?.author}</p>
                                <p className="news-detail__date">{news && new Date(news?.createdAt).toLocaleDateString('ru')}</p>
                            </div>
                            <div className="news-detail__chapters-preview">
                                {chapterCount.map(ch => (
                                    <Link 
                                        className="chapter-number" 
                                        activeClass='active'
                                        smooth={true}
                                        duration={500}
                                        to={`chapter-${ch}`}
                                        spy={true}
                                    >
                                        Глава {ch + 1}
                                    </Link>
                                ))}
                            </div>

                        </header>
                        <div className="news-detail__chapters">
                            {news?.chapter.map((ch, index) => (
                                <Element name={`chapter-${index}`}>
                                    <h3 className="news-detail__chapter-number">Глава {index + 1}</h3>
                                    <div className='news-detail__chapter-text'>
                                        {
                                            ch.text.split('\n').map(p => <p>{p}</p>)
                                        }
                                    </div>
                                </Element>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}