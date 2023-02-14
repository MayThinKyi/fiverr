import React from 'react'
import logoMaker from '../images/logomaker.png'
const LogoMaker = () => {
  return (
    <div className='logoMaker'>
        <img src={logoMaker} />
        <div className='logoMakerContent'>
        <h1 className='mb-4 text-3xl font-bold text-white'><span className='font-[800] font-italic'>fiverr</span> logo maker.</h1>
        <h1 className='text-3xl font-bold text-white'>Make an incredible logo in minutes
</h1>
        <h1 className='my-4 text-lg text-white'>Pre-designed by top talent. Just add your touch.
</h1>
        <button className='px-5 py-2 font-bold text-[#446ee7] bg-white rounded text-md'>
        Try Fiverr Logo Maker
           </button>
        </div>
    </div>
  )
}

export default LogoMaker