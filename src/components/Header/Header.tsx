import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/header/logo.svg'
import { PagesRoutes } from '../../routes'
import './Header.scss'

export const Header: React.FC = (props) => {
    const [isOver, setOver] = useState(false)
    const { pathname } = useLocation()

    return (
        <header className={`header ${pathname != PagesRoutes.MAIN && pathname != PagesRoutes.BUSINESS_CONSULTING ? "header--green": undefined}`}>
            <div className="container">
                <div className="header-inner">
                    <NavLink to={PagesRoutes.MAIN}><Logo width={165} /></NavLink>
                    <nav className="nav">
                        <NavLink to={PagesRoutes.MAIN}>Главная страница</NavLink>
                        <NavLink to={PagesRoutes.BUSINESS_CONSULTING}>Бизнес консалтинг</NavLink>
                        <a
                            onMouseEnter={e => setOver(true)}
                            onMouseLeave={e => setOver(false)}
                            className="nav__link-soon"
                        >{isOver ? "СКОРО!": "Обучение экспертов"}</a>
                        <NavLink to={PagesRoutes.PARTNERS_AND_FEEDBACK}>Партнеры и отзывы</NavLink>
                        <NavLink to={PagesRoutes.BLOG}>Блог</NavLink>
                        <a href="tel:89218491469"><strong>8-921-849-14-69</strong></a>
                    </nav>
                </div>
            </div>
        </header>
    )
}

