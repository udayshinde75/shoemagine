import React from 'react'
import './feature.css'
const Feature = ({title, text}) => {
  return (
    <div className="store__features-container__feature">
      <div className="store__features-container__feature-title">
      <div />
        <h2>{title}</h2>
      </div>
      <div className="store__features-container__feature-text">
        {text}
      </div>
    </div>
  )
}

export default Feature