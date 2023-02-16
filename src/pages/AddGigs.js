import React from 'react'

const AddGigs = () => {
  return (
    <div className='lg:py-10 lg:px-10'>
       <h1 className='text-black font-semibold text-2xl'>
      Add New Gigs
    </h1>
    <div className='flex justify-between'>
      <div className='lg:w-[40%]'>      
      <div className='my-4'>
      <h1 className='mb-2'>Title</h1>
    <input className='w-full border border-black p-2' />
      </div>
      <div className='my-4'>
      <h1 className='mb-2'>Category</h1>
    <select className='w-full border border-black p-2' >
      <option>1</option>
      <option>2</option>
       <option>3</option>
    </select>
      </div>
      <div className='my-4'>
      <h1 className='mb-2'>Cover Image</h1>
    <input type={'file'} className='w-full border border-black p-2' />
      </div>
      <div className='my-4'>
      <h1 className='mb-2'>Upload Image</h1>
    <input type={'file'} className='w-full border border-black p-2' />
      </div>
      <div className='my-4'>
      <h1 className='mb-2'>Description</h1>
    <textarea className='w-full border border-black p-2' />
      </div>
      <button className='w-full text-sm bg-green-500 py-2 px-5 rounded text-white text-md font-bold'>
    Create
           </button>
      </div>
      <div className='lg:w-[40%]'>      
      <div className='my-4'>
      <h1 className='mb-2'>Service Title</h1>
    <input className='w-full border border-black p-2' />
      </div>
      <div className='my-4'>
      <h1 className='mb-2'>Short Description</h1>
    <textarea className='w-full border border-black p-2' />
      </div>
      <div className='my-4'>
      <h1 className='mb-2'>Delivery (eg:3 days)</h1>
    <input className='w-full border border-black p-2' />
      </div>
      <div className='my-4'>
      <h1 className='mb-2'>Service Title</h1>
    <input className='w-full border border-black p-2' />
      </div>
      <div className='my-4'>
      <h1 className='mb-2'>Revision Number</h1>
      <input className='w-full border border-black p-2' />

      </div>
      <div className='my-4'>
      <h1 className='mb-2'>Add Features</h1>
      <input className='w-full border border-black p-2' />
      <input className='w-full border border-black p-2' />
      <input className='w-full border border-black p-2' />
      <input className='w-full border border-black p-2' />
      </div>
      <div className='my-4'>
      <h1 className='mb-2'>Price</h1>
      <input className='w-full border border-black p-2' />

      </div>
     
      </div>
    </div>
    </div>
  )
}

export default AddGigs