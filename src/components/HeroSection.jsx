import React from 'react'
import MovieList from './MovieList'

const HeroSection = () => {
  return (
    <section className="bg-[url('https://6540e22a1a365e4c570b0a83--beautiful-kashata-592773.netlify.app/images/showcase-bg.jpg')] bg-no-repeat bg-center bg-cover p-80 px-0 relative">
      <h2 className="my-5 text-center uppercase text-white font-bold absolute top-14 left-[27%] text-3xl lg:left-[45%] md:left-[40%]">Now Playing</h2>
      <div className="swiper absolute top-[20%] left-[10%] px-5 overflow-hidden">
        <div className="swiper-wrapper">
            <MovieList />
        </div>
      </div>
    </section>
  )
}

export default HeroSection