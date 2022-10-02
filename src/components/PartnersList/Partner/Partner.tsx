import React from 'react'
import env from 'react-dotenv'
import { Partner } from '../../../schemas/Partner'
import './Partner.scss'

interface PartnerItemProps {
    partnersPage?: boolean
}

type PartnerProps = Partner & PartnerItemProps

export const PartnerItem: React.FC<PartnerProps> = ({ id, logo, link, name, partnersPage }) => {
    return (
        <div className={`partner-item ${partnersPage ? 'partners-page': undefined}`}>
            <img src={`${env.BACKEND_URL}/${logo}`} alt={name} />

            {partnersPage && <div className="partner-item__rating"></div>}
        </div>
    )
}