import React from 'react'
import checkPurple from 'assets/business-consulting/check-purple.svg'
import './YouCan.scss'

interface YouCanProps {
  text?: string
  large?: boolean
  children?: React.ReactNode
}

export const YouCan: React.FC<YouCanProps> = ({ text, large, children }) => {
  return (
    <section className="you-can">
      <div className="container">
        <div className={`you-can__inner ${large ? 'large' : undefined}`}>
          <img src={checkPurple} alt="" data-aos="fade-in" />
          <div className="you-can__text" data-aos="fade-up">
            <p>{text || children}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
