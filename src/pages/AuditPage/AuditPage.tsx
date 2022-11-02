import React from 'react'
import mainScreenBg from '../../assets/audit/main-screen-bg.svg'
import mainScreenPerson from '../../assets/audit/main-screen-person.svg'
import personLoop from '../../assets/audit/person-loop.svg'
import lockImage from '../../assets/audit/lock.svg'
import listCheckImage from '../../assets/audit/list-check.svg'
import graduationHatImage from '../../assets/audit/graduation-hat-gears.svg'
import whyWeImage from '../../assets/audit/why-we-image.svg'
import whyYouNeedBg from '../../assets/audit/why-you-need-bg.svg'
import paperIcon from '../../assets/audit/paper-icon.svg'
import caseIcon from '../../assets/audit/case-icon.svg'
import folderIcon from '../../assets/audit/folder-icon.svg'
import moneyIcon from '../../assets/audit/money-icon.svg'
import whatYouGetBg from '../../assets/audit/what-you-get-bg.svg'
import personJuggling from '../../assets/audit/person-juggling.svg'
import checkBlue from '../../assets/business-consulting/check-blue.svg'
import checkOrange from '../../assets/business-consulting/check-orange.svg'
import checkGreen from '../../assets/business-consulting/check-green.svg'
import checkPurple from '../../assets/business-consulting/check-purple.svg'
import mainScreenBgMobile from '../../assets/audit/main-screen-bg-mobile.svg'
import whatYouGetBgMobile from '../../assets/audit/what-you-get-bg-mobile.svg'
import whyWeBgMobile from '../../assets/audit/why-we-bg-mobile.svg'
import { Button } from '../../components/Button/Button'
import { YouCan } from '../../components/YouCan/YouCan'
import './AuditPage.scss'
import { RequestSection } from '../../components/RequestSection/RequestSection'

interface AuditPageProps {
    setActive: (val: boolean) => void
}

export const AuditPage: React.FC<AuditPageProps> = ({ setActive }) => {
    return (
        <main>
            <section className="audit-main-screen">
                <div className="container">
                    <div className="audit-main-screen__content">
                        <h1 className='audit-main-screen__title'>Расчет финансовой модели для вашего бизнеса</h1>
                        <p className="audit-main-screen__text">О каких точках извлечения прибыли вы даже не догадывались...</p>
                        <Button 
                            isFilled
                            onClick={() => setActive(true)}
                        >
                            Искать свои деньги
                        </Button>
                    </div>
                </div>
                <object data={mainScreenBg} className="audit-main-screen__bg"></object>
                <object data={mainScreenBgMobile} className="audit-main-screen__bg mobile"></object>
                <object data={mainScreenPerson}  className="audit-main-screen__person"></object>
                <object data={personLoop}  className="audit-main-screen__person-loop"></object>
            </section>

            <YouCan large>
                Мы работаем так, чтобы наши клиенты смогли увидеть реальное состояние компании, и научились в последующем самостоятельно принимать правильные управленческие решения.
            </YouCan>

            <section className="why-we">
                <div className="container">
                    <h2 className="why-we__title" data-aos="fade-up">Почему мы?</h2>

                    <div className="why-we__items">
                        <div className="why-we__item why-item" data-aos="fade-up">
                            <img src={lockImage} alt="lock" />
                            <h4 className="why-item__title">Гарантируем безопасность</h4>
                            <p className="why-item__text">
                                Мы сохраняем коммерческую тайну, и не раскрываем третьим лицам информацию о клиентах.
                            </p>
                        </div>
                        <div className="why-we__item why-item" data-aos="fade-up">
                            <img src={listCheckImage} alt="lock" />
                            <h4 className="why-item__title">Даем готовый продукт</h4>
                            <p className="why-item__text">
                                По итогу вы получаете оцифрованный существующий бизнес или план нового проекта в цифрах.
                            </p>
                        </div>
                        <div className="why-we__item why-item" data-aos="fade-up">
                            <img src={graduationHatImage} alt="lock" />
                            <h4 className="why-item__title">Заботимся, чтобы вы приобрели навык</h4>
                            <p className="why-item__text">
                                Мы заинтересованы, чтобы клиент научился работать с инструментом «Финансовая модель» и смог самостоятельно ее применять.
                            </p>
                        </div>
                    </div>
                    <div className="why-we__button" data-aos="fade-up">
                        <Button
                            isFilled
                            onClick={() => setActive(true)}
                        >
                            Хочу попробовать
                        </Button>
                    </div>
                    
                </div>

                <object data={whyWeImage} className="why-we__image"></object>
            </section>

            <section className="why-you-need">
                <div className="container">
                    <h2 className="why-we__title" data-aos="fade-up">Зачем вам финансовая модель?</h2>

                    <div className="why-you-need__items">
                        <div className="you-need__item" data-aos="fade-up">
                            <img src={paperIcon} alt="" data-aos="fade-up" />

                            <div className="you-need__text" data-aos="fade-up">
                                <h4 className="why-item__title">Глубокая диагностика бизнеса</h4>
                                <p className="why-item__text">
                                    Вы поймете, что происходит сейчас в компании с точки зрения цифр
                                </p>
                            </div>
                        </div>
                        <div className="you-need__item" data-aos="fade-up">
                            <img src={caseIcon} alt="" data-aos="fade-up" />

                            <div className="you-need__text" data-aos="fade-up">
                                <h4 className="why-item__title">Понятный план достижения финансовой цели</h4>
                                <p className="why-item__text">
                                    Вы сформируете план по выручке и показателям на год вперед и определите стратегию его достижения.
                                </p>
                            </div>
                        </div>
                        <div className="you-need__item" data-aos="fade-up">
                            <img src={folderIcon} alt="" data-aos="fade-up" />

                            <div className="you-need__text" data-aos="fade-up">
                                <h4 className="why-item__title">Формула для вашего бизнеса</h4>
                                <p className="why-item__text">
                                    Вы поймете какие вам нужны показатели, чтобы ваш бизнес достигал тех целей, которые вы хотите.
                                </p>
                            </div>
                        </div>
                        <div className="you-need__item" data-aos="fade-up">
                            <img src={moneyIcon} alt="" data-aos="fade-up" />

                            <div className="you-need__text" data-aos="fade-up">
                                <h4 className="why-item__title">Понимание, от чего зависит ваша прибыль</h4>
                                <p className="why-item__text">
                                    Вы поймете на чем вам нужно сэкономить, а во что вкладывать деньги.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <img src={whyWeBgMobile} className="why-you-need__bg mobile" />
                <img src={whyYouNeedBg} className="why-you-need__bg" alt="" />
            </section>

            <section className="what-you-get">
                <div className="container">
                    <h2 className="why-we__title" data-aos="fade-up">Что вы получите по итогу?</h2>
                </div>

                <div className="what-you-get__items">
                    <div className="get__item" data-aos="fade-up">
                        <img src={checkPurple} alt="" data-aos="fade-up" />
                        
                        <div className="get__text" data-aos="fade-up">
                            <h4>Оцифрованная воронка продаж и выручка</h4>
                            <p>Вы поймете из чего состоит ваша выручка, а главное как на нее оказывать влияние.</p>
                        </div>
                    </div>
                    <div className="get__item" data-aos="fade-up">
                        <img src={checkOrange} alt="" data-aos="fade-up" />
                        
                        <div className="get__text" data-aos="fade-up">
                            <h4>Расходы, операционная и чистая прибыль</h4>
                            <p>Вы проследите взаимосвязь между этими тремя показателями и проверите, где вы допускаете управленческие ошибки.</p>
                        </div>
                    </div>
                    <div className="get__item" data-aos="fade-up">
                        <img src={checkBlue} alt="" data-aos="fade-up" />
                        
                        <div className="get__text" data-aos="fade-up">
                            <h4>Движение денег, просчет кассовых разрывов</h4>
                            <p>Исходя из ваших целей поймете, когда может быть кассовый разрыв и сможете заранее подстраховаться.</p>
                        </div>
                    </div>
                    <div className="get__item" data-aos="fade-up">
                        <img src={checkGreen} alt="" data-aos="fade-up" />
                        
                        <div className="get__text" data-aos="fade-up">
                            <h4>Собственный капитал</h4>
                            <p>Вы узнаете стоимость вашего бизнеса, сколько денег заморожено в бизнесе, и в чем они заморожены. </p>
                        </div>
                    </div>
                    <div className="get__item" data-aos="fade-up">
                        <img src={checkOrange} alt="" data-aos="fade-up" />
                        
                        <div className="get__text" data-aos="fade-up">
                            <h4>Точка безубыточности</h4>
                            <p>Вы увидите реальный уровень необходимости в финансах для вашей компании.</p>
                        </div>
                    </div>
                    <div className="get__item" data-aos="fade-up">
                        <img src={checkPurple} alt="" data-aos="fade-up" />
                        
                        <div className="get__text" data-aos="fade-up">
                            <h4>Готовый план действий</h4>
                            <p>Вы получаете список действий, с помощью которых достигаете целей компании.</p>
                        </div>
                    </div>
                </div>

                <object data={personJuggling} className="what-you-get__person"></object>
                <img src={whatYouGetBg} className="what-you-get__bg" alt="" />
                <img src={whatYouGetBgMobile} className="what-you-get__bg mobile" />
            </section>

            <RequestSection isAudit />
        </main>
    )
}