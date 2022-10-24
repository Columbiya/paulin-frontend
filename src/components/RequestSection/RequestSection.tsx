import React from 'react'
import requestImage from '../../assets/home/request-image.svg'
import requestBgMobile from '../../assets/home/request-bg-mobile.svg'
import requestPersonMobile from '../../assets/home/request-person-mobile.svg'
import { RequestForm } from '../RequestForm/RequestForm'
import './RequestSection.scss'

interface RequestSectionProps {
    isPopup?: boolean
}

export const RequestSection: React.FC<RequestSectionProps> = ({ isPopup }) => {
    const popupClasses = isPopup ? "request--popup": undefined

    return (
        <section className={"request " + popupClasses}>
            <div className="container">
                <h2 className="education__title" data-aos={isPopup ? "": "fade-right"}>Оставьте заявку</h2>
                
                <div className="request__inner" data-aos={isPopup ? "": "fade-right"}>
                    <RequestForm isPopup={isPopup} />
                </div>
            </div>

            <img src={requestImage} className="request__image" alt="" />
            <div className="request__bg mobile">
                <img src={requestBgMobile} alt="" />
            </div>
            <img src={requestPersonMobile} className="request__person mobile" alt="" />
        </section>
    )
}