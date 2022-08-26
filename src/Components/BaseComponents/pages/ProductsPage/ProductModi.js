import React from 'react'
import { ProductData } from '../../../../Constants/Data/ProductData';
import { Routes, Route, Link, Outlet } from "react-router-dom";
import ProductImg from "../../../../Constants/Images/BaseImage/ProductMain.png"
import './ProductModi.css'
const ProductModi = () => {
  return (
    <div>
          <div className="products_heading">
    
    <h2>Our Products</h2>
    <h3>
      <Link to="/">Home</Link> / Products
    </h3>

    <img className="img-fluid" src={ProductImg} alt=""/>
  </div>

  <div className="heading mt-4">
    <div className="line_before"></div>
    <h3 className="headinng_text">PRODUCTS</h3>
    <div className="line_after"></div>
  </div>
  <div className="container-fluid ">
    <div className="row mx-5 mt-5 justify-content-center align-content-center">
      {ProductData.map((item, index) => {


        return (
         <div className='col-md-4 product_type'>
            <Link to={item.link}>
            <div className='main_products'>

<img className="img-fluid" src={item.img} alt=""/>
<h3>{item.heading}</h3>

      </div>
            </Link>
         

         </div>
        );
      })}
    </div>
  </div> 
    </div>
  )
}


export default ProductModi