import React from 'react'
import './possibility.css'
import product from '../../assets/products.jpg'
const Possibility = () => {
  return (
    <div className="store__products section__padding" id="products">
      <div className="store__products-image">
        <img src={product} alt="" />
      </div>
      <div className="store__products-content">
        <h1 className='gradient__text'>Elevate Every Step, Explore Our Products</h1>
        <p>
          <ul>
            <li>Signature Styles: Unique designs showcasing craftsmanship, innovation, and distinctive elements.</li>
            <li>Specialized Categories: Tailored footwear for specific needs, from sports performance to elegant formal wear.</li>
            <li>Seasonal Trends: Stay stylish with our evolving collection, featuring the latest trends for each season.</li>
            <li>Accessories and Care: Complete your experience with accessories and care products for footwear longevity and pristine condition.</li>
          </ul>
        </p>
      </div>
    </div>
  )
}

export default Possibility
