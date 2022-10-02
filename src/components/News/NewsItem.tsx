import React from 'react'
import { News } from '../../schemas/News'
import './NewsItem.scss'

type NewsProps = News

export const NewsItem: React.FC<NewsProps> = ({ id, image, text, title }) => {
    return (
        <div className="news-item">
            <h3>{title}</h3>
        </div>
    )
}