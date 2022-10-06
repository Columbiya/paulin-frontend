import React, { MouseEvent, useState } from 'react'
import env from 'react-dotenv'
import { Partner } from '../../../schemas/Partner'
import { Star } from '../../Star/Star'
import './Partner.scss'

interface PartnerItemProps {
    partnersPage?: boolean
}

type PartnerProps = Partner & PartnerItemProps

export const PartnerItem: React.FC<PartnerProps> = ({ id, logo, link, name, partnersPage, partnersFeedback }) => {
    const [isOver, setOver] = useState<boolean>(false)

    const setAbsolute = (e: MouseEvent<HTMLDivElement>) => {
        const element = e.target as HTMLDivElement

        const offsetLeft = window.pageXOffset + element.getBoundingClientRect().left
        const top = window.pageYOffset + element.getBoundingClientRect().top

        element.style.position = 'absolute'
        element.style.top = `${top}px`
        element.style.left = `${offsetLeft}px`
    }   

    const setStatic = (e: MouseEvent<HTMLDivElement>) => {
        const element = e.target as HTMLDivElement

        element.style.position = 'static'
    }

    return (
        <>
            <div 
                className={`partner-item ${partnersPage ? 'partners-page': undefined} ${isOver ? "over": undefined}`}
                onMouseEnter={setAbsolute}
                onMouseLeave={setStatic}
            >
                    <img src={`${env.BACKEND_URL}/${logo}`} alt={name} />

                    {partnersPage && 
                        <div className="partner-item__rating">
                            <Star rating={partnersFeedback?.rating} /> 
                        </div>
                    }

                {/* <div className="fade-in">
                    <header className="partner-item__header">
                        <img src={`${env.BACKEND_URL}/${logo}`} alt={name} />

                        <div>
                            <h3 className="partner-item__name">{name}</h3>
                            <span className="partner-item__link">{link}</span>
                        </div>

                        <Star rating={partnersFeedback?.rating} />
                    </header>
                    <div className="feedbacks">
                        <h4>Отзыв клиента</h4>
                        <p>
                            {partnersFeedback?.text}
                        </p>

                        <h4>Отзыв эксперта</h4>
                        <p>
                            {partnersFeedback?.expert}
                        </p>
                    </div>  
                </div> */}
                
                
            </div>

        </>
        
    )
}