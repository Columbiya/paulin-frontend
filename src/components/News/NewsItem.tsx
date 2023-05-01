import React, { useMemo } from 'react'
import env from 'react-dotenv'
import { useNavigate } from 'react-router'
import { scrollToTopAndNavigate } from 'helpers/scrollToTopAndNavigate'
import { PagesRoutes } from 'routes'
import { News } from 'schemas/News'
import redPurple from 'assets/news-hiders/red-purple.png'
import lightGreenHider from 'assets/news-hiders/light-green-green.png'
import orangeLight from 'assets/news-hiders/orange-light-orange.png'
import purpleOrange from 'assets/news-hiders/purple-orange.png'
import './NewsItem.scss'
import { Hiders } from 'components/Popup/CreateNews/CreateNews'

type NewsProps = News

export const NewsItem: React.FC<NewsProps> = ({ id, image, text, title, hider }) => {
    const navigate = useNavigate()
    const imageSrc = useMemo(() => {
        switch(hider) {
            case Hiders.LIGHT_GREEN:
                return lightGreenHider
            case Hiders.ORANGE_LIGHT:
                return orangeLight
            case Hiders.PURPLE_ORANGE:
                return purpleOrange
            case Hiders.RED_PURPLE:
                return redPurple
        }
    }, [hider])

    

    const navigateToItem = () => {
        scrollToTopAndNavigate(() => navigate(PagesRoutes.BLOG + `/${id}`))
    }

    return (
        <div className="news-item" onClick={navigateToItem}>
            <h2 className="news-item__title">{title}</h2>
            <img src={`${env.BACKEND_URL}:5000/${image}`} alt="" className="news-item__image" />
            <img className="news-item__hider" src={imageSrc} alt="" />
        </div>
    )
}