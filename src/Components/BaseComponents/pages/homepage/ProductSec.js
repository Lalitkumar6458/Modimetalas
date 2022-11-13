import React from 'react'
import { ProductData } from '../../../../Constants/Data/ProductData';
import {  Link } from "react-router-dom";

const ProductSec = () => {
  return (
    <div>


<div className="heading " style={{marginTop:"50px"}}>
    <div className="line_before"></div>
    <h3 className="headinng_text">WHAT WE DO</h3>
    <div className="line_after"></div>
  </div>
  <div className="container">
  <h2>OUR PRODUCTS</h2>
    <div className="row mx-5 mt-5 justify-content-center align-content-center">
      {ProductData.map((item, index) => {


        return (
         <div className=' col-12 col-sm-6 col-md-4 product_type' style={{width:"fit-content"}}>
            <Link to={item.link}>
            <div className='main_products' style={{height:"270px"}}>

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

export default ProductSec