import React from 'react'
import FreelanceItem from './FreelanceItem'

const Freelance = () => {
    const freelanceItems=[
        {title:'The best for every budget',
        text:"Find high-quality services at every price point. No hourly rates, just project-based pricing."
    },
    {title:'Quality work done quickly',
    text:"Find the right freelancer to begin working on your project within minutes."
},
{title:'Protected payments, every time',
text:"Always know what you'll pay upfront. Your payment isn't released until you approve the work."
},
{title:'24/7 support',
text:"Questions? Our round-the-clock support team is available to help anytime, anywhere."
},
    ]
  return (
    <div className='freelance gap-10 py-20 px-5 lg:py-20 lg:px-10 bg-[#F1FDF7] flex flex-wrap lg:flex-nowrap justify-between items-center'>
        <div className='lg:w-[40%]'>
            <h1 className='text-3xl text-slate-800 font-bold'>A whole world of freelance talent at your fingertips</h1>
          {freelanceItems?.map((f)=>{
           return  <FreelanceItem title={f.title} text={f.text} />
          })}
           
        </div>
        <div className=' w-[100%] lg:w-[55%] lg:ps-20'>
    
    <video controls width="90%" className='rounded'>
    <source src="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/vmvv3czyk2ifedefkau7" type="video/webm"/>



   
</video>
        </div>
    </div>
  )
}

export default Freelance