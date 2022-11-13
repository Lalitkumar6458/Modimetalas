import {useState} from "react";
import "./productsMain.css";
import { ProductsImg } from "../../../../Constants/Data/sliderData";
import { Routes, Route, Link, Outlet,useLocation } from "react-router-dom";
import StainlessSteel from "./productComponent/StainlessSteel";
import img from '../../../../Constants/Images/subscribe-bg.png'
import img1 from '../../../../Constants/Images/BaseImage/aboutUs.png'
import Contact_btn from "../../contact_btn";
import { SpecialAlloysgrade } from "../../../../Constants/Data/SpecialAlloys";
import { ProductData } from "../../../../Constants/Data/ProductData";
const Products = (props) => {
  var product=false
  window.scrollTo({
    top: 800, 
    behavior: 'smooth'
    /* you can also use 'auto' behaviour
       in place of 'smooth' */
  });
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");

  var heading='Contact Modi Metals for Your requirment Materials Today'
  var text='Contact us for more information regarding our Products options, or request a quote for further pricing details today. Modi Metals is your trusted Metals supplier and manufacturer of premium Products.'
  
  var text1 =props.message
  
  if(text1.text_heading=="Special Alloys"){
   
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
          <Link to="/">Home</Link> / Special Alloys
        </h3>

        <img className="img-fluid" src={text1.img} alt=""/>
      </div>

      <div className="heading mt-4">
        <div className="line_before"></div>
        <h3 className="headinng_text">Our Products</h3>
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
      {product==true?
      <div className="row" style={{ gap: "85px" }}>
        <div className="col-md-8 ">
        <div className="alloys_content">
<h3>What Is An Alloy</h3>
        <p>An alloy is a combination of a metal with at least one other metal or nonmetal. The combination must be part of a solid solution, a compound, or a mixture with another metal or nonmetal in order for it to be considered an alloy. The most common way to combine metals into an alloy is by melting them, mixing them together, and then allowing them to solidify and cool back to room temperature</p>

        <h3>Why Are Alloys Used?</h3>
        <p>
        Metal alloys are used because they typically have enhanced mechanical or chemical properties. Alloying elements can be added to a metal to increase a number of properties including hardness, strength, corrosion resistance, machinability, and much more
        </p>
        <h3>What Are Common Alloys?</h3>
        <p>Alloys are so abundant throughout the metalworking industry that there are too many to list. In fact, it is far less likely to work with a non-alloy, or “pure metal.” Even low carbon mild steel – perhaps the most frequently used material in metal fabrication – is an alloy of iron and carbon. An example of a steel alloy would be AISI 1018. Cast iron is another alloy of iron and carbon, with even higher amounts of carbon than mild steel.</p>
        <p>Aluminum is often alloyed with other elements as well, giving it the attributes required for the desired application. For example, aluminum 6061 and 2024 have high additions of manganese or copper, respectively.</p>
        <p>Alloys can also be extremely complex. Austenitic stainless steels, such as Grade 316, are a synthesis of iron, chromium, nickel, and some other metals and nonmetals. Bronze (which itself is an alloy of copper and tin) is often further alloyed with elements such as aluminum. Grade C954 is an example of an aluminum bronze alloy.</p>
      </div></div>
      
      <div className="col-md-3">
            <div className="Special_P" style={{padding:"0 30px"}}>
              <h2 className="heading_a">
                Special Alloys <span className="line_h"></span>
              </h2>

              <div className="Grade_options_a">
                <div className="row " style={{ gap: "10px" }}>
                  {SpecialAlloysgrade.map((item) => {
                    return (
                      <div className="col-12 col-md-12">
                        <Link to={item.link}>
                          <div className={'/'+splitLocation[1]+'/'+splitLocation[2] === item.link ? "Grade_active grade_a_o" : "grade_a_o"}>
                            <h5>{item.heading}</h5>
                            <i class="fa-solid fa-angles-right"></i>
                          </div>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="Special_P mt-5" style={{padding:"0 30px"}}>
              <h2 className="heading_a">
              Our Products <span className="line_h"></span>
              </h2>

              <div className="Grade_options_a" >
                <div className="row " style={{ gap: "10px" }}>
                  {ProductData.map((item) => {
                    return (
                      <div className="col-12 col-md-12">
                        <Link to={item.link}>
                          <div className="grade_a_o">
                            <h5>{item.heading}</h5>
                            <i class="fa-solid fa-angles-right"></i>
                          </div>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
      
      
      
      </div>:null}
        
      
     
   
      {product==true?
      
      
      
      
      
      <Contact_btn  content={{heading:heading,text:text}}/>:null}

      
    </div>
  );
};

export default Products;
