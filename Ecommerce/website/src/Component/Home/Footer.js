import React from 'react'
import img1 from '../../Assets/logo.png'
import img3 from '../../Assets/f-google.jpg'
import img4 from '../../Assets/f-app.jpg'
import img5 from '../../Assets/f-brand-icon-01.png'
function Footer() {
  return (
    <div>
    <div className='p-4 bg-gray-100 mt-10'>
        {/* part-1 start */}
      <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5  border-1 p-3  container mx-auto px-4'>
        <div className='text-1'>
        <img src={img1} alt='logo'></img>
        <p className='text-left text-slate-400 text-sm font-semibold'>Elegant pink origami design three dimensional view and decoration co-exist. Great for adding a decorative touch to any room’s decor.</p>
        </div>
        <div className='text-2 text-left'>
            <h2 className='font-bold underline'>Information</h2>
           <ul className=' text-slate-400 text-sm font-semibold'>
            <li><a href='#'>Custom Service</a></li>
            <li><a href='#'>FAQs</a></li>
            <li><a href='#'>Ordering Tracking</a></li>
            <li><a href='#'>Contacts</a></li>
            <li><a href='#'>Events</a></li>
           </ul>
        </div>

        <div className='text-3 text-left'>
            <h2 className='font-bold underline'>My Account</h2>
           <ul className=' text-slate-400 text-sm font-semibold'>
            <li><a href='#'>Delivery Information</a></li>
            <li><a href='#'>Privacy Policy</a></li>
            <li><a href='#'>Discount</a></li>
            <li><a href='#'>Custom Service</a></li>
            <li><a href='#'>Terms Condition</a></li>
           </ul>
        </div>

        <div className='text-4 text-left'>
            <h2 className='font-bold underline'>Social Network</h2>
           <ul className=' text-slate-400 text-sm font-semibold'>
            <li><a href='#'>Facebook</a></li>
            <li><a href='#'>Dribbble</a></li>
            <li><a href='#'>Twitter</a></li>
            <li><a href='#'>Behance</a></li>
            <li><a href='#'>Youtube</a></li>
           </ul>
        </div>
        <div className='text-5 text-left'>
            <h2 className='font-bold underline'>Get Newsletter</h2>
           <ul className=' text-slate-400 text-sm font-semibold'>
            <li><a href='#'>Get on the list and get 10% off your first order!</a></li>
            <li><a href='#'><input className='bg-white p-4 rounded' placeholder='Enter email address'></input></a></li>
            <li>
                <a href='#'>
                    <button className='bg-red-600 text-white p-4 mt-2 rounded font-bold'>Subscribe Now</button>
            </a>
            </li>
           
           </ul>
        </div>
      </div>
      {/* part-1 end */}
      <hr className='p-2 ml-2'></hr>
      {/* footer-2 start */}

            <div className='grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 container mx-auto px-4'>

                <div className='flex'>
                    <div>phone</div>
                    <div >
                        <p className='font-bold text-xl ml-2 '> 980. 029. 666. 99</p>
                        <span className='text-slate-400'>Working 8:00 - 22:00</span>
                    </div>
                </div>
              
                <div className='flex '>
                    <div> 
                        <p className='font-bold text-xl'> Download App on Mobile</p>
                    <span className='text-slate-400 text-sm'>15% discount on your first purchase</span>
                    </div>
                    <div className='flex ml-5'>
                       <img src={img3}></img>
                       <img src={img4} className='ml-2'></img>
                    </div>
                </div>
            </div>

      {/* footer-2 end */}
    
    </div>
      {/* footer-3 start */}

      <div className='w-full bg-gray-200 p-5'>
        <div className='grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1'>
            <div>
                <p>Copyright 2024 <span className='font-bold'>©Ninico</span>. All rights reserved. Developed by <span className='font-bold'>AliThemes.</span></p>
            </div>
            <div className='ml-32'>
                <img src={img5}></img>
            </div>
        </div>
    </div>
      {/* footer-3 end */}
    </div>
  )
}

export default Footer
