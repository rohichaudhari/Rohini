import React from 'react' 
// import img1 from '../../Assets/Error.jpg' 
import img2 from '../../Assets/error.png' 
// import '../Pages/Errorstyle.css'
import Top from '../Home/Top'
import Header1 from '../Home/Header1'
import Navbarr from '../Home/Navbarr'
function Error() { 
  return ( 
    <div>
        <Top/>
        <Header1/>
        <Navbarr/>
        <div className='imagee  p-10 mt-5'>
            <p className=' text-start font-bold text-slate-500'>Home----Error</p>
            <p className=' text-start text-4xl font-bold'>Error</p>
        </div>
        <div className='logo flex justify-center mt-6'>
        <img src={img2} alt='logo'></img>
        </div>
        <div className='textt'>
            <h1 className='text-6xl font-bold'>404. Page not found</h1>
            <p className='mt-5 font-bold text-slate-500'>Sorry, we couldn’t find the page you where looking for. We suggest that<span className='block'>you return to homepage.</span></p>
        </div>
        <button className=" mt-6 bg-red-500  text-white font-bold py-2 px-4 border-b-4  rounded">
        <i class="fa-solid fa-arrow-left"></i>Go to home
        </button>


     
    </div> 
  ) 
} 
 
export default Error