import React from 'react'
import Business from '../components/Business'
import Featured from '../components/Featured'
import Footer from '../components/Footer'
import Freelance from '../components/Freelance'
import FreelancerProjects from '../components/FreelancerProjects'
import Guides from '../components/Guides'
import LogoMaker from '../components/LogoMaker'
import MarketPlace from '../components/MarketPlace'
import Services from '../components/Services'
import Slide from '../components/Slide'
import Talent from '../components/Talent'
import Testimonials from '../components/Testimonials'
import Trusted from '../components/Trusted'

const Home = () => {
  return (
    <div>
        <Featured/>
        <Trusted/>
        <Services/>
        <Freelance/>
        <MarketPlace/>
        <Business/>
        <Testimonials/>
       <LogoMaker/>
       <FreelancerProjects/>
       <Guides/>
       <Talent/>
       <Footer/>
    </div>
  )
}

export default Home