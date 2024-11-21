import React, { useEffect, useState } from 'react';
 import { useParams } from 'react-router';

function Ziya() {
  const [productDetail, setProductDetail] = useState(null);  
  const{id}=useParams();
  const API=`https://dummyjson.com/product/${id}`;
  
     useEffect(() => {
        const fetchApiData= async()=> {
      try {
        const res = await fetch(API);
        const data = await res.json();
        console.log(data);
  
        
        if (data) {
          setProductDetail(data); 
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }; fetchApiData();
  }, [API]); 

  
  if (!productDetail) {
    return <p>Loading product...</p>;  
  }
const{images,name,price,discountPercentage,brand,category,stock,description}=productDetail;
  return (
    <>
      <div key={id} className="main">
        <div className="main1">
          <img
            src={images[0]}  
            width="100%"
            height="40%"
            style={{ marginTop: "4rem" }}
            alt={name}
          />
        </div>
        <div className="main2">
          <h2>{name}</h2>
          <p className="detail">Price: ${ price}</p>
          <p className="detail">Discount: { discountPercentage}%</p>
          <p className="detail">
            <span className="itemdetail">Brand</span>: { brand}
          </p>
          <p className="detail">
            <span className="itemdetail">Category</span>: { category}
          </p>
          <p className="detail">
            <span className="itemdetail">Stock</span>: { stock}
          </p>
          <p className="detail">
            <span className="itemdetail">About the product</span>
          </p>
          <p className="detail">{ description}</p>
          <span className="itemdetail">
            <button className="but3" style={{ marginRight: "1.7rem" }}>
              Add To Cart
            </button>
            <button className="but3">Buy Now</button>
          </span>
        </div>
        <div className="main3">
          <span className="itemdetail1">Reviews</span>
          <p className="itemdetail">Product reviews will go here.</p>
          <p>{ description}</p>
        </div>
      </div>
    </>
  );
}

export default Ziya;
