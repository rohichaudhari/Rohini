import React from 'react'
import Top from '../../Home/Top'
import Header1 from '../../Home/Header1'
import Navbarr from '../../Home/Navbarr'
import Swip from '../../Home/Swip'
// import Product from '../../Home/Product'
import TopCategories from '../../Home/TopCategories'
import Folded from '../../Home/Folded'
import Follow from '../../Home/Follow'
import Footer from '../../Home/Footer'
import ProductCard from '../../Product/ProductCard'
// import Datamap from '../../Home/Datamap'
// import ProductNav from '../../Home/ProductNav'
// import Productdetails from '../../Home/Productdetails'
// import Product from '../../Home/Product'

function Woodenhome() {
  return (
    <div>
        <Top/>
        <Header1/>
        <Navbarr/>
        <Swip/>
       <TopCategories/>
       <ProductCard/>
        {/* <Product/> */}
        {/* <ProductNav/> */}
        {/* <Productdetails/> */}
        {/* <Product/> */}
        {/* <Datamap/> */}
        <Folded/>
        <Follow/>
        <Footer/>
    </div>
  )
}

export default Woodenhome