import React from 'react'
import {AiFillStar} from 'react-icons/ai'
import {FaBars} from 'react-icons/fa'
import {AiFillHeart} from 'react-icons/ai'
const Gig = () => {
  return (
    <div className='lg:mb-5 border cursor-pointer flex flex-col'>
        <img src='https://fiverr-res.cloudinary.com/t_gig_cards_web_x2,q_auto,f_auto/gigs/273166353/original/36a23dbcca5f787be43e4d27d91668808ca930ec.jpg'/>
        <div class="p-3 gap-2 flex items-center">
    <div>
    <img class="rounded-full" style={{width:'50px',height:"50px",borderRadius:'50%',objectPosition:'center'}} src={'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/7236f390739a51df0cde4e08208025db-1661900930896/2d807cf9-abb8-4e21-af5a-b1e08d8622f1.jpeg'} alt="" />

    </div>
        <div >
        <a href="#">
            <h5 class=" text-md font-bold tracking-tight text-gray-900 dark:text-white">irfacchini
</h5>
        </a>
        <p class="font-normal text-gray-700 dark:text-gray-400">Level 1 Seller</p>
        </div>
    </div>
    <p class="px-3 font-normal text-gray-700 dark:text-gray-400">A complete guide to starting a small business online
</p>
<div className='px-3 mb-4 flex items-center gap-2'>
<p class="font-normal flex items-center text-yellow-400 "><AiFillStar size={18}/> 5.0
</p>
<p class="font-normal flex items-center text-slate-400 "> (46)
</p>
</div>
<hr></hr>
<div className='py-2 px-3  text-slate-400  flex items-center justify-between'>
<div className=' flex items-center gap-2'>
<FaBars size={18}/>
<AiFillHeart size={20}/>
</div>
<div >
<div className=' flex items-center gap-2'>
<span className='text-sm'>STARTING AT</span>
<span className='text-xl text-black'>$20</span>


</div>
</div>
</div>
    </div>
  )
}

export default Gig