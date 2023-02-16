import React from 'react'

const LeftChatMessage = () => {
  return (
    <div className='flex  lg:w-[60%] mb-4  gap-4'>
      <img class="rounded-full" style={{width:'50px',height:"50px",borderRadius:'50%',objectPosition:'center'}} src={'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/428380b5a57fe88deab8c015ce9d490a-1632824335910/29d2c14d-3036-47b2-ac7a-5434ac000b53.png'} alt="" />
    <h1 className='bg-slate-200 text-black rounded-bl-xl   rounded-tr-xl   rounded-br-xl py-3 px-3'>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
    </h1>

    </div>
  )
}

export default LeftChatMessage