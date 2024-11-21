import React from 'react'
import NavBar from './NavBar'
import Images from './Images'
import Specify from './Specify'
import Products from './Products'
import NewArrival from './NewArrival'
import Footer from './Footer'

const Shop = () => {
  return (
    <div className="whole">
        <NavBar/>
        <Images/>
        <Specify/>
        <Products/>
        <NewArrival/>
        <Footer/>
      
    </div>
  )
}

export default Shop
