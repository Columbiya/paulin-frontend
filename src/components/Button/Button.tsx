import React from 'react'
import './Button.scss'

interface ButtonProps {
    children: React.ReactNode
    isFilled?: boolean
    isWhite?: boolean
    isGradientBordersWithWhiteBack?: boolean
}

export const Button: React.FC<ButtonProps> = ({ children, isFilled, isWhite, isGradientBordersWithWhiteBack }) => {
    const filledClass = isFilled ? 'filled': 'hollow'
    const whiteClass = isWhite ? 'white': undefined
    const gradientBordersClass = isGradientBordersWithWhiteBack ? 'gradient-borders': undefined

    return (
        <button className={`button ${filledClass} ${whiteClass} ${gradientBordersClass}`}>
            {children}
        </button>
    )
} 