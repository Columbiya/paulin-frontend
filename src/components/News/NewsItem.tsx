import React from 'react'
import env from 'react-dotenv'
import { useNavigate } from 'react-router'
import { scrollToTopAndNavigate } from '../../helpers/scrollToTopAndNavigate'
import { PagesRoutes } from '../../routes'
import { News } from '../../schemas/News'
import './NewsItem.scss'

type NewsProps = News

export const NewsItem: React.FC<NewsProps> = ({ id, image, text, title }) => {
    const navigate = useNavigate()

    const navigateToItem = () => {
        scrollToTopAndNavigate(() => navigate(PagesRoutes.BLOG + `/${id}`))
    }

    return (
        <div className="news-item" onClick={navigateToItem}>
            <h2>{title}</h2>
            <img src={`${env.BACKEND_URL}/${image}`} alt="" className="news-item__image" />
        </div>
    )
}