import React, { useEffect, useState } from 'react'

const Navbar = () => {
    const [active,setActive]=useState(false);
    const isActive=()=>{
        window.addEventListener('scroll',()=>{
            window.scrollY>0? setActive(true) :setActive(false);
        })
    }
    useEffect(()=>{
        isActive();
    },[])
  return (
   <div className='sticky top-0'>
     <div class='bg-[#113119] text-white py-5 px-20 navbar flex justify-between items-center'>
        <div className='flex items-center'>
            <span className='lg:text-4xl font-bold'>fiverr</span>
            <span className='lg:text-4xl text-green-500 font-bold'>.</span>
        </div>
        <div className='navLinks'>
            <ul className='text-md cursor-pointer flex justify-between items-center gap-6 font-medium'>
                <li>Fiverr Business</li>
                <li>Explore</li>
                <li>English</li>
                <li>Sign in</li>
                <li>Become a Seller</li>
                <li><button className='border border-white py-1 px-3 rounded'>Join</button></li>
            </ul>
        </div>
    </div>
    <hr></hr>
    {active && 
     <ul className={active ? 'activeNavbar bg-white  py-2 border-y gap-2 border-bottom px-20 text-[#74767e] font-[350] text-[16px]  flex justify-between items-center' :'bg-white  py-2 border-y gap-2 border-bottom px-20 text-[#74767e] font-[350] text-[16px]  flex justify-between items-center'}>
     <li>Graphics & Design</li>
     <li>Graphics & Design</li>
     <li>Graphics & Design</li>
     <li>Graphics & Design</li>
     <li>Graphics & Design</li>
     <li>Graphics & Design</li>
     <li>Graphics & Design</li>
     <li>Graphics & Design</li>
     </ul>}
   
   </div>
  )
}

export default Navbar