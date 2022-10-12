import React from 'react'
import requestImage from '../../assets/home/request-image.svg'
import { RequestForm } from '../RequestForm/RequestForm'
import './RequestSection.scss'

export const RequestSection: React.FC = (props) => {
    return (
        <section className="request">
            <div className="container">
                <h2 className="education__title" data-aos="fade-right">Оставьте заявку</h2>
                
                <div className="request__inner" data-aos="fade-right">
                    <RequestForm />
                </div>
            </div>

            <img src={requestImage} className="request__image" alt="" />
        </section>
    )
}