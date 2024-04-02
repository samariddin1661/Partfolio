import React from 'react'

const Header = () => {
  return (
    <div className='bg-[#edf2f8] w-full h-[100vh] '>

        <div className='flex flex-col max-w-80 items-end gap-10 '>
            <div className='flex w-full max-w-[300px] justify-center  md:gap-12 items-center bg-white rounded-[10px] shadow-lg px-[48px] py-[13px]' >
                <p className='text-[40px]'>👋</p>
                <p className='flex flex-col'>
                    <span className='text-slate-300 text-[13px]'>Hello, I am</span>
                    <span className='font-bold text-[22px]'>Samariddin</span>
                </p>
            </div>
            <div className='max-w-[270px] p-4 rounded-[10px] shadow-lg bg-white'>FRONTEND/REACT DEVELOPER</div>
            
            {/* <button className='max-w-[250px] text-white p-3 rounded-[10px] shadow-lg bg-blue-700'>Download CV</button> */}
            <button type="button" class="text-white bg-[#313bac] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-7 py-4 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Download CV</button>
        </div>
    </div>
  )
}

export default Header
