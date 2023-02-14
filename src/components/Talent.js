import React from 'react'
import talent from '../images/talent.png'
const Talent = () => {
  return (
    <div className='talent'>
        <img src={talent}/>
        <div className='talentContent'>
        <h1 className='text-3xl font-bold text-white lg:text-5xl'>Find the talent needed to<br></br>get your business growing.
</h1>
<button className='px-5 py-2 mt-6 font-bold text-white bg-green-500 rounded lg:mt-10 text-md'>
Get Started
           </button>
        </div>
    </div>
  )
}

export default Talent