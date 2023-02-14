import React from 'react'
import twitter from '../images/twitter.svg'
import facebook from '../images/facebook-svgrepo-com.svg'
import linkedin from '../images/linkedin-svgrepo-com.svg'
import pinterest from '../images/pinterest-svgrepo-com.svg'
import instagram from '../images/instagram-svgrepo-com.svg'

const Footer = () => {
    const footerLinks=[
        {title:'Categories',
    links:[
      '  Graphics & Design',
      'Digital Marketing',
'Writing & Translation',
'Video & Animation',
'Music & Audio',
'Programming & Tech',
'Data',
'Business',
'Lifestyle',
'Photography',
'Sitemap',

    ]},
    {title:'About',
    links:[
        'Careers',
       ' Press & News',
        'Partnerships',
        'Privacy Policy',
       ' Terms of Service',
        'Intellectual Property Claims',
        'Investor Relations'
    ]},
    {title:'Support',
    links:[
       ' Help & Support',
       ' Trust & Safety',
        'Selling on Fiverr',
        'Buying on Fiverr'
    ]},
    {title:'Community',
    links:[
       ' Customer Success Stories',
       ' Community hub',
        'Forum',
        'Events',
        'Blog',
        'Influencers',
        'Affiliates',
        'Podcast',
       ' Invite a Friend',
       ' Become a Seller',
        'Community Standards'
    ]},
    {title:'More From Fiverr',
    links:[
   '     Fiverr Business',
        'Fiverr Pro',
     '   Fiverr Logo Maker',
 '       Fiverr Guides',
'        Get Inspired',
 '       Fiverr Select',
        'ClearVoice',
     '   Content Marketing',
        
    '    Fiverr Workspace',
    '    Invoice Software',
       
       ' Learn',
  '      Online Courses',
        
       ' Working Not Working',
    ]},
    ]
  return (
    <div className='lg:pt-20 '>
        <div className='py-8 px-8 gap-5 lg:gap-0 border-y flex flex-wrap lg:flex-nowrap justify-between  lg:py-10 lg:px-10'>
        {footerLinks?.map((f)=>{
            return   <ul className='cursor-pointer flex flex-col'>  
            <li className=' mb-4 text-black text-lg font-semibold'>{f.title}</li>
            {f.links.map((l)=>{
              return <a href='#' className='mb-3 hover:underline'> <li className=' text-black text-lg text-slate-600'>{l}</li></a>

            })}
                    </ul>
        })

        }
      
        </div>
        <div className=' py-8 px-8 flex flex-wrap lg:flex-nowrap justify-between items-center lg:py-5 lg:px-10 '>
      <div className=' mb-4 lg:mb-0 flex  justify-between items-center gap-4'>
      <span className='text-2xl lg:text-4xl text-[#7A7D85] font-bold'>fiverr</span>
        <span className='text-slate-400'>© Fiverr International Ltd. 2023</span>
      </div>
       <div className='  flex  justify-between items-center gap-4'>
            <img style={{height:'25px'}} src={twitter} />
            <img style={{height:'25px'}} src={facebook} />
            <img style={{height:'25px'}} src={linkedin} />
            <img style={{height:'25px'}} src={pinterest} />
            <img style={{height:'25px'}} src={instagram} />
       </div>
        </div>
        </div>
  )
}

export default Footer