import React from 'react'
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs'
import { NewsList } from '../../components/NewsList/NewsList'
import { PartnerItem } from '../../components/PartnersList/Partner/Partner'
import { Preloader } from '../../components/Preloader/Preloader'
import { Methods, useHttp } from '../../hooks/useHttp'
import { News } from '../../schemas/News'
import { Partner } from '../../schemas/Partner'
import { newsStore } from '../../store/newsStore'
import { partnersStore } from '../../store/partnersStore'
import './Partners.scss'

export const Partners: React.FC = (props) => {
    const [items, loadingPartners, errorPartners] = useHttp<Partner[]>(
        {link: '/partners', method: Methods.GET, useAuth: false, store: partnersStore}
    )
    const [news, loadingNews, errorNews] = useHttp<News[]>(
        {link: '/news', method: Methods.GET, useAuth: false, store: newsStore}
    )
    

    if (loadingPartners || loadingNews) {
        return <Preloader />
    }

    if (errorPartners || errorNews) {
        console.log(errorPartners, 'errored news')
    }

    return (
        <main className="main">
            <Breadcrumbs crumb='Партнеры и отзывы' />

            <div className="container">
                <h1 className="pages-title">Партнеры и отзывы</h1>
            </div>

            <div className="container">
                <div className="partners-page">
                    {items?.map(partner => (
                        <>
                            <PartnerItem {...partner} key={partner.id} partnersPage />
                        </>
                    ))}   
                </div>
            </div>

            <div className="partners__news-list">
                <div className="container">
                    <NewsList />
                </div>
            </div>
        </main>
        
    )
}