import React from 'react'
import './features.css'
import { Feature } from '../../Components'
const featuresData = [
  {
    title: 'Innovative Crafting',
    text: 'Elevate your style with shoes meticulously designed for innovation, seamlessly blending cutting-edge features redefine fashion and functionality.'
  },
  {
    title: 'Unparalleled Comfort',
    text: 'Our commitment extends to prioritizing comfort. technology used ensures every step is a plush experience, offering unparalled comfort and support.'
  },
  {
    title: 'Timeless Durability',
    text: 'Stride confidently into the future with footwear built to last. Our shoes boast durability that stands the text of time, ensuring lasting quality.'
  },
  {
    title: 'Style meets Substance',
    text: 'Unleash a new era of walking experience where style meets substance. Our every pair embodies quality craftsmanship, symbolizing innovation'
  }
]
const Features = () => {
  return (
    <div className="store__features section__padding section__margin" id='features'>
      <div className="store__features-heading">
        <h1 className="gradient__text">Step into the Future of footwear: where every step Echoes Unrivaled Comfort and Unprecedented Style Excellence</h1>
        <p>Step Into Innovation, Stride in Comfort.</p>
      </div>
      <div className="store__feature-container">
        {featuresData.map((item) => (
          <Feature title={item.title} text={item.text}/>
        ))}
      </div>
    </div>
  )
}

export default Features