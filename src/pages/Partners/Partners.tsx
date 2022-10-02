import React from 'react'
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs'
import { PartnerItem } from '../../components/PartnersList/Partner/Partner'
import { Methods, useHttp } from '../../hooks/useHttp'
import { Partner } from '../../schemas/Partner'
import { partnersStore } from '../../store/partnersStore'
import './Partners.scss'

export const Partners: React.FC = (props) => {
    const [items, loadingPartners, errorPartners] = useHttp<Partner>({link: '/partners', method: Methods.GET, useAuth: false, store: partnersStore})

    if (loadingPartners) {
        return <h1>loading</h1>
    }

    if (errorPartners) {
        console.log(errorPartners, 'errored partners')
    }

    return (
        <main className="main">
            <Breadcrumbs crumb='Партнеры и отзывы' />

            <div className="container">
                <div className="partners-page">
                    {items?.map(partner => (
                        <PartnerItem {...partner} key={partner.id} partnersPage />
                    ))}   
                </div>
            </div>
        </main>
        
    )
}