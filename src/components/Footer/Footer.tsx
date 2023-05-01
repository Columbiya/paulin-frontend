import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { PagesRoutes } from 'routes'
import instagramBlue from 'assets/footer/instagram-blue.svg'
import instagramPurple from 'assets/footer/instagram-purple.svg'
import telegram from 'assets/footer/telegram.svg'
import './Footer.scss'
import { scrollToTopAndNavigate } from 'helpers/scrollToTopAndNavigate'

export const Footer: React.FC = (props) => {
  const navigate = useNavigate()
  const navigateTo = (path: PagesRoutes) => {
    scrollToTopAndNavigate(() => navigate(path))
  }
  const { pathname } = useLocation()

  return (
    <footer
      className={`footer ${
        pathname != PagesRoutes.MAIN &&
        pathname != PagesRoutes.BUSINESS_CONSULTING &&
        pathname != PagesRoutes.AUDIT
          ? 'footer--gradient'
          : undefined
      }`}
      style={
        pathname == PagesRoutes.AUTH || pathname == PagesRoutes.ADMIN_PANEL
          ? { display: 'none' }
          : undefined
      }>
      <div className="container">
        <div className="footer__inner">
          <nav className="footer__left">
            <div className="footer__col col">
              <a onClick={() => navigateTo(PagesRoutes.MAIN)}>
                Главная страница
              </a>
              <a onClick={() => navigateTo(PagesRoutes.BUSINESS_CONSULTING)}>
                Smart Business
              </a>
              <a onClick={() => navigateTo(PagesRoutes.EDUCATION)}>
                Обучение экспертов
              </a>
              <div className="col__bottom">
                <a href="mailto:info@paulin.consulting">
                  info@paulin.consulting
                </a>
              </div>
            </div>
            <div className="footer__col col">
              <a onClick={() => navigateTo(PagesRoutes.PARTNERS_AND_FEEDBACK)}>
                Партнеры и отзывы
              </a>
              <a onClick={() => navigateTo(PagesRoutes.BLOG)}>Блог</a>
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
