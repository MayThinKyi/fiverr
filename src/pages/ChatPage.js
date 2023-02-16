import React from 'react'
import {IoIosArrowForward} from 'react-icons/io'
import LeftChatMessage from '../components/LeftChatMessage'
import MessageBox from '../components/MessageBox'
import MessagesContainer from '../components/MessagesContainer'
import RightChatMessage from '../components/RightChatMessage'

const ChatPage = () => {
  return (
    <div className='py-5 px-8  lg:py-5 lg:px-10'>
         <div className='mb-4 flex  gap-2'>
        <h3 className='text-sm'>Messenger </h3>
             <IoIosArrowForward/>
            <h3 className='text-sm'>John Doe </h3>
            <IoIosArrowForward/>
    </div>
    <MessagesContainer/>
    <MessageBox/>

    </div>
  )
}

export default ChatPage