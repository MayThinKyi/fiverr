import React from 'react'
import testimonial1 from '../images/testimonial1.png'

const FreelancerProjectItem = ({personImg,img,title,text}) => {
  return (
   
<div class="w-[275px] bg-white border border-gray-200 rounded shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
    <img class="rounded-t-lg  h-[275px]" src={img} alt="" />
    </a>
    <div class="p-3 gap-2 flex items-center">
    <div>
    <img class="rounded-full" style={{width:'50px',height:"50px",borderRadius:'50%',objectPosition:'center'}} src={personImg} alt="" />

    </div>
        <div>
        <a href="#">
            <h5 class=" text-md font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        </a>
        <p class="font-normal text-gray-700 dark:text-gray-400">{text}</p>
        </div>
       
       
    </div>
</div>

  )
}

export default FreelancerProjectItem