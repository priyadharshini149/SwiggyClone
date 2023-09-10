import React from 'react'

const ItemCard = (props) => {
    const {data}=props
    const {name,price,description,imageId}=data
  return (
    <div className='item-card'>
            <div className='item-details'>
            <h3 >{name}</h3>
            {price && (<h4 style={{color:" rgb(41, 41, 41)",fontWeight:"bolder"}}>₹{price/100}</h4>)}
            <h4>{description}</h4>
            </div>
            <div className='item-img'>
            <button className='item-button'>ADD</button>
            {imageId && (<img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/"+imageId}></img>)}
            
            </div>
    </div>
  )
}

export default ItemCard
