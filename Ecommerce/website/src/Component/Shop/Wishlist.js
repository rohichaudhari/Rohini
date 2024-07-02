import React from 'react'
import Header1 from '../Home/Header1'
import Navbarr from '../Home/Navbarr'
import Footer from '../Home/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { WREMOVE ,ADD} from '../../Redux/Action/Action'
// import ProductData from '../Product/ProductData'



function Wishlist() {
    // const Data = useDispatch((state) => state.wisheducer.Whish)
    const Wadd_to_cart_data = useSelector((state) => state.wishreducer.whish)
    console.log(Wadd_to_cart_data, "wadd_to_cart_data");

    // console.log(Data, "===>");
    const dispatch = useDispatch();
    const remove = (id) => {
        dispatch(WREMOVE(id));
    }
    const wsend = (e,id)=>{
      
        dispatch(WREMOVE(id));
        dispatch(ADD(e))
    }
    return (
        <div>
            <div className='new-top'>
                <div className='shop bg-orange-100 flex p-5 justify-between w-[100vw]'>
                    <p className='font-bold w-[60vw] text-start'>Welcome to our international shop! Enjoy free shipping on orders $100 up. <span className='text-red-700'>Shop Now  <i class="fa-solid fa-arrow-right"></i></span></p>
                    <div className='account flex justify-around w-[40vw] md:hidden sm:hidden xl:flex '>
                        <p className='font-bold'> <i class="fa-regular fa-user"></i> Account</p>
                        <p> <i class="fa-solid fa-hand-holding-heart"></i>Track your order</p>
                        <div className='iconns flex gap-5'>
                            <p> <i class="fa-brands fa-facebook-f"></i></p>
                            <p><i class="fa-brands fa-twitter"></i></p>
                            <p><i class="fa-brands fa-behance"></i></p>
                            <p><i class="fa-brands fa-youtube"></i></p>
                            <p><i class="fa-solid fa-circle-info"></i></p>
                        </div>
                    </div>
                </div>
                <Header1 />
                <Navbarr />
                <div className='wish-list text-start'>
                    <div className='wishlist-text p-10'>
                        <p className='text-xl font-bold text-slate-500'>Home-----WishList</p>
                        <p className='text-4xl font-bold mt-5'>WishList</p>
                    </div>
                </div>
                <div className='table-1 p-10'>

                    <table className="table-fixed border-2 w-[93vw]  ">
                        <thead>
                            <tr>
                                <th >Images</th>
                                <th>Cources</th>
                                <th>Unit Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th>Add to Card</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            Wadd_to_cart_data.length ?
                            
                                Wadd_to_cart_data.map((cvalue, ind) => {
                                    
                                    // console.log(cvalue, "cvalue");
                                    const { name, price, imgg1, id } = cvalue.cvalue;
                                    return (
                                        <>
                                            <tr className='border' key={id}>
                                                <td className=' flex justify-center'>
                                                    <img src={imgg1} alt="" height={130} width={130} className='py-3' />
                                                </td>
                                                <td className=' border w-[10rem] text-center mx-[25rem]'>{name}</td>
                                                <td className='border text-center' >{price}</td>
                                                <td className='border items-center w-[12rem]' >
                                                    <div className='border py-4  mx-[4rem] flex justify-center rounded '>
                                                        <input type="number" defaultValue={1} className='outline-none border-none focus:border-none mx-2' />
                                                    </div>
                                                </td>
                                                <td className='border text-center' >{price}</td>
                                                <td className='border text-center'><button onClick={()=>wsend(cvalue,id)}   className=' bg-red-600 text-white text-md rounded h-11 w-24'>Add to cart</button></td>
                                                <td className='text-center' ><button onClick={() => remove(id)}>Remove</button></td>
                                            </tr>
                                        </>
                                    )
                                })
                                : <h1 className='text-[35px] font-bold'>whishlist is empty...........</h1>
                                 }
                        </tbody>


                    </table>
                    <div className='footer'>
                        <Footer />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Wishlist