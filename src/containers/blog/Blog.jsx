import React from 'react'
import './blog.css'
import {Article} from  '../../Components'
import {article2, article3, article4, article5} from './imports'

const Blog = () => {
  return (
    <div className="store__blog section__padding" id="bestsellers">
      <div className="store__blog-heading">
        <h1 className='gradient__text'>Our Best Sellers</h1>
      </div>
      <div className="store__blog-container">
        <div className="store__blog-container_group">
          <Article imageurl={article2} sold="354 units sold in last 24 hours" title="ELevate your presence with timeless brown formal shoes."/>
          <Article imageurl={article3} sold="288 units sold in last 24 hours" title="Stride in style with our chic red dark brown sneakers"/>
          <Article imageurl={article4} sold="198 units sold in last 24 hours" title="Effortless style meets comfort in our light brown and black sneakers"/>
          <Article imageurl={article5} sold="156 units sold in last 24 hours" title="Experience elevated elegance with our stunning high heels."/>
        </div>
      </div>
    </div>
  )
}

export default Blog