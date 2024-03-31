import React, { useState } from 'react'

//icons
import { HiOutlineBars2 } from "react-icons/hi2";

const Navbar = () => {

  const [toggle,setToggle]=useState(false)
  console.log(toggle);
  return (
    <nav className='containerr fixed backdrop-blur w-full h-[80px]  flex justify-between items-center'>
      <div className=' md:text-[25px] text-[14px] font-bold font-serif '>
        <p className='flex items-end '><p className=' text-blue-800 md:text-[30px] text-[18px]'>S</p>am <p className=' text-blue-800 md:text-[30px] text-[18px]'>AR</p> iddin.</p>
      </div>
      
        <ul className={`flex right-0 top-[80px] h-[100vh] py-4 flex-col gap-12 text-center text-[#6b7688] absolute bg-[white] w-[50%] font-[600] uppercase md:flex-row ${toggle ? 'right-0' : 'right-[100vh'}   md:bg-[transparent] md:w-auto md:h-auto md:static`}>
            <li><a href="#" className='links'>Home</a></li>
            <li><a href="#" className='links'>Skills</a></li>
            <li><a href="#" className='links'>My Works</a></li>
            <li><a href="#" className='links'>Contact</a></li>
        </ul>
      
      <div className='flex gap-2' >
        <div>RU</div>/
        <div>ENG</div>
      
      <div className='bg-[#313bac] rounded-full text-white md:text-[20px] text-[16px]  p-1 md:hidden block' onClick={()=>setToggle(!toggle)}>
        <HiOutlineBars2/>
      </div>
      </div>
    </nav>
  )
}

export default Navbar
