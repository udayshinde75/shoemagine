import React from 'react'
import './shoeStore.css'
import { Feature } from '../../Components'
const ShoeSTORE = () => {
  return (
    <div className="store__shoestore gradient__bg section__margin" id='About'>
      <div className="store__shoestore-feature">

      </div>
      <div className="store__shoestore-heading">
        <h1 className="gradient__text">The Shoemagine Legacy. Walking Through Time.</h1>
        <h3>Crafting Every Step with Passion.</h3>
      </div>
      <div className="store__features-container">
        <Feature title="partners" text="Collaborating with industry leaders, we forge alliances that redefine footwear excellence, ensuring our commitment to innovation and quality remains unmatched." />
        <Feature title="products" text="Discover our diverse collection -- where style harmonizes with technology, creating footwear masterpieces. From fashion-forward designs to ergonomic brilliance." />
        <Feature title="stores" text="Embark on a sensory journey at our flagship stores -- immersive spaces where footwear elegance meets personalised service, creating an unparalleled shopping experience" />
        <Feature title="upcoming" text="Exciting horizons await! Stay tuned for upcoming releases, where pioneering designs meet functionality, redefining the future of footwear fashion. Join us on this journey." />

      </div>
    </div>
  )
}

export default ShoeSTORE