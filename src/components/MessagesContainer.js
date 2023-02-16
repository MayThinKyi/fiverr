import React from 'react'
import LeftChatMessage from '../components/LeftChatMessage'
import RightChatMessage from '../components/RightChatMessage'

const MessagesContainer = () => {
  return (
    <div  className='h-[53vh] overflow-y-scroll lg:px-20 flex flex-col  '>
    <LeftChatMessage/>
    <RightChatMessage/>
    <LeftChatMessage/>
    <RightChatMessage/>
    <LeftChatMessage/>
    <RightChatMessage/>
    </div>
  )
}

export default MessagesContainer