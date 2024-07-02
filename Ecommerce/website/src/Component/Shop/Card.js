import React from 'react'
import Top from '../Home/Top'
import Header1 from '../Home/Header1'
import Navbarr from '../Home/Navbarr'
import Footer from '../Home/Footer'
import { useDispatch, useSelector } from 'react-redux'
import {REMOVE,UPDATE_QUANTITY} from '../../Redux/Action/Action'
// import ProductData from '../Product/ProductData'
function Card() {
  // const data = useSelector((state) => state.cartreducer.carts);
  const data = useSelector((state)=>state.cartreducer.carts)

  // const add_to_cart_data = useSelector((state)=>state.cartreducer.carts)
  // console.log(add_to_cart_data,"add_to_cart_data");
  const quantities = useSelector((state) => state.cartreducer.quantities);
  const dispatch = useDispatch();

  const changeQuantity = (event, id) => {
    const quantity = parseInt(event.target.value);
    dispatch(UPDATE_QUANTITY(id, quantity));
  };

  let Subtotal = 0;
  data.forEach((item) => {
    const quantity = quantities[item.cvalue.id] || 1;
    Subtotal += item.cvalue.price * quantity;
  });

  const Taxes = 9.00;
      const Data = useDispatch((state)=>state.cartreducer.carts)

      console.log(Data,"===>");
      // const dispatch = useDispatch();
      const remove =(id)=>{
        dispatch(REMOVE(id));
      }
  return (
    <div>
        <Top/>
        <Header1/>
        <Navbarr/>
        <div className='card-img text-start p-5'>
            <p className='text-slate-500 font-bold'>Home----card</p>
            <p className='text-6xl font-bold'>Card</p>
        </div>
        <table className="container mx-auto table-fixed border-2 w-[100vw] mt-10 ">
  <thead>
    <tr>
      <th >Images</th>
      <th>Cources</th>
      <th>Unit Price</th>
      <th>Quantity</th>
      <th>Total</th>
      {/* <th>Add to Card</th> */}
      <th>Remove</th>
    </tr>
  </thead>
  <tbody>
                    {data.length ?
                        data.map((cvalue, ind) => {
                            console.log(cvalue,"cvalue");
                            const {name , price , imgg1 , id} = cvalue.cvalue;
                            const quantity = quantities[id] || 1;
                            const totalPrice = quantity * price;
                            return (
                                <>
                                    <tr className='border' key={id}>
                                        <td className=' flex justify-center'>
                                            <img src={imgg1} alt="" height={130} width={130} className='py-3' />
                                        </td>
                                        <td className=' border w-[10rem] text-center mx-[25rem]'>{name}</td>
                                        <td className='border text-center' >${price}</td>
                                        <td className='border items-center w-[12rem]' >
                                            <div className='border py-4  mx-[4rem] flex justify-center rounded '>
                                                <input  onChange={(event) => changeQuantity(event, id)} type="number" defaultValue={quantity} className='outline-none border-none focus:border-none mx-2' />
                                            </div>
                                        </td>
                                        <td className='border text-center' >${totalPrice.toFixed(2)}</td>
                                        
                                         <td className='text-center' ><button onClick={() => remove(id)}>Remove</button></td> 
                                    </tr>
                                </>
                            )
                        })
                    : <h1 className='text-[35px] font-bold'>cart is empty...........</h1>}
                        </tbody>

 
</table>
<div className='button1 container mx-auto mt-10 flex justify-between'>
  <div className='bttn flex gap-5'>
  <div className='butt-1 h-14 w-40 border-2 flex items-center justify-center'>
      <p>Cupon Code</p>
  </div>
  <div className='butt-2 h-14 w-40 border-2 flex items-center justify-center bg-red-700 text-white'>
    <p>Apply cupon</p>
  </div>
  </div>
  <div className='butt-3 h-14 w-40 border-2 flex items-center justify-center bg-red-700 text-white'>
      <p>Update Card</p>
  </div>
</div>
<div className='total text-end'>
  <p className='text-4xl'>Card totals</p>
  <div className='b-1 block float-right '> 
  <div className='subtotal flex w-80 border-2 p-3 justify-between mt-5'>
    <p>subtotal</p>
    <p>${Subtotal.toFixed(2)}</p>
  </div>
  <div className='subtotal-1 flex w-80 border-2 p-3 justify-between mt-5'>
    <p>taxes</p>
    <p>${(Subtotal * Taxes / 100).toFixed(2)}</p>
  </div>
  <div className='subtotal-1 flex w-80 border-2 p-3 justify-between mt-5'>
    <p>total</p>
    <p>${(Subtotal + (Subtotal * Taxes / 100)).toFixed(2)}</p>
  </div>
  <div className='btn-card mt-5'>
  <button type="button" className="focus:outline-none text-white bg-red-700  w-80 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-red-600  dark:focus:ring-purple-900">Process to checkout</button>
  </div>
  </div>
</div>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<Footer/>
    </div>

)
}

export default Card


  
