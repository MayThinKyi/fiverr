import React from 'react'
import business from '../images/business.png'
import BusinessItem from './BusinessItem'
import FreelanceItem from './FreelanceItem'

const Business = () => {
    const businessItems=[
        {title:'Connect to freelancers with proven business experience'},
        {title:'Get matched with the perfect talent by a customer success manager'},
        {title:'Manage teamwork and boost productivity with one powerful workspace'},

    ]
  return (
    <div className='bg-[#0D084D] flex flex-wrap lg:flex-nowrap justify-between items-center gap-10 py-10 px-8  lg:py-20 lg:px-10'>
        <div className='lg:w-[40%]'>
            <div className='flex mb-5 items-center gap-2'>
                <h1 className='text-3xl text-white font-bold'><span className='font-[800] font-italic'>fiverr</span> Business.</h1>
                <span class="bg-[#584AFF]  text-white text-xs font-bold mr-2 px-2.5 py-0.5 rounded-full">NEW</span>

            </div>

            <h1 className='text-3xl text-white font-bold'>A business solution designed for teams</h1>
            <h1 className='text-lg my-4  text-white'>Upgrade to a curated experience packed with tools and benefits, dedicated to businesses</h1>
            {businessItems?.map((b)=>{
           return  <BusinessItem title={b.title} />
          })}
           <button className='bg-green-500 py-2 px-5 rounded text-white text-md font-bold'>
           Explore Fiverr Business
           </button>
           
        </div>
        <div className='lg:w-[55%] lg:ps-20'>
    <img src={business}/>
   
        </div>
    </div>
  )
}

export default Business