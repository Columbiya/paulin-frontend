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

    return (
        <>
            <div 
                className={`partner-item ${partnersPage ? 'partners-page': undefined} ${isOver ? "over": undefined} ${!partnersFeedback ? 'no-feedback': undefined}`}
                onMouseEnter={() => setOver(true)}
                onMouseLeave={() => setOver(false)}
            >
                    <img src={`${env.BACKEND_URL}:5000/${logo}`} alt={name} />

                    {partnersPage && 
                        <div className="partner-item__rating">
                            {partnersFeedback && <Star rating={partnersFeedback?.rating} /> }
                        </div>
                    }
                    
                {/* не показывать если нет фидбака */}

                {partnersFeedback && <div className={`fade-in ${isOver ? 'visible': undefined}`}>
                    <header className="partner-item__header">
                        <img src={`${env.BACKEND_URL}:5000/${logo}`} alt={name} />

                        <div className="partner-item__info">
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
                </div>}

                
                
                
            </div>

        </>
        
    )
}