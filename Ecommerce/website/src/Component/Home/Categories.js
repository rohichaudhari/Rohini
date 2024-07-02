import React from 'react'

function Categories() {
  return (
    <div>
    <div className=' categories'>
        <div class="">
        <div class="dropdown inline-block relative w-40 z-10">
            <button class="bg-red-700 text-white font-semibold py-2 px-4 rounded inline-flex items-center">
            <span class="mr-1"><i class="fa-solid fa-bars"></i> Categories</span>
            </button>
            <ul class="dropdown-menu absolute hidden text-gray-700 pt-1 text-start">
                <li class=""><a class="rounded-t bg-gray-100 hover:text-red-400 py-2 px-4 block whitespace-no-wrap" href="#"><i class="fa-regular fa-user"></i> Candels</a></li>
                <li class=""><a class="rounded-t bg-gray-100 hover:text-red-400 py-2 px-4 block whitespace-no-wrap" href="#"><i class="fa-regular fa-user"></i>Handmade</a></li>
                <li class=""><a class="rounded-t bg-gray-100 hover:text-red-400 py-2 px-4 block whitespace-no-wrap" href="#"><i class="fa-regular fa-user"></i> Giftset</a></li>
                <li class=""><a class="rounded-t bg-gray-100 hover:text-red-400 py-2 px-4 block whitespace-no-wrap" href="#"><i class="fa-regular fa-user"></i> Plastic gift</a></li>
                <li class=""><a class="rounded-t bg-gray-100 hover:text-red-400 py-2 px-4 block whitespace-no-wrap" href="#"><i class="fa-regular fa-user"></i> Handy cream</a></li>
                <li class=""><a class="rounded-t bg-gray-100 hover:text-red-400 py-2 px-4 block whitespace-no-wrap" href="#"><i class="fa-regular fa-user"></i> Cosmatic</a></li>
                <li class=""><a class="rounded-t bg-gray-100 hover:text-red-400 py-2 px-4 block whitespace-no-wrap" href="#"><i class="fa-regular fa-user"></i> Skill Assesories</a></li>
                <div className='text rounded-t bg-gray-200 hover:text-red-400 py-2 px-4 block whitespace-no-wrap'>
                    <p>Value of the Day
                        Top 100 Offers
                        New Arrivals
                    </p>
                </div>
            </ul>
        </div>
        </div>
    </div>
    </div>
        )
      }
      
      export default Categories
           



            