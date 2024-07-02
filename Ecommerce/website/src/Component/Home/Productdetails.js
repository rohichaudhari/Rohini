import React from 'react'
// import img from '../../Assets/product-6.jpg'
import { useParams } from 'react-router-dom';
// import Data from '../../../src/Data';
import Top from './Top';
import Header1 from './Header1';
import Navbarr from './Navbarr';
// import Data from '../../../src/Data';
import ProductData from '../Product/ProductData';

function Productdetails() {
 const {id} = useParams();
 let data = ProductData.find((item)=> item.id === parseInt(id) )

  return (
    <div>
        <Top/>
        <Header1/>
        <Navbarr/>
        <div className='shop-details'>
            <div className='p-10'>
            <p className='text-start'>Shop____Details</p>
            <p className='font-bold text-4xl text-start mt-5'>Shop____Details</p>
            </div>
        </div>
       <div className='flex gap-10 mt-10 justify-center'>
        <div className='img-1'>
             <img src={data.imgg1} alt='image'></img> 
        </div> 
        <div className='text1 mt-10'>
           <div className='tt-1 flex gap-5'>
            <div className='t-1 h-8 w-20  bg-red-700'>
                <p className='font-bold text-white'>Drees</p>
            </div>
            <div className='icon text-yellow-700 flex'>
                <div className='i-1'>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
                </div>
                <div className='i-2'>
                    <p className='font-sm'>10 reviwes</p>
                </div>
            </div>
           </div>
           <div className='n-text flex mt-5'>
          
            <p className='text-4xl font bold'>{data.name}</p>
            <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4  border border-blue-500 hover:border-transparent rounded">
               In stoke
            </button>
           </div>
           <div className='p-text flex text-start'>
            <p className='font-bold text-slate-500 text-3xl line-through'>$9.35</p>
            <p className='text-4xl font-bold text-red-700'>{data.price}</p>
           </div>
           <div className='o-text mt-5'>
            <p className='text-start'>Priyoshop has brought to you the Hijab 3 Pieces Combo Pack PS23. It is a<span className='block'>completely modern design and you feel comfortable to put on this hijab.</span><span className='block'>Buy it at the best price.</span></p>
           </div>
           <div className='b-text flex gap-10 mt-10' >
            <div className='h-8 w-48 border-2 p-5 flex justify-between items-center'>
                <p className=' flex justify-between items-center'>1</p>
            </div>
            <button class="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
            <i class="fa-solid fa-cart-shopping"></i> Add to card
            </button>
            <button class=" hover:bg-blue-700  font-bold py-2 px-4 w-18 border border-blue-700 rounded">
                <p><i class="fa-solid fa-heart"></i></p>
            </button>
           </div>
        </div>
       </div>
    </div>
  )
}

export default Productdetails



   