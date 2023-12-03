import React from 'react'
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { ITEM_IMG } from '../utils/constants';
import { clearCart, removeItem } from '../utils/cartSlice'
const Cart = () => {
 const cartItem=useSelector((store)=>store.cart.items);
 console.log(cartItem);
 const dispatch=useDispatch();
   const handleRemoveItem=(index)=>{
      dispatch(removeItem(index))
    }
 if(cartItem.length==0)
 {
    return(
        <div className='noCart'>
            no items in the cart
        </div>
    );
 }
  return (
    <div className="cart">
      <h1>Cart Details</h1>
      <div className='cart-details'>

      {
        cartItem.map((item,index)=>(
            <div key={index} style={{margin:"auto",width:"70%"}}>
                
            <div className='item-card' >
            <div className='item-details'>
            <h3 >{item.name}</h3>
            {item.price && (<h4 style={{color:" rgb(41, 41, 41)",fontWeight:"bolder"}}>₹{item.price/100}</h4>)}
            <h4>{item.description}</h4>
            </div>
            <div className='item-img'>
            {item.imageId && (<img src={ITEM_IMG+item.imageId}></img>)}
            <button className='item-button' onClick={()=>handleRemoveItem(index)}>Remove</button>
            </div>
            </div>
           
            </div>
        ))
      }
      <div className='total'>
        Total: <span>

           {
            cartItem.reduce((total,item)=>total+item.price/100,0)
           }
        </span>
      </div>
      </div>
           
    </div>
  )
}

export default Cart
