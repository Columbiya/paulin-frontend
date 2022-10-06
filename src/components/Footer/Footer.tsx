import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { PagesRoutes } from '../../routes'
import instagramBlue from '../../assets/footer/instagram-blue.svg'
import instagramPurple from '../../assets/footer/instagram-purple.svg'
import telegram from '../../assets/footer/telegram.svg'
import './Footer.scss'

export const Footer: React.FC = (props) => {
    const { pathname } = useLocation()
    

    return (
        <footer className={`footer ${pathname != PagesRoutes.MAIN && pathname != PagesRoutes.BUSINESS_CONSULTING ? 'footer--gradient': undefined}`}>
            <div className="container">
                <div className="footer__inner">
                    <nav className="footer__left">
                        <div className="footer__col col">
                            <Link to={PagesRoutes.MAIN}>Главная страница</Link>
                            <Link to={PagesRoutes.BUSINESS_CONSULTING}>Бизнес-консалтинг</Link>
                            <Link to={PagesRoutes.EDUCATION}>Обучение экспертов</Link>
                            <div className="col__bottom">
                                <a href="mailto:info@paulin.commnsulting">info@paulin.commnsulting</a>
                            </div>
                        </div>
                        <div className="footer__col col">
                            <Link to={PagesRoutes.PARTNERS_AND_FEEDBACK}>Партнеры и отзывы</Link>
                            <Link to={PagesRoutes.BLOG}>Блог</Link>
                            <div className="col__bottom">
                                <p>ИП Линяева И.В.</p>
                            </div>
                        </div>
                        <div className="footer__col col">
                            <div className="col__bottom">
                                <p>Paulin Consulting © 2022</p>
                            </div>
                        </div>
                    </nav>

                    <div className="footer__socials">
                        <a href="#" target="_blank">
                            <img src={instagramPurple} alt="instagram" />
                            Пауль Ксения
                        </a>
                        <a href="#" target="_blank">
                            <img src={instagramBlue} alt="instagram" />
                            Линяева Ирина
                        </a>
                        <a href="#" target="_blank">
                            <img src={telegram} alt="instagram" />
                            Paulin Consulting
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}