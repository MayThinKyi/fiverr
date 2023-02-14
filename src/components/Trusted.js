import React from 'react'
import fb from '../images/fb.png'
import gg from '../images/gg.png'
import netflix from '../images/netflix.png'
import paypal from '../images/paypal.png'
import png from '../images/png.png'
const Trusted = () => {
  return (
    <div className=' trusted overflow-x-hidden  gap-2 md:gap-0  py-3 flex items-center justify-evenly bg-[#FAFAFA]'>
        <h1 className='hidden md:inline-flex text-[#B5B6BA] font-bold'>Trusted by:</h1>
        <img src={fb}/>
        <img src={gg}/>
        <img src={netflix}/>
        <img src={paypal}/>
        <img src={png}/>

     </div>
  )
}

export default Trusted