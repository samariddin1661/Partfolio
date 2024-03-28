import React from 'react'

//icons
import { HiOutlineBars2 } from "react-icons/hi2";

const Navbar = () => {
  return (
    <nav className='containerr fixed backdrop-blur w-full h-[80px]  flex justify-between items-center'>
      <div className=' md:text-[25px] text-[14px] font-bold font-serif '>
        <p className='flex items-end '><p className=' text-blue-800 md:text-[30px] text-[18px]'>S</p>am <p className=' text-blue-800 md:text-[30px] text-[18px]'>AR</p> iddin.</p>
      </div>
      <div>
        <ul className='flex gap-12 text-[#6b7688] font-[600] uppercase'>
            <li><a href="#" className='links'>Home</a></li>
            <li><a href="#" className='links'>Skills</a></li>
            <li><a href="#" className='links'>My Works</a></li>
            <li><a href="#" className='links'>Contact</a></li>
        </ul>
      </div>
      <div className='flex'>
        <div>RU</div>/
        <div>ENG</div>
      </div>
      <div className='bg-[#313bac] rounded-full text-white md:text-[20px] text-[16px]  p-1 md:hidden block'><HiOutlineBars2/></div>
    </nav>
  )
}

export default Navbar
