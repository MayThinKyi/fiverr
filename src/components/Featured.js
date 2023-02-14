import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
const Featured = () => {
  return (
    <div className='featured lg:px-10 px-5 pt-[120px] lg:py-[100px] '>
        <div className='flex flex-col justify-center'>
            <h1 className='text-white text-4xl lg:text-5xl font-bold'>Find the perfect <em className='font-italic' >freelance</em></h1>
            <h1 className='text-white mt-3 mb-7 text-4xl lg:text-5xl font-bold'>services for your business</h1>
        <div className='featuredInputContainer  mb-6  flex items-center rounded'>
             <AiOutlineSearch/>
             <input className=' py-3 px-2 lg:px-5 lg:w-[40vw]' placeholder='"Try "building mobile app""' />
             <button className='bg-green-500 text-md font-bold py-3 px-5 text-white'>Search</button>
        </div>
        <div className='hidden lg:flex items-center lg:gap-3 '>
    <span className='text-white mr-4 font-semibold'>Popular:</span>
    <span  className='border rounded-2xl text-white text-sm font-semibold border-white px-3 py-2'>Website Design</span>
    <span className='border rounded-2xl text-white text-sm font-semibold border-white px-3 py-2'>Website Design</span>
    <span className='border rounded-2xl text-white text-sm font-semibold border-white px-3 py-2'>Website Design</span>
    <span className='border rounded-2xl text-white text-sm font-semibold border-white px-3 py-2'>Website Design</span>
        </div>
        </div>
    </div>
  )
}

export default Featured