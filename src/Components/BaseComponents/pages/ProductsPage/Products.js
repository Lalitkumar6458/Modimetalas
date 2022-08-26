import {useState} from "react";
import "./productsMain.css";
import { ProductsImg } from "../../../../Constants/Data/sliderData";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import StainlessSteel from "./productComponent/StainlessSteel";
import img from '../../../../Constants/Images/subscribe-bg.png'
import img1 from '../../../../Constants/Images/BaseImage/aboutUs.png'
import Contact_btn from "../../contact_btn";

const Products = (props) => {
  var product=false
  window.scrollTo({
    top: 800, 
    behavior: 'smooth'
    /* you can also use 'auto' behaviour
       in place of 'smooth' */
  });

  var heading='Contact Modi Metals for Your requirment Materials Today'
  var text='Contact us for more information regarding our Products options, or request a quote for further pricing details today. Modi Metals is your trusted Metals supplier and manufacturer of premium Products.'
  
  var text1 =props.message
  console.log(text1,'text1')
  if(text1==undefined){
    text1="Our Products"
    product=true
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  }
  return (
    <div className="products_us_page">
      <div className="products_heading">
    
        <h2>{text1.text_heading}</h2>
        <h3>
          <Link to="/">Home</Link> / Products
        </h3>

        <img className="img-fluid" src={text1.img} alt=""/>
      </div>

      <div className="heading mt-4">
        <div className="line_before"></div>
        <h3 className="headinng_text">PRODUCTS</h3>
        <div className="line_after"></div>
      </div>
      <div className="container-fluid">
        <div className="row mx-5 mt-5">
          {ProductsImg.map((item, index) => {


            return (
              <div className="col-md-3 my-3 col-6 products_link">
                <img src={item.img} alt="" />

                <div className="products_name">
                  <h3>{item.heading}</h3>
                </div>
                <div className="bg_hover"></div>
              </div>
            );
          })}
        </div>
      </div>
   
      {product==true?<Contact_btn  content={{heading:heading,text:text}}/>:null}

      
    </div>
  );
};

export default Products;
