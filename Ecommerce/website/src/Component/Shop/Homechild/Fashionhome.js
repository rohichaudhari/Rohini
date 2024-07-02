// import React from 'react'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Top from '../../Home/Top'
import Header1 from '../../Home/Header1';
import Navbarr from '../../Home/Navbarr';
import fimg1 from '../../../Assets/banner-2-01.jpg'
import fimg2 from '../../../Assets/banner-2-02.jpg'
import fimg3 from '../../../Assets/banner-2-03.jpg'
function Fashionhome() {
  return (
    <div>
        <Top/>
        <Header1/>
        <Navbarr/>
        <div className='swiper-page'>

       
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
        className="mySwiper-1"
      >
        <SwiperSlide>
            <div className='swiper-image1'>
               <div className='Fashion-text p-10 text-start mt-20 leading-12'>
                <p className='font-bold text-red-700'>Winter</p>
                <p className='text-6xl font-bold mt-5'>Exclusive<span className='block'>Winter collection</span> </p>
                <p className='mt-5 text-slate-500'>New Modern stylish Fashionable Women's Wear Holder's.</p>
                <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mt-5">
                Shop Now <i class="fa-solid fa-arrow-right"></i>
                </button>
               </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='swiper-image2'>
        <div className='Fashion-text p-10 text-start mt-20 leading-12'>
                <p className='font-bold text-red-700'>Winter</p>
                <p className='text-6xl font-bold mt-5'>Exclusive<span className='block'>Summer collection</span> </p>
                <p className='mt-5 text-slate-500'>New Modern stylish Fashionable Women's Wear Holder's.</p>
                <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mt-5">
                Shop Now <i class="fa-solid fa-arrow-right"></i>
                </button>
               </div>   
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='swiper-image3'>
        <div className='Fashion-text p-10 text-start mt-20 leading-12'>
                <p className='font-bold text-red-700'>Winter</p>
                <p className='text-6xl font-bold mt-5'>Exclusive<span className='block'>Women's Fashion</span> </p>
                <p className='mt-5 text-slate-500'>New Modern stylish Fashionable Women's Wear Holder's.</p>
                <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mt-5">
                Shop Now <i class="fa-solid fa-arrow-right"></i>
                </button>
               </div>
            </div>
        </SwiperSlide>
      </Swiper>
      </div>
      <div className='fashion-cloth-img grid grid-cols-3'>
        <div className='fashion-image-1'>
            <div className='f-img1'>
                <img src={fimg1} alt='image'></img>
            </div>
            <div className='f-img2'>
                <img src={fimg2} alt='image'></img>
            </div>
        </div>
        <div className='fashion-image-1 bg-green-100'>
        {/* <div className='f-img3'> */}
                <img src={fimg3} alt='image'></img>
            {/* </div> */}
        </div>
        <div className='fashion-image-1'>
            
        </div>

      </div>
        
    </div>
  )
}

export default Fashionhome







