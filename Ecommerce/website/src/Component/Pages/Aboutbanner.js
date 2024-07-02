import React from 'react'
import img1 from '../../Assets/about-banner-1.jpg'
import img2 from '../../Assets/about-banner-2.jpg'
function Aboutbanner() {
  return (
    <div>
        <div className='grid xl:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 mt-10'>
            <div className='image'>
                <img src={img1} alt='image'></img>
            </div>
            <div className='banner-text text-start mt-5'>
                <p className='text-sm'>Features #01</p>
                <h1 className='text-4xl font-bold mt-5'>Solutions that work together</h1>
                <p  className='font-bold mt-3 text-slate-500'>Publish your eCommerce site quickly with our easy-to-use store builder— no coding required. Migrate your items from your point of sale system or turn your Instagram feed into a shopping site and start selling fast. Square Online works for all kinds of businesses—retail, restaurants, services.</p>
                <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mt-10 p-5 hover:bg-red-700 hover:text-white">
                    Get In touch
                </button>
            </div>
        </div>
        <div className='grid xl:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 sm:mt-10 md:mt-10'>
            
            <div className='banner-text text-start mt-5 ml-5'>
                <p className='text-sm'>Features #02</p>
                <h1 className='text-4xl font-bold mt-5'>All kinds of payments securely</h1>
                <p  className='font-bold mt-3 text-slate-500'>Publish your eCommerce site quickly with our easy-to-use store builder— no coding required. Migrate your items from your point of sale system or turn your Instagram feed into a shopping site and start selling fast. Square Online works for all kinds of businesses—retail, restaurants, services.</p>
                <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mt-10 p-5 hover:bg-red-700 hover:text-white">
                   Contact With Us
                </button>
            </div>
            <div className='image'>
                <img src={img2} alt='image'></img>
            </div>
        </div>
    </div>
  )
}

export default Aboutbanner