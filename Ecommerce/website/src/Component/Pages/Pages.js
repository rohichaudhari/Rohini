import React from 'react'
import '../Home/Style1.css'

import Top from '../Home/Top'
import Header1 from '../Home/Header1'
import Footer from '../Home/Footer'

import Navbarr from '../Home/Navbarr'
import About from './About'
import Aboutimg from './Aboutimg'
// import Team from './Team'
import Aboutbanner from './Aboutbanner'
function Pages() {
  return (
    <div>
       <Top/>
       <Header1/>
        <Navbarr/>
       <About/>
       <Aboutimg/>
       {/* <Team/> */}
       <Aboutbanner/>
        <Footer/>
    </div>
  )
}

export default Pages