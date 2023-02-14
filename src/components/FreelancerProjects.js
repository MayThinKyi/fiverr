import React from 'react'
import FreelancerProjectItem from './FreelancerProjectItem'
import f1 from '../images/f1.png'
import f2 from '../images/f2.png'
import f3 from '../images/f3.png'
import f4 from '../images/f4.png'
import f5 from '../images/f5.png'
import f6 from '../images/f6.png'
import f7 from '../images/f7.png'
import f8 from '../images/f8.png'
import f9 from '../images/f9.png'
import f10 from '../images/f10.png'
import f11 from '../images/f11.png'
import p1 from '../images/p1.png'
import p2 from '../images/p2.png'
import p3 from '../images/p3.png'
import p4 from '../images/p4.png'
import p5 from '../images/p5.png'
import p6 from '../images/p6.png'
import p7 from '../images/p7.png'
import p8 from '../images/p8.png'
import p9 from '../images/p9.png'
import p10 from '../images/p10.png'
import p11 from '../images/p11.png'
import Slider from 'infinite-react-carousel';

const FreelancerProjects = () => {
    const projects=[
        {
            img:f1,
            personImg:p1,
            title:"Social Media Design",
            text:"by fernandobengua"
        },
        {
            img:f2,
            personImg:p2,
            title:"Product Photography",
            text:"by passionshake"
        },
        {
            img:f3,
            personImg:p3,
            title:"Book Design",
            text:"by annapietrangeli"
        },
        {
            img:f4,
            personImg:p4,
            title:"Flyer Design",
            text:"by spickex"
        },
        {
            img:f5,
            personImg:p5,
            title:"Illustration",
            text:"by christophbrandl"
        },
        {
            img:f6,
            personImg:p6,
            title:"Packaging Design",
            text:"by mijalzagier"
        },
        {
            img:f7,
            personImg:p7,
            title:"Web & Mobile Design",
            text:"by skydesigner"
        },
        {
            img:f8,
            personImg:p8,
            title:"Portraits & Caricatures",
            text:"by noneyn"
        },
        {
            img:f9,
            personImg:p9,
            title:"Animated GIFs",
            text:"by lamonastudio"
        },
        {
            img:f10,
            personImg:p10,
            title:"Logo Design",
            text:"by bruno_malagrino"
        },
        {
            img:f11,
            personImg:p11,
            title:"Packaging Design",
            text:"by mijalzagier"
        },
    ]
  return (
    <div className='bg-[#F5F5F5] py-10 px-5  lg:py-20 lg:px-10 '>
       <h1 className='mb-5 text-3xl font-bold text-slate-800'>Get inspired with projects made by our freelancers</h1>
      <Slider slidesPerRow={4}>
        {projects?.map((p)=>{
            return  <div> <FreelancerProjectItem personImg={p.personImg} img={p.img} title={p.title} text={p.text} />
    </div>
        })}
      </Slider>
    </div>
  )
}

export default FreelancerProjects