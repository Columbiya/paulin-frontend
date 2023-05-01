import React, { useEffect, useRef, useState } from 'react'
import env from 'react-dotenv'
import { Partner } from 'schemas/Partner'
import { Star } from 'components/Star/Star'
import './Partner.scss'

interface PartnerItemProps {
    partnersPage?: boolean
}

type PartnerProps = Partner & PartnerItemProps

export const PartnerItem: React.FC<PartnerProps> = ({ id, logo, link, name, partnersPage, partnersFeedback }) => {
    const ref = useRef<HTMLDivElement>(null)
    const [isOver, setOver] = useState<boolean>(false) 
    const [windowWidth, setWindowWidth] = useState(0)
    
    useEffect(() => {
        setWindowWidth(window.innerWidth)
    }, [window.innerWidth])

    useEffect(() => {
        if (windowWidth < 1000) {
            if (ref.current) {
                const height = ref.current?.clientHeight
                console.log(height)
                ref.current.dataset.height = height.toString()
            }
        }
    }, [windowWidth])

    return (
        <>
            <div 
                className={`partner-item ${partnersPage ? 'partners-page': undefined} ${isOver ? "over": undefined} ${!partnersFeedback || !partnersPage ? 'no-feedback': undefined}`}
                onMouseEnter={() => setOver(true)}
                onMouseLeave={() => setOver(false)}
            >
                    <img src={`${env.BACKEND_URL}:5000/${logo}`} alt={name} />

                    {partnersPage && 
                        <div className="partner-item__rating">
                            {partnersFeedback && <Star rating={partnersFeedback?.rating} /> }
                        </div>
                    }
                    
                {/* не показывать если нет фидбэка */}

                {partnersFeedback && partnersPage && 
                    <div 
                        className={`fade-in ${isOver ? 'visible': undefined}`} 
                        ref={ref}
                    >
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
                                {partnersFeedback?.text.split('\n').map(p => <p>{p}</p>)}
                            </p>
                            <h4>Отзыв эксперта</h4>
                            <p>
                                {partnersFeedback?.expert.split('\n').map(p => <p>{p}</p>)}
                            </p>
                        </div>  
                    </div>
                }

                
                
                
            </div>

        </>
        
    )
}