import React from 'react'

function Contc() {
  return (
    <div>
          <div className=' container mx-auto mt-10'>
                <div className=' grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 bg-slate-50 lg:place-content-around lg:place-items-center md:place-content-center md:place-items-center sm:place-content-center sm:place-items-center'>
                    <div>

                        <div className='contact-1'>
                            <h1 className='text-2xl font-medium '>Get In Touch</h1>
                            <div className='location flex justify-center mt-3 text-start'>
                                <div>
                                    <i class="ri-map-pin-line text-slate-600"></i>
                                </div>
                                <div className='text-start'>
                                    <p className=' text-slate-600 text-md'>24/26 Strait Bargate,Boston,</p>
                                    <span className=' text-slate-600 text-md'>PE21,United kingdom</span>
                                </div>
                            </div>
                            <div className='phone flex justify-center mt-3'>
                                <div>
                                    <i class="ri-phone-line text-slate-600"></i>
                                </div>
                                <div className='text-start'>
                                    <p className=' text-slate-600 text-md'>+098(905)7868978</p>
                                    <span className=' text-slate-600 text-md'>6-146-389-5748</span>
                                </div>
                            </div>
                            <div className='store flex justify-center mt-3'>
                                <div>
                                    <i class="ri-time-line text-slate-600"></i>
                                </div>
                                <div>
                                    <p className=' text-slate-600 text-md text-start'>Store Hours:</p>
                                    <span className=' text-slate-600 text-md'>10am-10pm EST,7 days a week</span>
                                </div>
                            </div>
                        </div>
                        <div className='mt-3'>
                            <button className=' text-md font-medium border-slate-300 hover:bg-red-600 w-64 h-10 hover:text-white'>Get Support On Call <i className="ri-headphone-line text-red-500"></i></button>
                        </div>
                        <div className='mt-3'>
                            <button className=' text-md font-medium border-slate-300 hover:bg-red-600 w-64 h-10 hover:text-white'>Get Direction <i class="ri-map-pin-line text-red-500"></i></button>
                        </div>
                    </div>{/*getpage */}
                    <div>

                        <div className='contact-2'>

                            <div>
                                <p className=' text-xl font-bold text-start'>Make Custom Request</p>
                                <span className='text-sm text-slate-500 text-start'>Must-have pieces selected every month want style Ideas and Treats?</span>
                            </div>
                            <div className='mb-5'>


                                <form action='https://formspree.io/f/xjvnlqzb' method="POST" class="max-w-lg mx-auto">
                                    <div class="mb-5 flex gap-3">
                                    <input type="text" name='text' className="shadow-sm  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Full name" required />
                                        <input type="email" name='email' className="shadow-sm  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Email address" required />
                                    </div>
                                    <div class="mb-5 flex gap-3">

                                        <input type="text" name='text' class="shadow-sm  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Phone number" required />
                                        <input type="text" name='text' class="shadow-sm  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Subject" required />
                                    </div>
                                    <div class="mb-5">
                                            <textarea rows={6} cols={60} placeholder='Enter message' className='bg-gray-50 border'></textarea>
                                    </div>
                                    <div className='text-start'>

                                    <button type="submit" className="text-white  bg-red-700  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get A Quote <i class="ri-arrow-right-line"></i></button>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Contc