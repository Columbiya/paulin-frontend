import React, { useEffect } from 'react'
import './Popup.scss'

interface PopupProps {
  children: React.ReactNode
  isWhite?: boolean
  isWide?: boolean
  onHide: () => void
}

export const Popup: React.FC<PopupProps> = ({
  children,
  onHide,
  isWhite,
  isWide,
}) => {
  const wideClasses = isWide ? 'popup--wide' : undefined
  const whiteClasses = isWhite ? 'black-background--white' : undefined

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
    <div className={`black-background ${whiteClasses}`}>
      <div className={`popup ${wideClasses}`}>{children}</div>
    </div>
  )
}
