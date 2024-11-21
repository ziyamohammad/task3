import React from 'react'


const Item=(items)=> {
    let{ imgUrl,category,title,rating,price,discountPercentage}=items;
    return (
      <div className="card">
        <img src ={imgUrl} height="50%" width="100%" style={{backgroundColor:"white",borderTopLeftRadius:"30px",borderTopRightRadius:"30px"}} alt="/"></img>
         <div className="itemDetail">
            <p className="category">{category}</p>
            <h2 className="name">{title}</h2>
            <p className="rating">rating={rating}</p>
            <span className="all">
            <p className="price">price=${price}</p>
            <p className="discount">discount={discountPercentage}%</p>
            <button className="cart">Add To Cart</button>
            </span>
         </div>
     </div>
    
    )
  }


export default Item
