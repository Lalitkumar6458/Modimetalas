import React from 'react'
import {  Link } from "react-router-dom";
import { SheetData } from '../../../../../../Constants/Data/ProductData';



const SheetMain = (props) => {
  window.scrollTo({
    top: 0, 
    behavior: 'smooth'
    /* you can also use 'auto' behaviour
       in place of 'smooth' */
  });

  console.log(props.name.data,'name',props.name.img)
  const data_option=props.name.data
  return (
    <div>      <div className="products_heading">
    
    <h2>{props.name.heading}</h2>
    <h3>
      <Link to="/">Home</Link> / Products
    </h3>

    <img className="img-fluid" src={props.name.img} alt=""/>
  </div>

  <div className="heading mt-4">
    <div className="line_before"></div>
    <h3 className="headinng_text">PRODUCTS</h3>
    <div className="line_after"></div>
  </div>

  <div className="container-fluid ">
    <div className="row mx-5 mt-5 justify-content-center align-content-center">
      {data_option.map((item, index) => {


        return (
         <div className='col-md-3'>
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

export default SheetMain