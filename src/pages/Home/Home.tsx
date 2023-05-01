import React, { MouseEvent, useState } from 'react'
import { Button } from 'components/Button/Button'
import { Methods, useHttp } from 'hooks/useHttp'
import { newsStore } from 'store/newsStore'
import { partnersStore } from 'store/partnersStore'
import { News } from 'schemas/News'
import { Partner } from 'schemas/Partner'
import { PartnersList } from 'components/PartnersList/PartnersList'
import BikeImage from 'assets/home/bike.svg'
import computerImage from 'assets/home/computer.png'
import barsImage from 'assets/home/bars.png'
import peopleImage from 'assets/home/people.png'
import planningImage from 'assets/home/planning.png'
import arrowUpImage from 'assets/home/arrow-up.png'
import personBars from 'assets/home/person-bars.svg'
import mainScreenImage from 'assets/home/main-screen.svg'
import wheelGear from 'assets/home/gear.svg'
import wheelGear2 from 'assets/home/gear-2.svg'
import largePurpleGear from 'assets/home/large-purple-gear.svg'
import bgGreen from 'assets/home/bg-green.svg'
import bgMainScreenMobile from 'assets/home/main-screen-bg-mobile.svg'
import personOnCircleMobile from 'assets/home/person-on-circle-mobile.svg'
import personWithScreensMobile from 'assets/home/person-with-screens-mobile.svg'
import bgGreenMobile from 'assets/home/bg-green-mobile.svg'
import bikeMobile from 'assets/home/bike-mobile.svg'
import personWithLaptopClock from 'assets/home/person-with-laptop-clock.svg'

import { NewsList } from 'components/NewsList/NewsList'
import { Preloader } from 'components/Preloader/Preloader'
import { RequestSection } from 'components/RequestSection/RequestSection'

import { PagesRoutes } from 'routes'
import { useNavigate } from 'react-router'

import { scrollToTopAndNavigate } from 'helpers/scrollToTopAndNavigate'

import './Home.scss'

interface HomeProps {
    setActive: (val: boolean) => void
}

export const Home: React.FC<HomeProps> = ({ setActive }) => {
    const [items, loading, error] = useHttp<News[]>({link: '/news', method: Methods.GET, store: newsStore, useAuth: false})
    const [itemsPartners, loadingPartners, errorPartners] = useHttp<Partner[]>({link: '/partners', method: Methods.GET, store: partnersStore, useAuth: false})
    const navigate = useNavigate()

    const navigateTo = (path: PagesRoutes) => {
        scrollToTopAndNavigate(() => navigate(path))
    }

    if (loading || loadingPartners) {
        return <Preloader />
    }

    if (error) {
        return <h1>Something happened</h1>
    }

    return (
        <>
        <main>
            <object data={mainScreenImage} className="main-screen__image desktop" type="image/svg+xml"></object>
            <object data={bgMainScreenMobile} className="main-screen__image mobile"></object>
            <object data={personOnCircleMobile} className="main-screen__person-on-circle mobile"></object>
            <object data={personWithScreensMobile} className="main-screen__person-with-screens mobile"></object>
            <object data={personWithLaptopClock} className="main-screen__person-laptop"></object>
            <div className="main-screen">
                <div className="container">
                    <div className="main-screen__inner">
                        <h1 className="main-screen__title">paulin</h1>
                        <h2 className="main-screen__subtitle">Управление бизнесом</h2>
                        <h3 className="main-screen__subsubtitle">Внедрение инструментов управления в бизнес</h3>
                        <Button 
                            isFilled
                            onClick={() => setActive(true)}
                        >Запись на консультацию</Button>
                    </div>
                </div>
            </div>

            <div className="main__news" data-aos="fade-up">
                <div className="container">
                    <NewsList />
                </div>
            </div>

            <div className="container" data-aos="zoom-in">
                <h2 className="about-us__title">Paulin Consulting - консалтинговая компания, которая помогает 
                    предпринимателям организовать работу бизнеса так, 
                    чтобы он приносил больше денег и им было легче управлять.</h2>
            </div>

            <div className="about-us" style={{position: 'relative', overflow: 'hidden', paddingBottom: '900px'}}>
                <div className="container">
                    <div className="about-us__info" data-aos="fade-right">
                        <div className="about-us__item">
                            <p className='text-gradient'>{">5"}</p>
                            <p className="about-us__text">Более 5 лет опыта в сфере бизнес-консалтинга</p>
                        </div>
                        <div className="about-us__item" data-aos="slide-right">
                            <p className='text-gradient'>{">100"}</p>
                            <p className="about-us__text">Более 100 клиентов, с которыми работали наши эксперты</p>
                        </div>
                    </div>
                </div>

                <object data={BikeImage} style={{position: 'absolute', top: '0', left: '-80px', width: '1920px', zIndex: -1}} className="bike-image"></object>
                <object data={bgGreenMobile} className="bike-image-mobile abous-us__bg mobile"></object>
                <object data={bikeMobile} className="bike-image-mobile about-us__bike mobile"></object>
                <object data={wheelGear} className="gear-wheel"></object>
                <object data={wheelGear2} className="gear-wheel left"></object>
                <object data={largePurpleGear} className="gear-wheel large"></object>
                <object data={bgGreen} className="home__bg-green"></object>
            </div>

            <div className="business-consulting" style={{overflow: 'hidden'}}>
                <div className="container">
                    <header className="business-consulting__header">
                        <div data-aos="fade-right">
                            <h2 className="business-consulting__title">Smart Business</h2>
                            <h3 className="business-consulting__subtitle">Мы делаем из бизнеса систему</h3>
                        </div>
                        <div data-aos="fade-left" className="business-consulting__btns">
                            <Button 
                                isWhite
                                onClick={() => navigateTo(PagesRoutes.BUSINESS_CONSULTING)}
                            >Подробнее</Button>
                            <Button 
                                isFilled
                                onClick={() => setActive(true)}
                            >Узнать стоимость</Button>
                        </div>
                    </header>
                    <p className="business-consulting__text" data-aos="fade-in">
                        Программа по внедрению инструментов управления в 
                        действующий бизнес, которая включает разработку 
                        и внедрение:
                    </p>
                </div>
            </div>

            <div className="features">
                <div className="container">
                    <div className="features__inner">
                        <div className="features__left">
                            <div className="features__item small">
                                <img src={peopleImage} alt="" />
                                <p data-aos="fade-in">структуры компании</p>
                            </div>
                            <div className="features__item">
                                <img src={planningImage} alt="" />
                                <p data-aos="fade-in">
                                    планирование стратегии развития компании
                                </p>
                            </div>
                            <div className="features__item">
                                <img src={barsImage} alt="" />
                                <p data-aos="fade-in">
                                    метрик (KPI) для измерения результатов
                                </p>
                            </div>
                            <div className="features__item small">
                                <img src={arrowUpImage} alt="" />
                                <p data-aos="fade-in">
                                    системы управления финансами
                                </p>
                            </div>
                        </div>
                        <div className="features__right">
                            <div className="features__item">
                                <img src={computerImage} alt="" />
                                <p data-aos="fade-in">
                                    системы совещаний и координаций на всех уровнях
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="education">
                <div className="container">
                    <div className="education__inner">
                        <h2 className="education__title" data-aos="fade-right">Обучение экспертов</h2>
                        <p className="education__text" data-aos="fade-right">Онлайн школа по обучению экспертов инструментам управления бизнесом, которые внедряются в компаниях клиентов Paulin</p>

                        <div className="education__buttons" data-aos="fade-right">
                            <Button 
                                isGradientBordersWithWhiteBack
                                soon
                            >Подробнее</Button>
                            <Button 
                                isFilled
                                onClick={() => setActive(true)}
                            >Записаться на консультацию</Button>
                        </div>
                    </div>
                </div>
                <img src={personBars} width="40%" alt="" />
            </div>

            <div className="partners">
                <div className="container">
                    <div className="partner__inner">
                        <header className="partners__header" data-aos="fade-up">
                            <h2 className="partners__title">Наши партнеры</h2>
                            <Button 
                                isGradientBordersWithWhiteBack
                                onClick={() => navigateTo(PagesRoutes.PARTNERS_AND_FEEDBACK)}
                            >Отзывы партнеров</Button>
                        </header>
                        <div className="partners__list">
                            <PartnersList />
                        </div>
                    </div>
                </div>
            </div>

            <RequestSection />
        </main>
        </>
        
    )
}