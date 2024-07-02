import React from 'react'
import Top from '../Home/Top'
import Header1 from '../Home/Header1'
import Navbarr from '../Home/Navbarr'
import Shop1 from './Shop1'
// import Product from '../Home/Product'
import Footer from '../Home/Footer'
// import Datamap from '../Home/Datamap'
import ProductNav from '../Home/ProductNav'
import Productdetails from '../Home/Productdetails'
import ProductCard from '../Product/ProductCard'
function Shop() {
  return (
    <div>
       <Top/> 
       <Header1/>
       <Navbarr/>
       <Shop1/>
       {/* <Product/> */}
       <ProductNav/>
       <ProductCard/>
       {/* <Productdetails/> */}
       {/* <Datamap/> */}
       <Footer/>

    </div>
  )
}

export default Shop