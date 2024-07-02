import React from 'react'
import imgg1 from '../../Assets/cat01.svg';
import imgg2 from '../../Assets/cat02.svg';
import imgg3 from '../../Assets/cat03.svg';
import img4 from '../../Assets/cat04.svg';
import img5 from '../../Assets/cat05.svg';
import img6 from '../../Assets/cat06.svg';
function TopCategories() {
  return (
    <div>
      <div className=' Categories container mx-auto'>
        
        <h1 className='text-3xl text-start'>Top  <span className='text-red-700'>Categories</span></h1>
        <div className='grid xl:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 mt-5'>
        <div className='img1 border-r-2 relative'>
        <span class="sr-only">Notifications</span>
        <div class="absolute inline-flex items-center justify-center w-8 h-8 text-xs font-bold text-red-700 hover:text-white bg-white-500 hover:bg-red-700 border-2 border-white rounded-full  dark:border-gray-900">20</div>
            <div className='h-28 w-28 bg-slate-200 rounded-full flex justify-center p-5 ml-7'>
                <img src={imgg1}></img>
            </div>
            <div className='inner-text text-start ml-8 text-xl '>
            <p>Driftwood</p>
                <p>TableDecor</p>
            </div>
        </div>
        <div className='img2 border-l-2 relative'>
        <span class="sr-only">Notifications</span>
        <div class="absolute inline-flex items-center justify-center w-8 h-8 text-xs font-bold text-red-700 hover:text-white bg-white-500 hover:bg-red-700 border-2 border-white rounded-full  dark:border-gray-900">12</div>
            <div className='h-28 w-28 bg-slate-200 rounded-full flex justify-center p-5 ml-7'>
                <img src={imgg2}></img>
            </div>
            <div className='inner-text text-start ml-7 text-xl'>
            <p> floor Driftwood</p>
                <p>Sculpture</p>
            </div>
        </div>
        <div className='img3 border-l-2 relative'>
        <span class="sr-only">Notifications</span>
        <div class="absolute inline-flex items-center justify-center w-8 h-8 text-xs font-bold text-red-700 hover:text-white bg-white-500 hover:bg-red-700 border-2 border-white rounded-full  dark:border-gray-900">03</div>
            <div className='h-28 w-28 bg-slate-200 rounded-full flex justify-center p-5 ml-7'>
                <img src={imgg3}></img>
            </div>
            <div className='inner-text text-start ml-7 text-xl '>
            <p>Driftwood</p>
                <p>Chritsmus tree</p>
            </div>
        </div>
        <div className='img4 border-l-2 relative'>
        <span class="sr-only">Notifications</span>
        <div class="absolute inline-flex items-center justify-center w-8 h-8 text-xs font-bold text-red-700 hover:text-white bg-white-500 hover:bg-red-700 border-2 border-white rounded-full  dark:border-gray-900">09</div>
            <div className='h-28 w-28 bg-slate-200 rounded-full flex justify-center p-5 ml-7'>
                <img src={img4}></img>
            </div>
            <div className='inner-text text-start ml-1 text-xl ml-7'>
            <p>Wooden</p>
                <p>Blutooth speaker</p>
            </div>
        </div>
        <div className='img5 border-l-2 relative '>
        <span class="sr-only">Notifications</span>
        <div class="absolute inline-flex items-center justify-center w-8 h-8 text-xs font-bold text-red-700 hover:text-white bg-white-500 hover:bg-red-700 border-2 border-white rounded-full  dark:border-gray-900">10</div>
            <div className='h-28 w-28 bg-slate-200 rounded-full flex justify-center p-5 ml-7'>
                <img src={img5}></img>
            </div>
            <div className='inner-text text-start ml-4 text-xl'>
            <p>Recievers Amplifier</p>
                <p>TableDecor</p>
            </div>
        </div>
        <div className='img6 border-l-2 relative '>
        <span class="sr-only">Notifications</span>
        <div class="absolute inline-flex items-center justify-center w-8 h-8 text-xs font-bold text-red-700 hover:text-white bg-white-500 hover:bg-red-700 border-2 border-white rounded-full  dark:border-gray-900">05</div>
            
            <div className='h-28 w-28 bg-slate-200 rounded-full flex justify-center p-5 ml-7'>
                <img src={img6}></img>
            </div>
            <div className='inner-text text-start ml-10 text-xl'>
            <p>Apetiser</p>
                <p>Plate slate</p>
            </div>
        </div>
        </div>
            <hr className='mt-20'></hr>
      </div>
    </div>
            

               
            
  )
}

export default TopCategories
