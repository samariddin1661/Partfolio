import React from 'react'

const Navbar = () => {
  return (
    <nav className='containerr w-full h-[80px] bg-teal-700 flex justify-between items-center'>
      <div className='md:text-[20px] text-[14px] font-bold'>
        R_Samariddin.
      </div>
      <div>
        <ul className='flex gap-12'>
            <li><a href="#">Home</a></li>
            <li><a href="#">Skills</a></li>
            <li><a href="#">My Works</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
      </div>
      <div>
        <div>RU</div>
        <div>ENG</div>
      </div>
    </nav>
  )
}

export default Navbar
