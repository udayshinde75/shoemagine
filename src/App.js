import React from 'react'

import { Footer, Blog, Possibility, Features, ShoeSTORE, Header } from './containers'
import { CTA, Brand, Navbar } from './Components'
import './App.css'

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <ShoeSTORE />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App 