import React from 'react'

const NavbarSection = () => {
  return (
    <div className="w-full flex bg-[#020d18] py-5 px-5 lg:px-24 ">
      <div className="logo text-[25px] font-bold uppercase lg:text-3xl "><a href="/" className="text-white">FLIXX</a></div>
        <nav className='ml-[40%] md:ml-[65%] lg:ml-[75%]'>
          <ul className="flex gap-8">
            <li className="flex ">
              <a className="nav-link text-[#f1c40f] font-bold text-[16px] lg:text-2xl " href="/">Movies</a>
            </li>
            <li>
              <a className='nav-link text-white text-[16px] font-bold hover:text-[#f1c40f] lg:text-2xl ' href='/shows'>TV Shows</a>
            </li>
          </ul>
        </nav>
    </div>
  )
}

export default NavbarSection