import React from 'react'

const TestmonialItem = ({img,title,companyImg,text}) => {
  return (
    <div className=' testmonial flex flex-wrap lg:flex-nowrap items-center justify-between'>
        <img className='rounded lg:w-[35%]' src={img} />
        <div className='lg:w-[60%] flex flex-col  '>
        <div className='flex items-center flex-wrap lg:flex-nowrap gap-3 '>
            <h1 className='text-[#74767e] mt-10 lg:mt-20  text-xl lg:text-2xl'>{title} </h1>
            <img className='companyImg sm:mt-10 md:mt-20' src={companyImg} />
        </div>
          <h1 className='text-xl lg:text-2xl mb-3 lg:my-3 text-black'>{text}</h1>
        </div>
    </div>
  )
}

export default TestmonialItem