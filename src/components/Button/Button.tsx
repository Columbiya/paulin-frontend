import React, { useState } from 'react'
import './Button.scss'

interface ButtonProps {
    children: React.ReactNode
    isFilled?: boolean
    isWhite?: boolean
    isGradientBordersWithWhiteBack?: boolean
    soon?: boolean
    disabled?: boolean
    onClick?: () => void
    style?: any
}

export const Button: React.FC<ButtonProps> = ({ children, isFilled, isWhite, 
                                                isGradientBordersWithWhiteBack, soon, disabled, onClick, style}) => {
    const [isOver, setOver] = useState<boolean>(false)

    const filledClass = isFilled ? 'filled': 'hollow'
    const whiteClass = isWhite ? 'white': undefined
    const gradientBordersClass = isGradientBordersWithWhiteBack ? 'gradient-borders': undefined

    const soonEnterHandler = () => {
        setOver(true)
    }

    const soonLeaveHandler = () => {
        setOver(false)
    }

    return (
        <button 
            className={`button ${filledClass} ${whiteClass} ${gradientBordersClass}`} 
            onMouseEnter={soonEnterHandler}
            onMouseLeave={soonLeaveHandler}
            disabled={disabled}
            onClick={onClick}
            style={style}
        >
            {soon && isOver ? "soon": children}
        </button>
    )
} 