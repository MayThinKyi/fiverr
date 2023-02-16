import React from 'react'
import {IoIosArrowForward} from 'react-icons/io'
import Gig from '../components/Gig'
const Category = () => {
  return (
    <div className='py-10 px-8  lg:py-10 lg:px-10'>
         <div className='mb-4 flex items-center gap-2'>
        <h3 className='text-sm'>FIVERR </h3>
             <IoIosArrowForward/>
            <h3 className='text-sm'>GRAPHICS & DESIGN </h3>
            <IoIosArrowForward/>
    </div>
    <h1 className='text-black font-semibold text-3xl'>AI Artists</h1>
    <p className='text-slate-600  text-lg'>Explore the boundaries of art and technology with Fiverr's AI artists</p>
    <div className='my-6 flex items-center justify-between'>
    <div className=' flex items-center gap-2 '>
        <h3 className='text-md'>Budget </h3>
             <input  className='border rounded px-2 py-1' placeholder='Min'/>
             <input className='border rounded px-2 py-1' placeholder='Max'/>
             <button className='bg-green-500 py-2 px-5 rounded text-white text-sm font-bold'>
          Apply
           </button>
      <div/>   
      </div>
      <div className=' flex items-center gap-2'>
      <h3 className='text-md'>Sort by </h3>
        <select className='border rounded px-2 py-1'>
          <option>Best Selling</option>
          <option>Recommended</option>
          <option>Newest Arrivals</option>
        </select>
      </div>
      </div>
    <div className='pt-6 lg:gap-6  grid lg:grid-cols-4'>
    <Gig/>
    <Gig/>
    <Gig/><Gig/>
    <Gig/>
    <Gig/><Gig/><Gig/>
    </div>
    </div>
   
  )
}

export default Category