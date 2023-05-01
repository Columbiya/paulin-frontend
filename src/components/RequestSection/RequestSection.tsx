import React from 'react'
import requestImage from 'assets/home/request-image.svg'
import requestBgMobile from 'assets/home/request-bg-mobile.svg'
import requestPersonMobile from 'assets/home/request-person-mobile.svg'
import { RequestForm } from 'components/RequestForm/RequestForm'
import './RequestSection.scss'

interface RequestSectionProps {
  isPopup?: boolean
  onHide?: () => void
  isAudit?: boolean
}

export const RequestSection: React.FC<RequestSectionProps> = ({
  isPopup,
  onHide,
  isAudit,
}) => {
  const popupClasses = isPopup ? 'request--popup' : undefined

  return (
    <section className={'request ' + popupClasses}>
      <div className="container">
        <h2 className="education__title" data-aos={isPopup ? '' : 'fade-right'}>
          {isAudit ? 'Получите бесплатную консультацию' : 'Оставьте заявку'}

          {isAudit && (
            <span className="education__subtitle">
              и узнайте: нужна ли вам финансовая модель
            </span>
          )}
        </h2>

        <div className="request__inner" data-aos={isPopup ? '' : 'fade-right'}>
          <RequestForm isPopup={isPopup} onHide={onHide} />
        </div>
      </div>

      <img src={requestImage} className="request__image" alt="" />
      <div
        className="request__bg mobile"
        style={isAudit ? { top: 100 } : undefined}>
        <img src={requestBgMobile} alt="" />
      </div>
      <img
        src={requestPersonMobile}
        className="request__person mobile"
        alt=""
        style={isAudit ? { top: 100 } : undefined}
      />
    </section>
  )
}
