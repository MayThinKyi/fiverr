import React from 'react'
import {BsCheckCircle} from 'react-icons/bs'

const BusinessItem = ({title}) => {
  return (
    <div className='my-5 flex flex-col justify-center'>
        <div  className='flex items-center gap-2'>
            <BsCheckCircle className=' text-slate-100'/>
            <h1 className='text-md text-white'>{title}</h1>
        </div>
       
    </div>
  )
}

export default BusinessItem