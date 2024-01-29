import React from 'react'
import './brand.css'
import { ajio, aliexpress, amazon, flipcart, shopee } from './import'
const Brand = () => {
  return (
    <div className="store__brand section__padding">
      <div className='brand__name'>
        <img src={ajio} alt="ajio" />
      </div>
      <div className='brand__name'>
        <img src={aliexpress} alt="aliexpress" />
      </div>
      <div className='brand__name'>
        <img src={amazon} alt="amazon" />
      </div>
      <div className='brand__name'>
        <img src={flipcart} alt="flipcart" />
      </div>
      <div className='brand__name'>
        <img src={shopee} alt="shopee" />
      </div>
    </div>
  )
}

export default Brand