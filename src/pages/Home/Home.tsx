import React from 'react'
import { Button } from '../../components/Button/Button'
import { ReactComponent as Image } from '../../assets/home/main-screen.svg'
import { Methods, useHttp } from '../../hooks/useHttp'
import { newsStore } from '../../store/newsStore'
import { partnersStore } from '../../store/partnersStore'
import { NewsItem } from '../../components/News/NewsItem'
import { News } from '../../schemas/News'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Partner } from '../../schemas/Partner'
import { PartnersList } from '../../components/PartnersList/PartnersList'
import { RequestForm } from '../../components/RequestForm/RequestForm'
import BikeImage from '../../assets/home/bike.svg'
import computerImage from '../../assets/home/computer.png'
import barsImage from '../../assets/home/bars.png'
import peopleImage from '../../assets/home/people.png'
import planningImage from '../../assets/home/planning.png'
import arrowUpImage from '../../assets/home/arrow-up.png'
import personBars from '../../assets/home/person-bars.svg'
import requestImage from '../../assets/home/request-image.svg'
import './Home.scss'


export const Home: React.FC = (props) => {
    const [items, loading, error] = useHttp<News>({link: '/news', method: Methods.GET, store: newsStore, useAuth: false})
    const [itemsPartners, loadingPartners, errorPartners] = useHttp<Partner>({link: '/partners', method: Methods.GET, store: partnersStore, useAuth: false})
    
    if (loading || loadingPartners) {
        return <h1>Loading</h1>
    }

    if (error) {
        return <h1>Error</h1>
    }

    return (
        <main>
            <div className="main-screen">
                <div className="container">
                    <div className="main-screen__inner">
                        <h1 className="main-screen__title">paulin</h1>
                        <h2 className="main-screen__subtitle">Управление бизнесом</h2>
                        <h3 className="main-screen__subsubtitle">Внедрение инструментов управления в бизнес</h3>
                        <Button isFilled>Запись на консультацию</Button>
                    </div>
                </div>
            </div>

            <div className="main__news">
                <div className="container">
                    <Swiper 
                        spaceBetween={10}
                        slidesPerView={4}
                    >
                        {
                            items?.map(item => (
                                <SwiperSlide>
                                    <NewsItem {...item} key={item.id} />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>

                </div>
            </div>

            <div className="container">
                <h2 className="about-us__title">Paulin Consulting - консалтинговая компания, которая помогает 
                    предпринимателям организовать работу бизнеса так, 
                    чтобы он приносил больше денег и им было легче управлять.</h2>
            </div>

            <div className="about-us" style={{position: 'relative'}}>
                <div className="container">
                    <div className="about-us__info">
                        <div className="about-us__item">
                            <p className='text-gradient'>{">5"}</p>
                            <p className="about-us__text">Более 5 лет опыта в сфере бизнес-консалтинга</p>
                        </div>
                        <div className="about-us__item">
                            <p className='text-gradient'>{">100"}</p>
                            <p className="about-us__text">Более 100 клиентов, с которыми работали наши эксперты</p>
                        </div>
                    </div>
                </div>

                <img src={BikeImage} style={{position: 'absolute', top: '0', left: '-80px', width: '100vw', zIndex: -1}} alt="" />
            </div>

            <div className="business-consulting">
                <div className="container">
                    <header className="business-consulting__header">
                        <div>
                            <h2 className="business-consulting__title">Бизнес консалтинг</h2>
                            <h3 className="business-consulting__subtitle">Мы делаем из бизнеса систему</h3>
                        </div>
                        <div>
                            <Button isWhite>Подробнее</Button>
                            <Button isFilled>Узнать стоимость</Button>
                        </div>
                    </header>
                    <p className="business-consulting__text">
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
                                <p>структуры компании</p>
                            </div>
                            <div className="features__item">
                                <img src={planningImage} alt="" />
                                <p>
                                    планирование стратегии развития компании
                                </p>
                            </div>
                            <div className="features__item">
                                <img src={barsImage} alt="" />
                                <p>
                                    метрик (KPI) для измерения результатов
                                </p>
                            </div>
                            <div className="features__item small">
                                <img src={arrowUpImage} alt="" />
                                <p>
                                    системы управления финансами
                                </p>
                            </div>
                        </div>
                        <div className="features__right">
                            <div className="features__item">
                                <img src={computerImage} alt="" />
                                <p>
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
                        <h2 className="education__title">Обучение экспертов</h2>
                        <p className="education__text">Онлайн школа по обучению экспертов инструментам управления бизнесом, которые внедряются в компаниях клиентов Paulin</p>

                        <div className="education__buttons">
                            <Button isGradientBordersWithWhiteBack>Подробнее</Button>
                            <Button isFilled>Записаться на консультацию</Button>
                        </div>
                    </div>
                </div>
                <img src={personBars} width="40%" alt="" />
            </div>

            <div className="partners">
                <div className="container">
                    <div className="partner__inner">
                        <header className="partners__header">
                            <h2 className="partners__title">Наши партнеры</h2>
                            <Button isGradientBordersWithWhiteBack>Отзывы партнеров</Button>
                        </header>
                        <div className="partners__list">
                            <PartnersList />
                        </div>
                    </div>
                </div>
            </div>

            <div className="request">
                <div className="container">
                    <h2 className="education__title">Оставьте заявку</h2>
                    
                    <div className="request__inner">
                        <RequestForm />
                    </div>
                </div>

                <img src={requestImage} className="request__image" alt="" />
            </div>
        </main>
    )
}