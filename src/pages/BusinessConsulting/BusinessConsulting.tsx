import React from 'react'
import { Methods, useHttp } from '../../hooks/useHttp'
import { News } from '../../schemas/News'
import { newsStore } from '../../store/newsStore'
import layers from '../../assets/business-consulting/layers.svg'
import purpleBall from '../../assets/business-consulting/purple-ball.svg'
import listChecks from '../../assets/business-consulting/list-checks.svg'
import personCheck from '../../assets/business-consulting/person-check.svg'
import gearLarge from '../../assets/business-consulting/gear-large.svg'
import gearSmall from '../../assets/business-consulting/gear-small.svg'
import checkBlue from '../../assets/business-consulting/check-blue.svg'
import checkOrange from '../../assets/business-consulting/check-orange.svg'
import checkGreen from '../../assets/business-consulting/check-green.svg'
import checkPurple from '../../assets/business-consulting/check-purple.svg'
import manPuzzle from '../../assets/business-consulting/man-puzzle.svg'
import womanPuzzle from '../../assets/business-consulting/woman-puzzle.svg'
import loop from '../../assets/business-consulting/loop.svg'
import personQuestionMark from '../../assets/business-consulting/person-question-mark.svg'
import bgOrange from '../../assets/business-consulting/bg-orange.svg'
import bgGreen from '../../assets/business-consulting/bg-green.svg'
import bgPurple from '../../assets/business-consulting/bg-purple.svg'
import personWithCart from '../../assets/business-consulting/person-with-cart.svg'
import personWithRocket from '../../assets/business-consulting/person-with-a-rocket.svg'
import responsibilityImage from '../../assets/business-consulting/responsibility-image.svg'
import './BusinessConsulting.scss'
import { Button } from '../../components/Button/Button'
import { NewsList } from '../../components/NewsList/NewsList'
import { RequestSection } from '../../components/RequestSection/RequestSection'

export const BusinessConsulting: React.FC = (props) => {
    const [items, loading, error] = useHttp<News[]>({link: '/news', method: Methods.GET, store: newsStore, useAuth: false})
    
    return (
        <main>
            <div className="consulting-main-screen">
                <object data={layers} className="consulting__layers"></object>
                <object data={purpleBall} className="consulting__ball"></object>
                <object data={listChecks} className="consulting__list-checks"></object>
                <object data={personCheck} className="consulting__person-check"></object>

                <div className="consulting-main-screen__content">
                    <div className="container">
                        <h1 className="consulting__title">Бизнес- консалтинг</h1>
                        <h2 className="consulting__subtitle">Свобода начинается за барьерами</h2>
                        <Button isFilled>Отправить заявку</Button>
                    </div>
                </div>
            </div>

            <div className="business">
                <div className="container">
                    <p className='business__text'>
                        Успешный бизнес, который не требует беспрерывного участия владельца 
                        и при этом приносящий постоянный, прогнозированный доход – не мечта, 
                        а совокупность последовательных действий.
                    </p>

                    <p className='business__text large'>
                        Мы делаем это с помощью инструметов управления: 
                    </p>

                    <div className="business__tools">
                        <div className="tool__item">
                            <img alt="" className="tool__check" src={checkPurple} width={110} />

                            <p className="tool__name">Система координаций</p>
                            <p className="tool__text">Действия членов команды будут согласованы</p>
                        </div>
                        <div className="tool__item">
                            <img alt="" className="tool__check" src={checkOrange} width={110} />

                            <p className="tool__name">Система оперативной передачи функций</p>
                            <p className="tool__text">Новых сотрудников будет легче ввести в должность</p>
                        </div>
                        <div className="tool__item">
                            <img alt="" className="tool__check" src={checkGreen} width={110} />

                            <p className="tool__name">Система координаций</p>
                            <p className="tool__text">Действия членов команды будут согласованы</p>
                        </div>
                        <div className="tool__item">
                            <img alt="" className="tool__check" src={checkGreen} width={110} />

                            <p className="tool__name">Система координаций</p>
                            <p className="tool__text">Действия членов команды будут согласованы</p>
                        </div>
                        <div className="tool__item">
                            <img alt="" className="tool__check" src={checkBlue} width={110} />

                            <p className="tool__name">Система координаций</p>
                            <p className="tool__text">Действия членов команды будут согласованы</p>
                        </div>
                        <div className="tool__item">
                            <img alt="" className="tool__check" src={checkOrange} width={110} />

                            <p className="tool__name">Система координаций</p>
                            <p className="tool__text">Действия членов команды будут согласованы</p>
                        </div>
                        <div className="tool__item">
                            <img alt="" className="tool__check" src={checkOrange} width={110} />

                            <p className="tool__name">Система координаций</p>
                            <p className="tool__text">Действия членов команды будут согласованы</p>
                        </div>
                        <div className="tool__item">
                            <img alt="" className="tool__check" src={checkGreen} width={110} />

                            <p className="tool__name">Система координаций</p>
                            <p className="tool__text">Действия членов команды будут согласованы</p>
                        </div>
                        <div className="tool__item">
                            <img alt="" className="tool__check" src={checkPurple} width={110} />

                            <p className="tool__name">Система координаций</p>
                            <p className="tool__text">Действия членов команды будут согласованы</p>
                        </div>
                    </div>
                </div>

                <object data={gearLarge} className="business__gear large"></object>
                <object data={gearSmall} className="business__gear"></object>

                <img src={bgOrange} className="business__bg" alt="" />
            </div>

            <div className="business__helps-you">
                <div className="container">
                    <div className="helps-you__inner">
                        <h4 className="helps-you__title">Эти инструменты помогут создать систему эффективного бизнеса.</h4>
                        <p className="helps-you__text">У вас появится сильная команда, которая возьмет на себя исполнительные задачи, 
                            а у вас будет больше свободного времени, чтобы заниматься только своими прямыми обязанностями</p>
                    </div>
                </div>

                <object data={manPuzzle} className="helps-you__man-puzzle"></object>
                <object data={womanPuzzle} className="helps-you__woman-puzzle"></object>

                <img src={bgGreen} className="helps-you__bg" alt="" />
            </div>

            <div className="business__our-clients our-clients">
                <div className="container">
                    <h4 className="our-clients__title">
                        К нам обращаются владельцы бизнеса, которые хотят решить следующие проблемы:
                    </h4>

                    <div className="our-clients__inner">
                        <div className="our-clients__item">
                            <img src={loop} className="our-clients__image" alt="" />

                            <h5 className="our-clients__type">Финансы</h5>

                            <ul className='our-clients__list list wrong'>
                                <li>
                                    Кассовые разделы
                                </li>
                                <li>
                                    Отсутствие дивидендов у владельцев
                                </li>
                                <li>
                                    Доход как "американские горки" - то есть, то нет
                                </li>
                                <li>
                                    Высокий уровень оборотов, но на счетах денег не остается
                                </li>
                                <li>
                                    Большой ФОТ
                                </li>
                                <li>
                                    Отсутствие понимания "на чем компания теряет деньги?"
                                </li>
                            </ul>
                        </div>

                        <div className="our-clients__item">
                            <img src={personQuestionMark} className="our-clients__image" alt="" />

                            <h5 className="our-clients__type">Персонал</h5>

                            <ul className='our-clients__list list wrong'>
                                <li>
                                    Руководителю приходится решать вопросы за сотрудников
                                </li>
                                <li>
                                    Постоянное "тушение пожаров" из за недоделок сотрудников
                                </li>
                                <li>
                                    Незнание "как нанимать?" и "кого нанимать?"
                                </li>
                                <li>
                                    Нет понимания "когда пора увольнять"
                                </li>
                                <li>
                                    Нет понимания "кто за что отвечает" - ни у владельца, ни у сотрудника
                                </li>
                                <li>
                                    Как измерить результат работы сотрудника
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <img src={bgPurple} className="our-clients__bg" alt="" />
            </div>

            <div className="responsibility">
                <div className="container">
                    <h4 className="responsibility__title">Обязанности владельца бизнеса</h4>

                    <div className="responsibility__inner">
                        <div className="responsibility__item">
                            <object data={personWithCart} className="responsibility__image"></object>

                            <h5 className="responsibility__subtitle">ДО систематизации</h5>
                            <ul className="our-clients__list list wrong">
                                <li>
                                    Руководителю приходится решать вопросы за сотрудников
                                </li>
                                <li>
                                    Постоянное "тушение пожаров" из за недоделок сотрудников
                                </li>
                                <li>
                                    Незнание "как нанимать?" и "кого нанимать?"
                                </li>
                                <li>
                                    Нет понимания "когда пора увольнять"
                                </li>
                                <li>
                                    Нет понимания "кто за что отвечает" - ни у владельца, ни у сотрудника
                                </li>
                                <li>
                                    Как измерить результат работы сотрудника
                                </li>
                            </ul>
                        </div>
                        <div className="responsibility__item">
                            <object data={personWithRocket} className="responsibility__image"></object>

                            <h5 className="responsibility__subtitle">ДО систематизации</h5>
                            <ul className="our-clients__list list wrong">
                                <li>
                                    Руководителю приходится решать вопросы за сотрудников
                                </li>
                                <li>
                                    Постоянное "тушение пожаров" из за недоделок сотрудников
                                </li>
                                <li>
                                    Незнание "как нанимать?" и "кого нанимать?"
                                </li>
                                <li>
                                    Нет понимания "когда пора увольнять"
                                </li>
                                <li>
                                    Нет понимания "кто за что отвечает" - ни у владельца, ни у сотрудника
                                </li>
                                <li>
                                    Как измерить результат работы сотрудника
                                </li>
                            </ul>
                        </div>
                    </div>

                    <img src={responsibilityImage} className="responsibility__bg" alt="" />
                </div>
            </div>

            <section className="you-can">
                <div className="container">
                    <div className="you-can__inner">
                        <img src={checkPurple} alt="" />
                        <div className="you-can__text">
                            <p>
                                Вы сможете автоматизировать бизнес во время прохождения 
                                годовой программы по внедрению системы управления
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container">
                <NewsList />
            </div>

            <RequestSection />
        </main>
    )
}