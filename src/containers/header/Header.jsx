import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import shoes from '../../assets/shoes.jpg'
const Header = () => {
  return (
    <div className="store__header section__padding" id="home">
      <div className="store__header-content">
        <h1 className='gradient__text'>Brand - Known For It's Elegance And Quality.</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum odio eum et rem id molestiae voluptatem similique totam cupiditate, quisquam sed laudantium ratione pariatur aspernatur cum, vel accusantium architecto, nulla dolorem harum magni corrupti praesentium. Nobis doloremque praesentium consectetur laudantium?</p>
        <div className="store__header-content__input">
          <input type="email" placeholder='Enter Your Email Address' />
          <button type='button'>Sign In</button>
        </div>
        <div className="store__header-content__people">
          <img src={people} alt="people" />
          <p>3000 people ordered in last 24 hours.</p>
        </div>
      </div>
      <div className="store__header-image">
        <img src={shoes} alt="shoes" />
      </div>
    </div >
  )
}

export default Header