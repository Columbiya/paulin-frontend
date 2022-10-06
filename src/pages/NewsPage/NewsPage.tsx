import React from 'react'
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs'
import { NewsItem } from '../../components/News/NewsItem'
import { Preloader } from '../../components/Preloader/Preloader'
import { Methods, useHttp } from '../../hooks/useHttp'
import { News } from '../../schemas/News'
import { newsStore } from '../../store/newsStore'
import './NewsPage.scss'

export const NewsPage: React.FC = (props) => {
    const [news, loadingNews, errorNews] = useHttp<News[]>({link: '/news', method: Methods.GET, useAuth: false, store: newsStore})
    
    if (loadingNews) {
        return <Preloader />
    }

    return (
        <main className="main">
            <Breadcrumbs crumb='Блог' />

            <div className="container">
                <h1 className="pages-title">Блог</h1>
            </div>

            <div className="container">
                <div className="news-list">
                    {
                        news?.map(item => (
                            <>
                                <NewsItem {...item} key={item.id} />
                            </>
                            
                        ))
                    }
                </div>
            </div>

        </main>
    )
} 