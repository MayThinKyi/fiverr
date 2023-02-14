import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [active,setActive]=useState(false);
    const user={
        id:1,
        username:'May Thin Kyi',
        isSeller:true
    };
    const isActive=()=>{
        window.addEventListener('scroll',()=>{
            window.scrollY>0? setActive(true) :setActive(false);
        })
    }
    
        const [isOpen, setOpen] = useState(false);
      
        const handleDropDown = () => {
          setOpen(!isOpen);
        };
    useEffect(()=>{
        isActive();
    },[])
  return (
   <div className='bg-[#003C1A] overflow-x-hidden sticky top-0'>
     <div className=' text-white py-5 px-20 navbar flex justify-between items-center'>
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
                {!user?.isSeller && <li>Become a Seller</li>}
                
               
                <div className="dropdown">
      <button
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
        onClick={handleDropDown}
      >
       {user?.username}
        <svg
          className="ml-2 w-4 h-4"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>

      <div
        id="dropdown"
        className={`relative z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <ul className="dropdownItem z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow ">
         {user?.isSeller && <>
            <li
            >
              <Link to={'/gigs'} className="block  text-black py-2 px-4 hover:bg-gray-100">
                Gigs
              </Link>
            </li>   <li
            >
              <Link to={'/add-gigs'} className="block  text-black py-2 px-4 hover:bg-gray-100">
              Add new Gigs
              </Link>
            </li></>}
            <li
            >
              <Link to={'/orders'} className="block  text-black py-2 px-4 hover:bg-gray-100">
              Orders
              </Link>
            </li>
            <li
            >
              <Link to={'/messages'} className="block  text-black py-2 px-4 hover:bg-gray-100">
              Messages
              </Link>
            </li>
            <li
            >
              <a href="#" className="block  text-black py-2 px-4 hover:bg-gray-100">
              Logout
              </a>
            </li>
        </ul>
      </div>
    </div>

               
                <li><button className='border border-white py-1 px-3 rounded'>Join</button></li>
            </ul>
        </div>
    </div>
    
    {active && <><hr></hr>
     <ul className={active ? 'activeNavbar bg-white  py-2 border-y gap-2 border-bottom px-5 text-[#74767e] font-[350] text-[16px]  flex justify-between items-center cursor-pointer z-9999' :'bg-white cursor-pointer  z-9999 py-2 border-y gap-2 border-bottom px-20 text-[#74767e] font-[350] text-[16px]  flex justify-between items-center'}>
     <li>Graphics & Design</li>
     <li>Digital Marketing</li>
     <li>Writing & Translation</li>
     <li>Video & Animation</li>
     <li>Music & Audio</li>
     <li>Programming & Tech</li>
     <li>Business</li>
     <li> AI Services</li>
    
   
     </ul></> }
   
   </div>
  )
}

export default Navbar