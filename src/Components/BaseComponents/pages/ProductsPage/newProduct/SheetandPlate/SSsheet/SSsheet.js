import React from 'react'
import {  Link } from "react-router-dom";
import './SSsheet.css'
import { SSsheetGradeData } from '../../../../../../../Constants/Data/ProductData';
import GradeOption from '../../GradeOption';
import Contact_btn from '../../../../../contact_btn';


const SSsheet = (props) => {
  window.scrollTo({
    top: 0, 
    behavior: 'smooth'
    /* you can also use 'auto' behaviour
       in place of 'smooth' */
  });
  var heading=`Contact Modi Metals for ${props.name.heading} Products Today`
  var text=`Contact us for more information regarding our ${props.name.heading} options, or request a quote for further pricing details today. Modi Metals is your trusted ${props.name.heading}  supplier and manufacturer of premium ${props.name.heading} Products .`
  const specification_key=Object.keys(props.name.data[0].Specifications)
 
  const Grade=props.name.Grade
  return (
    <div><div className="products_heading">
    
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

  <div className='content_metal'>

    <p className='d-none'>{props.name.data[0].text1}</p>
    <p>{props.name.data[0].text2}</p>
    <p>{props.name.data[0].text3}</p>

<img href='' alt=''/>

<div className='specifications px-5'>
    <h3> SPECIFICATION</h3>
    <table className='table'>
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

  </div>
  <GradeOption Grade={{data:Grade}} />
  
  
<Contact_btn  content={{heading:heading,text:text}}/>
  
  </div>
  )
}

export default SSsheet