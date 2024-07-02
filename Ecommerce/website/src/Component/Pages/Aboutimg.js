import React from 'react'
import imagg1 from '../../Assets/about-img-1.jpg'
import imagg2 from '../../Assets/about-img-2.jpg'
function Aboutimg() {
  return (
    <div>
        <div className='ml-5 grid xl:grid-cols-2  mt-2 mt-5 sm:grid-cols-1 md:grid-cols-2'>
            <div className='about-image-1'>
                <img src={imagg1} alt='image'></img>
            </div>
            <div className='about-image-2 md:mt-2 sm:mt-2'>
            <img src={imagg2} alt='image'></img>
            </div>
        </div>
        <div className='About mt-10 ml-5'> 
            <p className='text-start'>About us</p>
            <p className='text-4xl font-bold text-start'>About Our Story</p>
        <div className='grid xl:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 mt-10 gap-5'>
            <div className='t-1 text-start'>
                <p>Publish your eCommerce site quickly with our easy-to-use store builder— no coding required. Migrate your items from your point of sale system or turn your Instagram feed into a shopping site and start selling fast. Square Online works for all kinds of businesses—retail, restaurants, services without costly customization or add ons. Get orders to your customers in lots of ways by offering shipping, pickup, delivery, and even QR code ordering.</p>
            </div>
            <div className='t-2 text-start'>
                <p>Expand your reach and sell more using seamless integrations with Google, Instagram, Facebook, and more. Built- in SEO tools make it easy for shoppers to find your business on search engines. Get access to the entire suite of integrated Square solutions to help you run your business. Integration between Square Online and all Square point of sale systems makes inventory management easy. Subscribe to Square Marketing and easily send email promotions to your customers using the contact information</p>
            </div>
            <div className='t-3 leading-8'>
                <div className='tt-1 flex gap-5'>
                    <p className='text-2xl'><i class="fa-solid fa-check"></i></p>
                    <p>Orders go right to your restaurant<span className='block'> point of sale, KDS, and kitchen</span></p>
                </div>
                <div className='tt-1 flex gap-5'>
                    <p className='text-2xl'><i class="fa-solid fa-check"></i></p>
                    <p>Provide in-person pickup, delivery by<span className='block'> professional couriers gymistic voley</span></p>
                </div>
                <div className='tt-1 flex gap-5'>
                    <p className='text-2xl'><i class="fa-solid fa-check"></i></p>
                    <p>Offer in-person diners self-serve,<span className='block'> point of sale, KDS, and kitchen</span></p>
                </div>
                
            </div>

        </div>
        </div>
            
    </div>
  )
}

export default Aboutimg