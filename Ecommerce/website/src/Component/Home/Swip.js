import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



import { Autoplay, Pagination, Navigation } from 'swiper/modules';
function Swip() {
  return (
    <div>
        <div className='container mx-auto gap-10 swip flex  mt-10  '>
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
           <div className='slide1'>
            <div className='s-1 text-start p-5 ml-20'>
              <p className='text-red-700 font-bold text-2xl mt-20'>Acessories</p>
              <h1 className='text-6xl font-bold'>up to <span className=' text-red-700'>40% off</span><span className='block'>Latest creation</span></h1>
              <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                Shop Now<i class="fa-solid fa-arrow-right"></i>
              </button>
            </div>
           </div>

        </SwiperSlide>
        <SwiperSlide>
        <div className='slide2'>
        <div className='s-1 text-start p-5 ml-20'>
              <p className='text-red-700 font-bold text-2xl mt-20'>Acessories</p>
              <h1 className='text-6xl font-bold'>up to <span className=' text-red-700'>40% off</span><span className='block'>Latest creation</span></h1>
              <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                Shop Now<i class="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='slide3'>
        <div className='s-1 text-start p-5 ml-20  '>
              <p className='text-red-700 font-bold text-2xl mt-20'>Acessories</p>
              <h1 className='text-6xl font-bold'>up to <span className=' text-red-700'>40% off</span><span className='block'>Latest creation</span></h1>
              <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                Shop Now<i class="fa-solid fa-arrow-right"></i>
              </button>
            </div>
            </div>
        </SwiperSlide>
       
      </Swiper>
      <div className='images '>
        <div className='img-1'>
            <div className=' text-start p-5 '>
                <p className='text-red-700 font-bold'>Hand Made</p>
                <p className='text-2xl font-bold'>New Modern Stylish<span className='block'>Crafts</span></p>
            </div>
        </div>
        <div className='img-2 mt-5'>
          <div className=' text-start'>
            <p className='text-start p-5 text-red-700'>Popular</p>
            <p className='text-2xl font-bold'>Energy with our<span className='block'>Newest collection</span></p>
          </div>
            
        </div>

      </div>
        </div>
    </div>
  )
}

export default Swip