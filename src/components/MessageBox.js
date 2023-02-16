import React from 'react'

const MessageBox = () => {
  return (
    <div className='flex  items-center lg:px-[140px] lg:py-10  gap-10 '>
        <textarea className='border rounded py-3 px-2 outline-none ' rows={3} cols={70} placeholder='Message...'>
        </textarea>
        <button className='h-[max-content] text-sm bg-green-500 py-2 px-5 rounded text-white text-md font-bold'>
        Message
           </button>
    </div>
  )
}

export default MessageBox