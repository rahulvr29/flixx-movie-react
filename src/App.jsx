import React from 'react'
import { Footer, HeroSection, NavbarSection, PopularMovie, Searchbar } from './components'


function App() {
  

  return (
    <>
      <div className='overflow-hidden'>
        <NavbarSection/>
        <HeroSection/>
        <Searchbar/>
        <PopularMovie/>
        <Footer/>
      </div>
    </>
  )
}

export default App
