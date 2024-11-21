import React, { useEffect, useState } from 'react';
import { Link} from 'react-router-dom';

const Categories = () => {
  const [catItem, setCatItem] = useState([]);
  const API = "https://dummyjson.com/products/categories"; 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(API); 
        const data = await res.json();
        console.log(data);
        if (data) {
          setCatItem(data);
        }
      } catch (error) {
        console.log("Error in fetching data:", error);
      }
    };
    
    fetchData();  
  }, [API]);

  
  if (!catItem) {
    return <p>Loading categories...</p>;
  }

  
  return (
    <div className="category1">
      <h1>Product Categories</h1>
      <div className="categorycards">
        {catItem.length > 0 && catItem.map((category) => {
          const { name,url } = category; 

          return (
            <Link to={`/Categoryitem/${name}`}>
            <div key={url} className="categorycard">
                <h2>{name}</h2>
               </div> 
               </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
