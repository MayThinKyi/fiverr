import React from 'react'
import g1 from '../images/g1.png'
import g2 from '../images/g2.png'
import g3 from '../images/g3.png'


const Guides = () => {
    const guides=[
        {img:g1,
        title:"Start an online business and work from home",
    text:"A complete guide to starting a small business online"},
    {img:g2,
        title:"Start an online business and work from home",
    text:"A practical guide to understand what is digital marketing"},
    {img:g3,
        title:"Create a logo for your business",
    text:"A step-by-step guide to create a memorable business logo"},
    ]
  return (
    <div className='px-5 py-8 lg:py-16 lg:px-10'>
       <h1 className='mb-8 text-3xl lg:text-4xl font-bold text-[#404145]'>Fiverr guides</h1>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 md:gap-8'>
          {guides?.map((g)=>{
            return <div className='flex flex-col mb-5 lg:mb-0'>
            <img src={g.img} /> 
            <h5 class="mt-4 mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">{g.title}</h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">{g.text}</p>

      </div>
          })}
          
        </div>
    </div>
  )
}

export default Guides