import React, {useState} from 'react'
import Item from './Item'
import { Link} from 'react-router-dom';


const Products=()=> {
  const[items]=useState([
    {
      "id": 1,
      "title": "Essence Mascara Lash Princess",
      "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
      "category": "beauty",
      "price": 9.99,
      "discountPercentage": 7.17,
      "rating": 4.94,
      "stock": 5,
      "tags": [
        "beauty",
        "mascara"
      ],
      "brand": "Essence",
      "sku": "RCH45Q1A",
      "weight": 2,
      "dimensions": {
        "width": 23.17,
        "height": 14.43,
        "depth": 28.01
      },
      "warrantyInformation": "1 month warranty",
      "shippingInformation": "Ships in 1 month",
      "availabilityStatus": "Low Stock",
      "reviews": [
        {
          "rating": 2,
          "comment": "Very unhappy with my purchase!",
          "date": "2024-05-23T08:56:21.618Z",
          "reviewerName": "John Doe",
          "reviewerEmail": "john.doe@x.dummyjson.com"
        },
        {
          "rating": 2,
          "comment": "Not as described!",
          "date": "2024-05-23T08:56:21.618Z",
          "reviewerName": "Nolan Gonzalez",
          "reviewerEmail": "nolan.gonzalez@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Very satisfied!",
          "date": "2024-05-23T08:56:21.618Z",
          "reviewerName": "Scarlett Wright",
          "reviewerEmail": "scarlett.wright@x.dummyjson.com"
        }
      ],
      "returnPolicy": "30 days return policy",
      "minimumOrderQuantity": 24,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.618Z",
        "updatedAt": "2024-05-23T08:56:21.618Z",
        "barcode": "9164035109868",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png"
    },
    {
      "id": 2,
      "title": "Eyeshadow Palette with Mirror",
      "description": "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
      "category": "beauty",
      "price": 19.99,
      "discountPercentage": 5.5,
      "rating": 3.28,
      "stock": 44,
      "tags": [
        "beauty",
        "eyeshadow"
      ],
      "brand": "Glamour Beauty",
      "sku": "MVCFH27F",
      "weight": 3,
      "dimensions": {
        "width": 12.42,
        "height": 8.63,
        "depth": 29.13
      },
      "warrantyInformation": "1 year warranty",
      "shippingInformation": "Ships in 2 weeks",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 4,
          "comment": "Very satisfied!",
          "date": "2024-05-23T08:56:21.618Z",
          "reviewerName": "Liam Garcia",
          "reviewerEmail": "liam.garcia@x.dummyjson.com"
        },
        {
          "rating": 1,
          "comment": "Very disappointed!",
          "date": "2024-05-23T08:56:21.618Z",
          "reviewerName": "Nora Russell",
          "reviewerEmail": "nora.russell@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Highly impressed!",
          "date": "2024-05-23T08:56:21.618Z",
          "reviewerName": "Elena Baker",
          "reviewerEmail": "elena.baker@x.dummyjson.com"
        }
      ],
      "returnPolicy": "30 days return policy",
      "minimumOrderQuantity": 32,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.618Z",
        "updatedAt": "2024-05-23T08:56:21.618Z",
        "barcode": "2817839095220",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/1.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png"
    },
    {
      "id": 3,
      "title": "Powder Canister",
      "description": "The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish.",
      "category": "beauty",
      "price": 14.99,
      "discountPercentage": 18.14,
      "rating": 3.82,
      "stock": 59,
      "tags": [
        "beauty",
        "face powder"
      ],
      "brand": "Velvet Touch",
      "sku": "9EN8WLT2",
      "weight": 8,
      "dimensions": {
        "width": 24.16,
        "height": 10.7,
        "depth": 11.07
      },
      "warrantyInformation": "2 year warranty",
      "shippingInformation": "Ships in 1-2 business days",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 5,
          "comment": "Very happy with my purchase!",
          "date": "2024-05-23T08:56:21.618Z",
          "reviewerName": "Ethan Thompson",
          "reviewerEmail": "ethan.thompson@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Great value for money!",
          "date": "2024-05-23T08:56:21.618Z",
          "reviewerName": "Levi Hicks",
          "reviewerEmail": "levi.hicks@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Highly impressed!",
          "date": "2024-05-23T08:56:21.618Z",
          "reviewerName": "Hazel Gardner",
          "reviewerEmail": "hazel.gardner@x.dummyjson.com"
        }
      ],
      "returnPolicy": "60 days return policy",
      "minimumOrderQuantity": 25,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.618Z",
        "updatedAt": "2024-05-23T08:56:21.618Z",
        "barcode": "0516267971277",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/thumbnail.png"
    },
    {
      "id": 4,
      "title": "Red Lipstick",
      "description": "The Red Lipstick is a classic and bold choice for adding a pop of color to your lips. With a creamy and pigmented formula, it provides a vibrant and long-lasting finish.",
      "category": "beauty",
      "price": 12.99,
      "discountPercentage": 19.03,
      "rating": 2.51,
      "stock": 68,
      "tags": [
        "beauty",
        "lipstick"
      ],
      "brand": "Chic Cosmetics",
      "sku": "O5IF1NTA",
      "weight": 5,
      "dimensions": {
        "width": 14.37,
        "height": 13.94,
        "depth": 14.6
      },
      "warrantyInformation": "Lifetime warranty",
      "shippingInformation": "Ships in 2 weeks",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 5,
          "comment": "Great product!",
          "date": "2024-05-23T08:56:21.619Z",
          "reviewerName": "Leo Rivera",
          "reviewerEmail": "leo.rivera@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Very pleased!",
          "date": "2024-05-23T08:56:21.619Z",
          "reviewerName": "Oscar Powers",
          "reviewerEmail": "oscar.powers@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Very pleased!",
          "date": "2024-05-23T08:56:21.619Z",
          "reviewerName": "Carter Rivera",
          "reviewerEmail": "carter.rivera@x.dummyjson.com"
        }
      ],
      "returnPolicy": "90 days return policy",
      "minimumOrderQuantity": 6,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.619Z",
        "updatedAt": "2024-05-23T08:56:21.619Z",
        "barcode": "9444582199406",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/1.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/thumbnail.png"
    },
    {
      "id": 5,
      "title": "Red Nail Polish",
      "description": "The Red Nail Polish offers a rich and glossy red hue for vibrant and polished nails. With a quick-drying formula, it provides a salon-quality finish at home.",
      "category": "beauty",
      "price": 8.99,
      "discountPercentage": 2.46,
      "rating": 3.91,
      "stock": 71,
      "tags": [
        "beauty",
        "nail polish"
      ],
      "brand": "Nail Couture",
      "sku": "YUIIIP4W",
      "weight": 9,
      "dimensions": {
        "width": 8.11,
        "height": 10.89,
        "depth": 29.06
      },
      "warrantyInformation": "1 year warranty",
      "shippingInformation": "Ships in 1 week",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 5,
          "comment": "Very pleased!",
          "date": "2024-05-23T08:56:21.619Z",
          "reviewerName": "Leo Rivera",
          "reviewerEmail": "leo.rivera@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Great product!",
          "date": "2024-05-23T08:56:21.619Z",
          "reviewerName": "Evan Reed",
          "reviewerEmail": "evan.reed@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Highly recommended!",
          "date": "2024-05-23T08:56:21.619Z",
          "reviewerName": "Evelyn Sanchez",
          "reviewerEmail": "evelyn.sanchez@x.dummyjson.com"
        }
      ],
      "returnPolicy": "No return policy",
      "minimumOrderQuantity": 46,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.619Z",
        "updatedAt": "2024-05-23T08:56:21.619Z",
        "barcode": "3212847902461",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/beauty/Red%20Nail%20Polish/1.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/beauty/Red%20Nail%20Polish/thumbnail.png"
    },
    {
      "id": 6,
      "title": "Calvin Klein CK One",
      "description": "CK One by Calvin Klein is a classic unisex fragrance, known for its fresh and clean scent. It's a versatile fragrance suitable for everyday wear.",
      "category": "fragrances",
      "price": 49.99,
      "discountPercentage": 0.32,
      "rating": 4.85,
      "stock": 17,
      "tags": [
        "fragrances",
        "perfumes"
      ],
      "brand": "Calvin Klein",
      "sku": "DZM2JQZE",
      "weight": 5,
      "dimensions": {
        "width": 11.53,
        "height": 14.44,
        "depth": 6.81
      },
      "warrantyInformation": "5 year warranty",
      "shippingInformation": "Ships overnight",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 5,
          "comment": "Great value for money!",
          "date": "2024-05-23T08:56:21.619Z",
          "reviewerName": "Sophia Brown",
          "reviewerEmail": "sophia.brown@x.dummyjson.com"
        },
        {
          "rating": 3,
          "comment": "Very disappointed!",
          "date": "2024-05-23T08:56:21.619Z",
          "reviewerName": "Madison Collins",
          "reviewerEmail": "madison.collins@x.dummyjson.com"
        },
        {
          "rating": 1,
          "comment": "Poor quality!",
          "date": "2024-05-23T08:56:21.619Z",
          "reviewerName": "Maya Reed",
          "reviewerEmail": "maya.reed@x.dummyjson.com"
        }
      ],
      "returnPolicy": "No return policy",
      "minimumOrderQuantity": 20,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.619Z",
        "updatedAt": "2024-05-23T08:56:21.619Z",
        "barcode": "2210136215089",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/1.png",
       
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/thumbnail.png"
    },
    {
      "id": 7,
      "title": "Chanel Coco Noir Eau De",
      "description": "Coco Noir by Chanel is an elegant and mysterious fragrance, featuring notes of grapefruit, rose, and sandalwood. Perfect for evening occasions.",
      "category": "fragrances",
      "price": 129.99,
      "discountPercentage": 18.64,
      "rating": 2.76,
      "stock": 41,
      "tags": [
        "fragrances",
        "perfumes"
      ],
      "brand": "Chanel",
      "sku": "K71HBCGS",
      "weight": 4,
      "dimensions": {
        "width": 21.27,
        "height": 28,
        "depth": 11.89
      },
      "warrantyInformation": "1 week warranty",
      "shippingInformation": "Ships in 1 month",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 1,
          "comment": "Disappointing product!",
          "date": "2024-05-23T08:56:21.619Z",
          "reviewerName": "Lincoln Kelly",
          "reviewerEmail": "lincoln.kelly@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Great product!",
          "date": "2024-05-23T08:56:21.619Z",
          "reviewerName": "Lincoln Kelly",
          "reviewerEmail": "lincoln.kelly@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Excellent quality!",
          "date": "2024-05-23T08:56:21.619Z",
          "reviewerName": "Lucas Allen",
          "reviewerEmail": "lucas.allen@x.dummyjson.com"
        }
      ],
      "returnPolicy": "60 days return policy",
      "minimumOrderQuantity": 5,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.619Z",
        "updatedAt": "2024-05-23T08:56:21.619Z",
        "barcode": "1435582999795",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        
        "https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/3.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/thumbnail.png"
    },
    {
      "id": 8,
      "title": "Dior J'adore",
      "description": "J'adore by Dior is a luxurious and floral fragrance, known for its blend of ylang-ylang, rose, and jasmine. It embodies femininity and sophistication.",
      "category": "fragrances",
      "price": 89.99,
      "discountPercentage": 17.44,
      "rating": 3.31,
      "stock": 91,
      "tags": [
        "fragrances",
        "perfumes"
      ],
      "brand": "Dior",
      "sku": "E70NB03B",
      "weight": 10,
      "dimensions": {
        "width": 21.51,
        "height": 7,
        "depth": 26.51
      },
      "warrantyInformation": "Lifetime warranty",
      "shippingInformation": "Ships in 2 weeks",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 5,
          "comment": "Fast shipping!",
          "date": "2024-05-23T08:56:21.619Z",
          "reviewerName": "Zoe Nicholson",
          "reviewerEmail": "zoe.nicholson@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Excellent quality!",
          "date": "2024-05-23T08:56:21.619Z",
          "reviewerName": "Addison Wright",
          "reviewerEmail": "addison.wright@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Would buy again!",
          "date": "2024-05-23T08:56:21.619Z",
          "reviewerName": "Clara Berry",
          "reviewerEmail": "clara.berry@x.dummyjson.com"
        }
      ],
      "returnPolicy": "7 days return policy",
      "minimumOrderQuantity": 8,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.619Z",
        "updatedAt": "2024-05-23T08:56:21.619Z",
        "barcode": "0887083199279",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [

        "https://cdn.dummyjson.com/products/images/fragrances/Dior%20J'adore/2.png",
        
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/fragrances/Dior%20J'adore/thumbnail.png"
    },
    {
      "id": 18,
      "title": "Cat Food",
      "description": "Nutritious cat food formulated to meet the dietary needs of your feline friend.",
      "category": "groceries",
      "price": 8.99,
      "discountPercentage": 9.57,
      "rating": 2.88,
      "stock": 13,
      "tags": [
        "pet supplies",
        "cat food"
      ],
      "sku": "C3F8QN6O",
      "weight": 9,
      "dimensions": {
        "width": 15.4,
        "height": 13.97,
        "depth": 25.13
      },
      "warrantyInformation": "3 months warranty",
      "shippingInformation": "Ships in 1-2 business days",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 5,
          "comment": "Very pleased!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "Mateo Bennett",
          "reviewerEmail": "mateo.bennett@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Very pleased!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "Aurora Barnes",
          "reviewerEmail": "aurora.barnes@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Great value for money!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "Ellie Stewart",
          "reviewerEmail": "ellie.stewart@x.dummyjson.com"
        }
      ],
      "returnPolicy": "7 days return policy",
      "minimumOrderQuantity": 48,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.620Z",
        "updatedAt": "2024-05-23T08:56:21.620Z",
        "barcode": "5503491330693",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/groceries/Cat%20Food/1.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/groceries/Cat%20Food/thumbnail.png"
    }
  ]); 
   return (
    <>
       <h1 className="heading">Trending Products</h1>
        <div className="row">
          {items.map((element) =>{
            return(<div className="column" key={element.id}>
             <Link to={`/Ziya/${element.id}`}><Item
                imgUrl={element.images}
                category={element.category}
                title={element.title}
                rating={element.rating}
                price={element.price}
                discountPercentage={element.discountPercentage}
              /></Link>
            </div>
            )
          
          })}
        </div>
      </>
    );
  }


export default Products;