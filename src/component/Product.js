import React, { useEffect, useState } from 'react';
import Items1 from './Items1';
import { Link} from 'react-router-dom';
import { useCart } from './CartContext';


const Product = () => {
  const[state,setState]=useState("light");
  const [item1, setItem1] = useState([]);  
  const API = "https://dummyjson.com/products?limit=194";
  const { addToCart } = useCart();

  
  async function fetchApiData(url) {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);  
      if (data.products && data.products.length > 0) {
        setItem1(data.products);  
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  useEffect(() => {
    fetchApiData(API);
  }, []); 
   

  return (
    <>
      <div className="row2">
        {item1.length > 0 ? (
          item1.map((element) => {
            const { id, images, category, title, rating, price, discountPercentage } = element;
            return (
             
             <div className="column" key={id} >
                <Link to={`/Ziya/${id}`}><Items1
                 imgUrl={images[0]} 
                  category={category}
                  title={title}
                  rating={rating}
                  price={price}
                  discountPercentage={discountPercentage}
                  add={"Add to Cart"}
                 
                /></Link>
               <button onClick={() =>{
                   addToCart({ id, imgUrl: images[0], title, price, rating });
                   }}>ADD</button>
              </div>
            );
          })
        ) : (
          <p>Loading products...</p>
        )}
      </div>
    </>
  );
};

export default Product;
