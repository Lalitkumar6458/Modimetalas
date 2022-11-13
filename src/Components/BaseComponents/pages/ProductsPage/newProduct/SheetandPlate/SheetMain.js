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
  var heading=`Contact Modi Metals for ${props.name.heading} Products Today`
  var text=`Contact us for more information regarding our ${props.name.heading} options, or request a quote for further pricing details today. Modi Metals is your trusted ${props.name.heading}  supplier of premium ${props.name.heading} Products .`

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
<h3 className={item.heading=="Duplex & Superduplex Sheet/Plate"?"font_size":null}>{item.heading}</h3>


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