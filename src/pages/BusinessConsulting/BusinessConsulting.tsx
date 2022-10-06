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
import './BusinessConsulting.scss'
import { Button } from '../../components/Button/Button'

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
            </div>

            <div className="business__our-clients our-clients">
                <h4 className="our-clients__title">
                    К нам обращаются владельцы бизнеса, которые хотят решить следующие проблемы:
                </h4>

                <div className="our-clients__item">
                    
                </div>
            </div>
        </main>
    )
}