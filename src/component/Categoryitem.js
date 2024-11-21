import React, { useEffect, useState } from 'react';
import Items1 from './Items1';
import { Link, useParams} from 'react-router-dom';


const Categoryitem = () => {
    const{name}=useParams();
  const [item1, setItem1] = useState([]);  
  const API = `https://dummyjson.com/products/category/${name}`;

  
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
  }, [API]); 
   

  return (
    <>
      <div className="row2">
        {item1.length > 0 ? (
          item1.map((element) => {
            const { id, images, category, title, rating, price, discountPercentage } = element;
            return (
             
             <div className="column" key={name} >
                <Link to={`/Ziya/${id}`}><Items1
                 imgUrl={images[0]} 
                  category={category}
                  title={title}
                  rating={rating}
                  price={price}
                  discountPercentage={discountPercentage}
                /></Link>
               
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

export default Categoryitem;
