import React from 'react'
import Categories from './Categories'
import { Link } from 'react-router-dom'

function Navbarr() {
  return (
    <div>
    {/* <div className=' '> */}
  <div class="navbar container mx-auto flex items-center gap-20 justify-between">
        <div className='nav-1'>
         <Categories/>
        </div>
    

  <ul className='flex '>
  <li class=" dropdown inline-block relative"><Link to='/' class="rounded-t  hover:text-red-400 py-2 px-4 block whitespace-no-wrap" >Home <i class="fa-solid fa-chevron-down"></i></Link>
  <ul class="dropdown-menu-1 border-red-900 border-t-4 bg-slate-100 absolute hidden text-gray-700 pt-1 w-48 z-10">
    <li class=""><Link to='/woodenhome' class="rounded-t  hover:text-red-400 py-2 px-4 block whitespace-no-wrap" href="#">Wooden home</Link></li>
    <li class=""><Link to='/fashionhome' class=" hover:text-red-400 py-2 px-4 block whitespace-no-wrap" href="#">Fashion home</Link></li>
    <li class=""><a class="rounded-b  hover:text-red-400 py-2 px-4 block whitespace-no-wrap" href="#">Furniture home</a></li>
    <li class=""><a class="rounded-b  hover:text-red-400 py-2 px-4 block whitespace-no-wrap" href="#">Cosmetichome home</a></li>
    <li class=""><a class="rounded-b  hover:text-red-400 py-2 px-4 block whitespace-no-wrap" href="#">Food grocery</a></li>
  </ul>
  </li>
  <li class=" dropdown inline-block relative"><Link to='/shop' class="rounded-t  hover:text-red-400 py-2 px-4 block whitespace-no-wrap" href="#">Shop <i class="fa-solid fa-chevron-down"></i></Link>
  <ul class="dropdown-menu-2  border-red-900 border-t-4 bg-slate-100 absolute hidden text-gray-700 pt-1 w-40 z-10">
    <li class=""><Link to='/shop' class="rounded-t  hover:text-red-400 py-2 px-4 block whitespace-no-wrap" href="#">shop</Link></li>
    <li class=""><Link to='/shop2' class=" hover:text-red-400 py-2 px-4 block whitespace-no-wrap" href="#">shop2</Link></li>
    <li class=""><a class="rounded-b  hover:text-red-400 py-2 px-4 block whitespace-no-wrap" href="#">Shop Details</a></li>
    <li class=""><a class="rounded-b  hover:text-red-400 py-2 px-4 block whitespace-no-wrap" href="#">Shop Details 2</a></li>
    <li class=""><Link to='/card' class="rounded-b  hover:text-red-400 py-2 px-4 block whitespace-no-wrap" href="#">Card</Link></li>
    <li class=""><Link to='/signin' class="rounded-b  hover:text-red-400 py-2 px-4 block whitespace-no-wrap" href="#">Sing in</Link></li>
    <li class=""><Link to='/wishlist' class="rounded-b  hover:text-red-400 py-2 px-4 block whitespace-no-wrap" href="#">wishlist</Link></li>
    <li class=""><a class="rounded-b  hover:text-red-400 py-2 px-4 block whitespace-no-wrap" href="#">Product track</a></li>
  </ul>
  </li>
  <li class="flex dropdown inline-block relative"><Link to='/page'  class="rounded-t  hover:text-red-400 py-2 px-4 block whitespace-no-wrap" href="#">Pages <i class="fa-solid fa-chevron-down"></i></Link>
  <ul class="dropdown-menu-3 mt-10 border-red-900 border-t-4 bg-slate-100 absolute hidden text-gray-700 pt-1 w-[800px] z-10">
    <div className='flex justify-around'>
    <ul className='z-10'>
    <li class=""><a class="rounded-t font-bold hover:text-red-400 py-2 px-4 block whitespace-no-wrap" href="#">Page Layout</a></li>
    <li class=""><a class=" hover:text-red-400 py-2 px-4 block whitespace-no-wrap" href="#">Shop Filter V1</a></li>
    <li class=""><a class="rounded-b  hover:text-red-400 py-2 px-4 block whitespace-no-wrap" href="#">Shop Filter V2</a></li>
    <li class=""><a class="rounded-b  hover:text-red-400 py-2 px-4 block whitespace-no-wrap" href="#">Shop sidebar</a></li>
    <li class=""><a class="rounded-b  hover:text-red-400 py-2 px-4 block whitespace-no-wrap" href="#">Shop Right sidebar</a></li>
    <li class=""><a class="rounded-b  hover:text-red-400 py-2 px-4 block whitespace-no-wrap" href="#">Shop sidebar</a></li>
    <li class=""><a class="rounded-b  hover:text-red-400 py-2 px-4 block whitespace-no-wrap" href="#">Shop List view</a></li>
    </ul>
    <ul className='z-10'>
    <li class=""><a class="rounded-t font-bold hover:text-red-400 py-2 px-4 block whitespace-no-wrap" href="#">Page Layout</a></li>
    <li class=""><a class=" hover:text-red-400 py-2 px-4 block whitespace-no-wrap" href="#">About</a></li>
    <li class=""><Link to='/card' class="rounded-b  hover:text-red-400 py-2 px-4 block whitespace-no-wrap" href="#">Card</Link></li>
    <li class=""><a class="rounded-b  hover:text-red-400 py-2 px-4 block whitespace-no-wrap" href="#">Check Out</a></li>
    <li class=""><Link to='/signin' class="rounded-b  hover:text-red-400 py-2 px-4 block whitespace-no-wrap" href="#">Sign In</Link></li>
    <li class=""><a class="rounded-b  hover:text-red-400 py-2 px-4 block whitespace-no-wrap" href="#">Sing Out</a></li>
    {/* <li class=""><a class="rounded-b  hover:text-red-400 py-2 px-4 block whitespace-no-wrap" href="#">Shop List view</a></li> */}
    </ul>
    <ul className='z-10'>
    <li class=""><a class="rounded-t font-bold hover:text-red-400 py-2 px-4 block whitespace-no-wrap" href="#">Page Type</a></li>
    <li class=""><a class=" hover:text-red-400 py-2 px-4 block whitespace-no-wrap" href="#">Product Track</a></li>
    <li class=""><Link to='/wishlist' class="rounded-b  hover:text-red-400 py-2 px-4 block whitespace-no-wrap" href="#">WishList</Link></li>
    <li class=""><Link to='*' class="rounded-b  hover:text-red-400 py-2 px-4 block whitespace-no-wrap" href="#">404/Error</Link></li>
    <li class=""><a class="rounded-b  hover:text-red-400 py-2 px-4 block whitespace-no-wrap" href="#">Comming Soon</a></li>
    {/* <li class=""><a class="rounded-b  hover:text-red-400 py-2 px-4 block whitespace-no-wrap" href="#">Shop sidebar</a></li> */}
    {/* <li class=""><a class="rounded-b  hover:text-red-400 py-2 px-4 block whitespace-no-wrap" href="#">Shop List view</a></li> */}
    </ul>
    </div>
  </ul>
  </li>
  <li class="dropdown inline-block relative "><Link to='/page' class="rounded-t  hover:text-red-400 py-2 px-4 block whitespace-no-wrap" href="#">Blog <i class="fa-solid fa-chevron-down"></i></Link>
  <ul class="dropdown-menu-4  border-red-900 border-t-4 bg-slate-100 absolute hidden text-gray-700 pt-1 w-24 z-10">
    <li class=""><Link to='/blog' class="rounded-t  hover:text-red-400 py-2 px-4 block whitespace-no-wrap" href="#">Blog</Link></li>
    <li class=""><a class=" hover:text-red-400 py-2 px-4 block whitespace-no-wrap" href="#">Blog Details</a></li>
  </ul>
  </li>
  <li class="dropdown inline-block relative "><Link to='/contact' class="rounded-t  hover:text-red-400 py-2 px-4 block whitespace-no-wrap" href="#">Contact</Link></li>
  </ul>
    <div className='mobile flex gap-10'>
        <p className='hover:text-red-400'> <i class="fa-solid fa-phone"></i> 908. 408. 501. 89</p>
        <p className='hover:text-red-40'> <i class="fa-solid fa-location-dot"></i>Find Store</p>
    </div>
</div>
{/* </div> */}
</div>
  )
}

export default Navbarr
    


 
 


 
    

  

