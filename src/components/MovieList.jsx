import React, { useEffect, useState } from 'react'
import { BsFillStarFill } from "react-icons/bs"
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const MovieList = () => {

    // SwiperCore.use([AutoPlay]);

  const [movie, setMovie] = useState([])


  const getMovieRequest =async () =>{
    const url = "https://api.themoviedb.org/3/trending/all/week?api_key=838fedcb9c14b26fce7cc5e7198f3688"
    
    const res = await fetch(url);
    const resp= await res.json();
    const data = await resp.results;

    // console.log(data)
    setMovie(data)
  }

  useEffect(()=>{
    getMovieRequest();
  }, [])

  console.log(movie);
  return (
    <div className='flex lg:-ml-10'>


          {/* <Swiper I
              modules={[Navigation, Pagination, Scrollbar, Autoplay]}
              grabCursor={true}
              spaceBetween={0}
              slidesPerView={1}
              navigation
              autoplay={true}
              pagination={{clickable:true}}
              >
          {
          movie.map((e, i) => (
          <SwiperSlide >
          {({ isActive }) => (
          <div className=''>
            <img className='flex w-[300px] h-[600px] mx-16 -my-72 mb-32 p-4 object-contain' src={`https://image.tmdb.org/t/p/w500${e.poster_path} `} alt="" />
          </div>
          )}
          </SwiperSlide>
          
          ))
        }
          </Swiper> */}

      {
        movie.map((e, i)=> (
          <div key={i.id}className="flex flex-col m-7 ml-1 p-4 md:m-1 md:ml-0 lg:-ml-[5px] ">
            <div className="">
            <img className='w-full h-[400px] object-cover' src={`https://image.tmdb.org/t/p/w500${e.poster_path} `} alt="" />
            </div>
            <div className='flex items-center px-28 font-bold text-lg'>
            <BsFillStarFill className="text-yellow-500"/>
            <p className='text-white '>  {`${e.vote_average.toFixed(1)}/10`}</p>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default MovieList;