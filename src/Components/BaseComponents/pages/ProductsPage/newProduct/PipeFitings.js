import React from "react";
import BgImg from "../../../../../Constants/Images/Pipefitings/BgPImg.jpg";
import { Routes, Route, Link } from "react-router-dom";
import "./PipeFitings.css";
import { Buttweld_Pipe_Fittings } from "../../../../../Constants/Data/PipeFitings";
import alboimg from "../../../../../Constants/Images/Pipefitings/ButtImg1.jpg"
import { CategoriesButtdata } from "../../../../../Constants/Data/PipeFitings";
import { PipeFitingsGradeData } from "../../../../../Constants/Data/PipeFitings";

import GradeOption from "./GradeOption";
import Contact_btn from "../../../contact_btn";
const PipeFitings = (props) => {
    window.scrollTo({
        top: 0, 
        behavior: 'smooth'
        /* you can also use 'auto' behaviour
           in place of 'smooth' */
      });
      var heading=`Contact Modi Metals for ${props.name.heading} Products Today`
      var text=`Contact us for more information regarding our ${props.name.heading} options, or request a quote for further pricing details today. Modi Metals is your trusted ${props.name.heading}  supplier and manufacturer of premium ${props.name.heading} Products .`
    const specification_key=Object.keys(props.name.data[0].Specifications)

const chemical_composition_key =Object.keys(props.name.data[0].chemical)

  return (
    <div>
      <div className="products_heading">
        <h2>{props.name.heading}</h2>
        <h3>
          <Link to="/">Home</Link> / Products
        </h3>

        <img className="img-fluid" src={BgImg} alt="" />
      </div>

      <div className="heading mt-4">
        <div className="line_before"></div>
        <h3 className="headinng_text">PRODUCTS</h3>
        <div className="line_after"></div>
      </div>

      <div className="Pipe_Fittings">
        <p>
        {props.name.data[0].text1}
        </p>
        {
          props.name.data[0].text3===""?null: <p>
          {props.name.data[0].text3}
          </p>
        }
       
        <img className="img-fluid" src={props.name.img} alt="" />
        <p className="pipefiting_text">
        {props.name.data[0].text2}
        </p>
        <div className="specfications_table">
          <h3> SPECIFICATION</h3>
          <table className="table">
          
            <tbody>
          {specification_key.map((item)=>{

           return(
            <tr>
            <td>{item}</td>
            <td>{props.name.data[0].Specifications[item]}</td>
        </tr>
           )
            

          })}
          
       
            </tbody>
          </table>
        </div>
        <div className="specfications_table">
        {props.name.heading=="Ferrule Pipe Fittings"?<h3> Ferrule Fittings Standard Configurations</h3>: <h3> FORGED PIPE FITTINGS MANUFACTURING STANDARDS</h3>}
         
          <table className="table">
          
            <tbody>
          {chemical_composition_key.map((item)=>{

           return(
            <tr>
            <td>{item}</td>
            <td>{props.name.data[0].chemical[item]}</td>
        </tr>
           )
            

          })}
          
       
            </tbody>
          </table>
        </div>

        <div className="Grade_class">
          <h3>We Provide In That Kind Grades</h3>
          <div className="row gap_">
            {props.name.data[0].grade.map((item) => {
              return (
                <div className="col-4 box_class">
                  <div className="side_heading">
                    <h4>{item.heading}</h4>
                  </div>
                  <div className="grade_type">
                    {item.grade.map((item) => {
                      return (
                        <span>
                          <i class="fa-solid fa-circle   mx-3"></i>
                          {item}
                        </span>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>


        <div className="category_fitings">
    
                    <h3>Our Products In {props.name.heading}</h3>
              
                  <div className="row Img_butt ">
                    {props.name.Category.map((item)=>{
                        return(
                            <div className="col-12 col-md-4 position-relative cat_box">
                          
            <img className="img-fluid type_img_p" src={item.img} alt="" />
            <h4>{item.heading}</h4>
    
                        </div>
                        )
                    })}
                  
                  </div>
        </div>


        <GradeOption Grade={{data:PipeFitingsGradeData}} />

      
      </div>
      <Contact_btn  content={{heading:heading,text:text}}/>

    </div>
  );
};

export default PipeFitings;
