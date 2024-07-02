import React from 'react'
import Top from '../../Home/Top'
import Header1 from '../../Home/Header1'
import Navbarr from '../../Home/Navbarr'
import Swip from '../../Home/Swip'
import TopCategories from '../../Home/TopCategories'
import ProductCard from '../../Product/ProductCard'
import Folded from '../../Home/Folded'
import Follow from '../../Home/Follow'
import Footer from '../../Home/Footer'
// import Product from '../../Home/Product'
function Shopchild1() {
  return (
    <div>
        <div className='shopchild'>
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
    </div>
  )
}

export default Shopchild1