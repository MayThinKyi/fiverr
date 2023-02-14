import React from 'react'
import Slider from 'infinite-react-carousel';
import Slide from './Slide';
import img1 from '../images/1.png'
import img2 from '../images/2.png'
import img3 from '../images/3.pmg.webp'
import img4 from '../images/4.png'
import img5 from '../images/5.png'
import img6 from '../images/6.png'
import img7 from '../images/7.png'
import img8 from '../images/8.png'
import img9 from '../images/9.png'
import img10 from '../images/10.png'
import img11 from '../images/11.png'

const Services = () => {
    const slides=[
        {img:img1,
        subtitle:"Add talent to AI",
        title:"AI Artists"},
        {img:img2,
        subtitle:"Add talent to AI",
        title:"AI Artists"},
        {img:img3,
        subtitle:"Add talent to AI",
        title:"AI Artists"},
        {img:img4,
        subtitle:"Add talent to AI",
        title:"AI Artists"},
        {img:img5,
        subtitle:"Add talent to AI",
        title:"AI Artists"},
        {img:img6,
        subtitle:"Add talent to AI",
        title:"AI Artists"},
        {img:img7,
        subtitle:"Add talent to AI",
        title:"AI Artists"},
        {img:img8,
        subtitle:"Add talent to AI",
        title:"AI Artists"},
        {img:img9,
        subtitle:"Add talent to AI",
        title:"AI Artists"},
        {img:img10,
        subtitle:"Add talent to AI",
        title:"AI Artists"},
        {img:img11,
        subtitle:"Add talent to AI",
        title:"AI Artists"}
    ]
  return (
    <div className=' py-8 px-5 lg:py-16 lg:px-10 '>
        <h1 className='mb-8 text-3xl lg:text-4xl font-bold text-[#404145]'>Popular professional services</h1>
        <Slider  slidesPerRow={1}>
    {slides?.map((s)=>{
        return <div>
        <Slide subtitle={s.subtitle} title={s.title} img={s.img} />
    
        </div>
    })}
    
   
  </Slider>
    </div>
  )
}

export default Services