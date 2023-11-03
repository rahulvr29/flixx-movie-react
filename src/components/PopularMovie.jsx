import React, { useEffect, useState } from 'react'

const PopularMovie = () => {

  const [movie, setMovie] = useState([])


  const getMovieRequest =async () =>{
    const url = "https://api.themoviedb.org/3/trending/all/week?api_key=838fedcb9c14b26fce7cc5e7198f3688"
    
    const res = await fetch(url);
    const resp= await res.json();
    const data = await resp.results;

    console.log(data)
    setMovie(data)
  }

  useEffect(()=>{
    getMovieRequest();
  }, [])
  return (
    <section className='bg-[#020d18] w-full text-white'>
      <h2 className='text-2xl font-bold text-center p-4 md:text-4xl'>Popular Movie</h2>
      <div className=''>
      {
        movie.map((e, i)=> (
          <div className='bg-[#04376b]  mx-14 md:mx-40 lg:mx-[34%] ' key={i.id} >
            <div className="p-1 ml-1 mt-5 md:ml-9 ">
            <img className='w-[300px] h-[400px] md:w-[370px] md:h-[500px] md:mt-6 object-cover' src={`https://image.tmdb.org/t/p/w500${e.poster_path} `} alt="" />
            <div>
            <p className='text-xl font-semibold md:text-2xl md:font-bold lg:text-4xl lg:p-1 '>{e.title}</p>
            <p className='text-xl font-semibold md:text-2xl md:font-bold lg:text-4xl lg:p-1'>{`Release:${e.release_date}`}</p>
            </div>
            </div>
          </div>
        ))
      }
      </div>
    </section>
  )
}

export default PopularMovie