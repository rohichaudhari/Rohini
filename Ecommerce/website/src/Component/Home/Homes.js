import React from 'react'
import Top from './Top'
import '../Home/HomeStyle.css'
import '../Home/Style1.css'
import Header1 from './Header1'

import Swip from './Swip'
import TopCategories from './TopCategories'
import Folded from './Folded'
import Follow from './Follow'
import Footer from './Footer'
import Navbarr from './Navbarr'
import ProductCard from '../Product/ProductCard'




function Homes() {
  return (
    <div>
      
        <Top/>
        <Header1/>
        <Navbarr/>
        <Swip/>
        <TopCategories/>
        <ProductCard/>
        <Folded/>
        <Follow/>
        <Footer/>
        
    </div>
  )
}

export default Homes
       

      
