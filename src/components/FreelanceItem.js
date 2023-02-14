import React from 'react'
import {BsCheckCircle} from 'react-icons/bs'
const FreelanceItem = ({title,text}) => {
  return (
    <div className='my-5 flex flex-col justify-center'>
        <div  className='flex items-center gap-2'>
            <BsCheckCircle/>
            <h1 className='text-xl font-bold text-slate-900'>{title}</h1>
        </div>
        <div className='mt-2'>
            <h1 className='text-xl  text-slate-600'>{text}</h1>
        </div>
    </div>
  )
}

export default FreelanceItem