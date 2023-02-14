import React from 'react'
import graphicdesign  from '../images/graphicdesign.svg'
import DigitalMarketing  from '../images/Digital Marketing.svg'
import WritingTranslation  from '../images/Writing & Translation.svg'
import VideoAnimation  from '../images/Video & Animation.svg'
import MusicAudio  from '../images/Music & Audio.svg'
import ProgrammingTech  from '../images/Programming & Tech.svg'
import Business  from '../images/Business.svg'
import Lifestyle  from '../images/Lifestyle.svg'
import Data  from '../images/Data.svg'
import Photography  from '../images/Photography.svg'

const MarketPlace = () => {
    const marketPlaceItems=[
        {
            img:graphicdesign,
            title:"Graphics & Design"
        },
        {
            img:DigitalMarketing,
            title:"Digital Marketing"
        },
        {
            img:WritingTranslation,
            title:"Writing & Translation"
        },{
            img:VideoAnimation,
            title:"Video & Animation"
        },{
            img:MusicAudio,
            title:"Music & Audio"
        },{
            img:ProgrammingTech,
            title:"Programming & Tech"
        },{
            img:Business,
            title:"Business"
        },{
            img:Lifestyle,
            title:"Lifestyle"
        },{
            img:Data,
            title:"Data"
        },{
            img:Photography,
            title:"Photography"
        },
    ]
  return (
    <div className='pt-10 px-5  lg:pt-20 lg:px-10'>
       <h1 className='text-3xl text-slate-800 font-bold'>Explore the marketplace</h1>
       <div className='grid grid-cols-2 lg:grid-cols-5 my-10'>
    {
      marketPlaceItems?.map((m)=>{
        return <div className='flex mb-10 cursor-pointer flex-col items-center'>
            <img style={{height:"60px"}} src={m.img}/>
            <h1 className='text-[18px] text-[#74767e] transition-all transition-0.5 font-[500]  hover:border-b-2 hover:border-b-green-800'>{m.title}</h1>
            </div>
      })  
    }
     </div>
    </div>
  )
}

export default MarketPlace