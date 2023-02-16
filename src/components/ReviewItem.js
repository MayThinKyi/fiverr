import React from 'react'
import {AiFillStar} from 'react-icons/ai'
import {AiFillLike,AiFillDislike}  from 'react-icons/ai'
const ReviewItem = () => {
  return (<div className='pt-3 pb-2'>
    <div className='flex gap-4 items-center'>
            <img class="rounded-full" style={{width:'50px',height:"50px",borderRadius:'50%',objectPosition:'center'}} src={'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/428380b5a57fe88deab8c015ce9d490a-1632824335910/29d2c14d-3036-47b2-ac7a-5434ac000b53.png'} alt="" />
            <div className=' flex flex-col '>
  <p class="font-bold text-md flex items-center text-slate-600 ">arnauldh
  </p>
  <p class=" text-md flex items-center text-black ">France
  </p>
  <div className=' flex items-center '>
    <p class="font-normal flex items-center text-yellow-400 "><AiFillStar size={18}/> 
</p>
<p class="font-normal flex items-center text-yellow-400 "><AiFillStar size={18}/> 
</p>
<p class="font-normal flex items-center text-yellow-400 "><AiFillStar size={18}/>
</p><p class="font-normal flex items-center text-yellow-400 "><AiFillStar size={18}/> 
</p><p class="font-normal flex items-center text-yellow-400 "><AiFillStar size={18}/> 5
</p>
<p class="font-normal flex items-center text-slate-600 ">    | 1 month ago
</p>

</div>
<p class="font-normal my-2 flex items-center text-slate-600 ">
Ramzika did an amazing job. He perfectly grasped my ideas and turned them into impressive artwork, with a lot of care for every details. I'll definitely contact him again as soon as I need new artworks. </p>
<div className='gap-3 mt-2 mb-4 flex items-center font-bold text-md  text-slate-600 '>
<p class="">Helpful?
  </p>
  <AiFillLike/> <p class="">Yes
  </p>
  <AiFillDislike/><p class="">No</p>
</div>
</div>

    </div>
    <hr></hr>
    </div>
  )
}

export default ReviewItem