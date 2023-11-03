import React from 'react'
import { BiSearch } from 'react-icons/bi'
const Searchbar = () => {
  return (
    <div className="bg-[#020d18] w-full text-white md:text-2xl">
      <form className='flex flex-col rounded p-10 items-center justify-center'>
        <div className='flex m-2 p-1 md:m-4 md:p-4'>
            <input className='px-2' type="radio" id="movie" name="type" value="movie" checked />
            <label className='px-2' for="movies">Movies</label>
            <input className='px-' type="radio" id="tv" name="type" value="tv" />
            <label className='px-2' for="shows">TV Shows</label>
        </div>
        <div className="search-flex">
            <input
            className='p-2 outline-white bg-transparent text-white'
              type="text"
              name="search-term"
              id="search-term"
              placeholder="Enter search term"
            />
            <button className="btn p-[11.5px]  bg-[#f1c40f]" type="submit">
              <i className="text-black">{<BiSearch/>}</i>
            </button>
          </div>
      </form>
    </div>
  )
}

export default Searchbar;