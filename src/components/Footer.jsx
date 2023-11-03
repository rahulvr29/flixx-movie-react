import React from 'react'
import {FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa"

const Footer = () => {
  return (
    <div className="bg-[#020d18] w-full text-white p-9 flex items-center justify-between">
      <div className=' text-2xl font-bold pl-4 md:text-3xl '>
        <span>FLIXX </span>
      </div>
      <div className='flex p-2 gap-2' >
        <a href="https://www.facebook.com">
          <p className='text-xl md:text-2xl lg:text-3xl'>{<FaFacebook/>}</p>
        </a>
        <a href="https://www.twitter.com">
          <p className='text-xl  md:text-2xl lg:text-3xl'>{<FaTwitter/>}</p>
        </a>
        <a href="https://www.instagram.com">
          <p className='text-xl md:text-2xl lg:text-3xl'>{<FaInstagram/>}</p>
        </a>
      </div>
    </div>
  )
}

export default Footer