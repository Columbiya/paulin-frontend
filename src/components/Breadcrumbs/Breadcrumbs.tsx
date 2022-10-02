import React from 'react'
import './Breadcrumbs.scss'

interface BreadcrumbsProps {
    crumb: string
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ crumb }) => {
    return (
        <div className="breadcrumbs">
            <div className="container">
                <span>Paulin Consulting</span>
                /
                <span>{crumb}</span>
            </div>
        </div>
    )
}