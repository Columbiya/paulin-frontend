import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { scrollToTopAndNavigate } from '../../helpers/scrollToTopAndNavigate'
import { PagesRoutes } from '../../routes'
import './Breadcrumbs.scss'

interface CrumbOptions {
    name: string
    path: PagesRoutes | null
}

interface BreadcrumbsProps {
    crumb: string | CrumbOptions[]
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ crumb }) => {
    const navigate = useNavigate()
    
    const scrollAndNavigate = (route: PagesRoutes) => {
        return () => scrollToTopAndNavigate(() => navigate(route))
    }
    
    return (
        <div className="breadcrumbs">
            <div className="container">
                <span><a onClick={scrollAndNavigate(PagesRoutes.MAIN)}>Paulin Consulting</a></span>
                
                {Array.isArray(crumb) ?
                    crumb.map(c => (
                        <>
                            <span className="breadcrumbs__separator">/</span>
                            <span>
                                <a onClick={c.path ? scrollAndNavigate(c.path): undefined}>{c.name}</a>
                            </span>
                        </>
                    )):

                    <>
                        <span className="breadcrumbs__separator">/</span>

                        <span>{crumb}</span>
                    </>
                }
            </div>
        </div>
    )
}