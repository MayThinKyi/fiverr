import React from 'react'

const Slide = ({subtitle,title,img}) => {
  return (
    <div className='slider'>
        <div className='sliderContent flex flex-col'>
            <h1 className='font-medium text-md '>{subtitle} </h1>
            <h1 className='font-bold text-2xl'>{title}</h1>
            </div>
        <img src={img} />
    </div>
  )
}

export default Slide