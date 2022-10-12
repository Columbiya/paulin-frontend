import React, { useEffect } from 'react'
import './Popup.scss'

interface PopupProps {
    children: React.ReactNode
    onHide: () => void
}

export const Popup: React.FC<PopupProps> = ({children, onHide}) => {
    
    useEffect(() => {
        const hidePopup = (e: MouseEvent) => {
            const element = e.target as HTMLElement

            if (element.classList.contains('black-background')) {
                onHide()
            }
        }

        setTimeout(() => {
            document.body.addEventListener('click', hidePopup)
        }, 1000)

        return () => document.body.removeEventListener('click', hidePopup)
    }, [onHide])

    return (
        <div className="black-background">
            <div className="popup">
                {children}
            </div>
        </div>
    )
}