import React from 'react'
import './SS201.css'
import GradeOption from '../../GradeOption';
import {  Link, useLocation } from "react-router-dom";
import Contact_btn from '../../../../../contact_btn';

const SSallCom = (props) => {
  window.scrollTo({
    top: 0, 
    behavior: 'smooth'
    /* you can also use 'auto' behaviour
       in place of 'smooth' */
  });
  var heading=`Contact Modi Metals for ${props.name.heading} Products Today`
  var text=`Contact us for more information regarding our ${props.name.heading} options, or request a quote for further pricing details today. Modi Metals is your trusted ${props.name.heading}  supplier and manufacturer of premium ${props.name.heading} Products .`
console.log(props,'props')

console.log(Object.keys(props.name.data[0].Specifications),'dta')
// console.log(props.name.data[0].Specification,'one')

const specification_key=Object.keys(props.name.data[0].Specifications)
const chemical_composition_key =Object.keys(props.name.data[0].chemical)
console.log(specification_key,'specification_key')
const Grade=props.name.Grade

console.log(chemical_composition_key.length,'chemical_composition_key')

const location = useLocation();

//destructuring pathname from location
const { pathname } = location;

//Javascript split method to get the name of the path in array
const splitLocation = pathname.split("/");
console.log("splitLocation ",splitLocation,Grade)
  return (
    <div>

<div className="products_heading">
    
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
  <div className='grade_info_products'>

<p>{props.name.data[0].text1}</p>

<img className='img-fluid' src={props.name.data[0].image}/>

{/* <p>{props.name.data[0].text2}
</p> */}

<p>{props.name.data[0].text3}</p>


<div className='specifications'>
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

    {chemical_composition_key.length===0?null:<div className='chemical_composition '>
        <h3>CHEMICAL COMPOSITION</h3>
<div className='table-responsive' >
<table className='table '>
            <thead>
            <tr>
                {chemical_composition_key.map((item)=>{
                    return(
                       
                     <th>{item}</th>
                   
                    )
                     
                })}
              </tr>
            </thead>
            <tbody>
            <tr>
            {chemical_composition_key.map((item)=>{

                    return(
                       
                           <td> {props.name.data[0].chemical[item]}</td>
                     
                    )
                     
                })}
                </tr>
            </tbody>
        </table>

</div>
        
    </div>
  }

    
    
</div>

</div>

<GradeOption Grade={{data:Grade}} />

<Contact_btn  content={{heading:heading,text:text}}/>
    </div>
  )
}

export default SSallCom