import React from 'react'

function ProductNav() {
  return (
    <div>
        <div className='container mx-auto grid xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 mt-10' >
            <div className='prod-1 text-start'>
                <p className='text-4xl font-bold'>Popular<span className='text-red-700'>Product</span></p>
            </div>
            <ul className='flex gap-10 font-bold text-end'>
                <li className='text-red-700'><a href='#'>All</a></li>
                <li><a href='#'>Popular</a></li>
                <li><a href='#'>On Sale</a></li>
                <li><a href='#'>Best Rated</a></li>
            </ul>
        </div>
    </div>
  )
}

export default ProductNav