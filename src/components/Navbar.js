import React from 'react'

const Navbar = () => {
  return (
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
  )
}

export default Navbar