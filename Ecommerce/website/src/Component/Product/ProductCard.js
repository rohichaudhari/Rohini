import React from 'react'
import { Link } from 'react-router-dom'
import { ADD,WADD } from '../../Redux/Action/Action'
import { useDispatch } from 'react-redux'
import ProductData from './ProductData';
import '../Product/Pstyle.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function toasti(){
  toast.success('🦄 Added sucessfully!', {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    // transition: Bounce,
    });
}
function toastify(){
  toast.success('🦄 this item is already in the card', {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    // transition: Bounce,
    });
}
function ProductCard() {
    const dispatch  = useDispatch();
    const send2 = (e)=>{
      toastify()
      dispatch(WADD(e))
    }
    const send1 = (e) => {
      toasti()
      dispatch(ADD(e))
   }
  return (
    
    <div className=' container  pt-16'>
    <div className=' lg:flex  justify-between items-center'>
        <div>
            <h3 className=' font-medium text-xl'>Popular Product</h3>
        </div>
        <div className=' space-x-4 mt-8 lg:mt-0'>
            <button className=' text-xl text-pink-800 underline border-0'>All</button>
            <button className=' font-medium text-lg border-0'> Popular</button>
            <button className=' font-medium text-lg border-0'> On sale</button>
            <button className=' font-medium text-lg border-0'> Best rated</button>
        </div>
    </div>{/* heading */}

    <div className="md:grid md:grid-cols-2 lg:grid lg:grid-cols-5 map mt-10 w-full px-4">
    {ProductData.map((cvalue, ind, array) => {
      const product = {cvalue}

     

      return (
        <div className="sm:h-[25rem] md:h-[24rem] lg:h-[25rem] w-[18.5rem] mapdata relative" key={ind}>
          <div className="card p-4 absolute bg-white rounded-lg">

            <div className="hover:rounded-lg ">
              <div>
                <Link to={`/data/${cvalue.id}`} >
                  <img src={cvalue.imgg1} alt="image" className="rounded-lg" />
                  <div className="sec-img p-4">
                   
                    <img
                      src={cvalue.img2}
                      alt="image"
                      className="rounded-lg"
                    />
                  
                  </div>
                </Link>
              </div>
              <div className="text-left mt-4">
                <h1 className=" font-medium">{cvalue.name}</h1>
                <p className=" font-medium">{cvalue.price}</p>
              </div>
              <div className=" opacity-0 dot">
                <div className="product-bg">
                  <div className="product-action">
                    <Link to=""  onClick={() => send1(product)} className="add-to-cart"><i className="fa-solid fa-basket-shopping"></i></Link>
                    <a href=""><i className="fa-solid fa-arrow-right-arrow-left"></i></a>
                    <a href=""><i className="fa-regular fa-eye"></i></a>
                    <Link to=""  onClick={() => send2(product)} className="add-to-heart"><i className="fa-regular fa-heart"></i></Link>
                  </div>
                </div>
                <div className="flex justify-between ">
                  <div className="flex">
                    <a href="" className="circle-1"></a>
                    <a href="" className="circle-2"></a>
                    <a href="" className="circle-3"></a>
                    <a href="" className="circle-4"></a>
                  </div>
                  <div className='star'>
                    <ul className='flex -mt-5 '>
                      <li>
                        <a href="#"><i className="fas fa-star tex-xl"></i></a>
                        <a href="#"><i className="fas fa-star tex-xl"></i></a>
                        <a href="#"><i className="fas fa-star tex-xl"></i></a>
                        <a href="#"><i className="fas fa-star tex-xl"></i></a>
                        <a href="#"><i className="far fa-star tex-xl"></i></a>
                      </li>
                      <li><p className=' text-xl'>(81)</p></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    })}
  </div>
  <ToastContainer/>
</div>

  )
}

export default ProductCard