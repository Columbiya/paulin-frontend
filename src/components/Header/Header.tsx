import React, { MouseEventHandler, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { ReactComponent as Logo } from 'assets/header/logo.svg'
import { PagesRoutes } from 'routes'
import burgerMenu from 'assets/header/burger-menu.svg'
import './Header.scss'
import { Dropdown, PathOption } from 'components/Dropdown/Dropdown'

const options: PathOption[] = [
    {name: "Smart Business", path: PagesRoutes.BUSINESS_CONSULTING},
    {name: "Финансовая модель", path: PagesRoutes.AUDIT}
]

export const Header: React.FC = (props) => {
    const [isOver, setOver] = useState(false)
    const [menuActive, setActive] = useState(false)
    const { pathname } = useLocation()

    const clickHandler: MouseEventHandler<any> = (e) => {

        const object = document.querySelector('#header-mobile-bar') as HTMLObjectElement
        const head = object && object.contentDocument
        
        head?.querySelectorAll('.st0.header-bars').forEach(rect => {
            if (menuActive) {
                rect.setAttribute('style', 'fill: #fff')
            }
            else {
                rect.setAttribute('style', '#3A3A3A')
            }
        })
        setActive(val => !val)
    }

    return (
        <header className={`header ${pathname != PagesRoutes.MAIN && pathname != PagesRoutes.BUSINESS_CONSULTING 
                                    && pathname != PagesRoutes.AUDIT ? "header--green": undefined}`}>
            <div className="container">
                <div className="header-inner">
                    <NavLink to={PagesRoutes.MAIN} className="header__logo"><Logo width={165} /></NavLink>

                    <a href="tel:89218491469" className="header__phone-mobile" onClick={clickHandler}><strong>8-921-849-14-69</strong></a>

                    <nav className={`nav ${menuActive ? 'active': undefined}`}>
                        <NavLink to={PagesRoutes.MAIN} onClick={clickHandler}>Главная страница</NavLink>
                        <Dropdown text='Услуги' options={options} clickHandler={clickHandler} />
                        <a
                            onMouseEnter={e => setOver(true)}
                            onMouseLeave={e => setOver(false)}
                            className="nav__link-soon" 
                        >{isOver ? "СКОРО!": "Обучение экспертов"}</a>
                        <NavLink to={PagesRoutes.PARTNERS_AND_FEEDBACK} onClick={clickHandler}>Партнеры и отзывы</NavLink>
                        <NavLink to={PagesRoutes.BLOG} onClick={clickHandler}>Блог</NavLink>
                        <a href="tel:89218491469" className="header__phone" onClick={clickHandler}><strong>8-921-849-14-69</strong></a>
                    </nav>
                
                    <div onClick={clickHandler} style={menuActive ? {cursor: 'pointer'}: {cursor: 'pointer'}} className={`header__mobile-wrapper`}>
                        <object 
                            data={burgerMenu}
                            className={`header__mobile-menu ${menuActive ? 'active': undefined}`}
                            id="header-mobile-bar"
                        >    
                        </object>
                    </div>
                </div>
            </div>
        </header>
    )
}

