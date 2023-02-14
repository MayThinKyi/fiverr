import React from 'react'
import Slider from 'infinite-react-carousel';
import testimonial1 from '../images/testimonial1.png'
import testimonial2 from '../images/testimonial2.png'
import testimonial3 from '../images/testimonial3.png'
import testimonial4 from '../images/testimonial4.png'
import c1 from '../images/c1.png'
import c2 from '../images/c2.png'
import c3 from '../images/c3.png'
import c4 from '../images/c4.png'
import TestmonialItem from './TestmonialItem';

const Testimonials = () => {
    const testmonials=[
        {img:testimonial1,
        title:'Tim and Dan Joo, Co-Founders',
        companyImg:c1,
        text:"When you want to create a business bigger than yourself, you need a lot of help. That's what Fiverr does."
        },
        {img:testimonial2,
            title:'Tim and Dan Joo, Co-Founders',
            companyImg:c2,
            text:"When you want to create a business bigger than yourself, you need a lot of help. That's what Fiverr does."
            }, {img:testimonial3,
                title:'Tim and Dan Joo, Co-Founders',
                companyImg:c3,
                text:"When you want to create a business bigger than yourself, you need a lot of help. That's what Fiverr does."
                }, {img:testimonial4,
                    title:'Tim and Dan Joo, Co-Founders',
                    companyImg:c4,
                    text:"When you want to create a business bigger than yourself, you need a lot of help. That's what Fiverr does."
                    },
    ]
  return (
    <div className='py-16 px-6 lg:py-20 lg:px-10'>
         <Slider >
            {
                testmonials?.map((t)=>{
                    return  <div>
                    <TestmonialItem img={t.img} text={t.text} title={t.title} companyImg={t.companyImg} />
                  </div>
                })

            }
   
   
  </Slider>
    </div>
  )
}

export default Testimonials