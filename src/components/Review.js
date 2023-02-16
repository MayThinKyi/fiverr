import React from 'react'
import ReviewItem from './ReviewItem'

const Review = () => {
  return (
    <div className=' lg:py-6 lg:px-0'>
     <h1 className=' mb-4 text-black text-2xl font-semibold'>Reviews</h1>
    <ReviewItem/>
    <ReviewItem/>
    <ReviewItem/>
    </div>
  )
}

export default Review