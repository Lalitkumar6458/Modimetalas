import React from 'react'
import './Flange_new.css'
import {  Link } from "react-router-dom";
import BgImg from '../../../../../Constants/Images/FlangeImg/EN_Flange_Img.png'
import Contact_btn from '../../../contact_btn';
import GradeOption from './GradeOption';
import { FlangeOptionsData } from '../../../../../Constants/Data/FlangeData';
import { Flange_Grade_alloys } from '../../../../../Constants/Data/FlangeData';
const Flange_new = (props) => {
  window.scrollTo({
    top: 0, 
    behavior: 'smooth'
    /* you can also use 'auto' behaviour
       in place of 'smooth' */
  });


    const specification_key=Object.keys(props.name.data[0].Specifications)

const chemical_composition_key =Object.keys(props.name.data[0].chemical)
const products_Flanges_key =Object.keys(props.name.data[0].products_Flanges)



var heading=`Contact Modi Metals for ${props.name.heading} Products Today`
var text=`Contact us for more information regarding our ${props.name.heading} options, or request a quote for further pricing details today. Modi Metals is your trusted ${props.name.heading}  supplier and manufacturer of premium ${props.name.heading} Products .`

  return (
    <>
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

      <div className='Flange_container'>

       <div className='Flange_details'>
<p>{props.name.data[0].text1}</p>
<img className='img-fluid' src={props.name.data[0].img}/>
<p>{props.name.data[0].text2}</p>
       </div>
       <div className='Flange_specifications mt-5'>
        <h3>SPECIFICATIONS </h3>
        <div className='details_sepecification'>


<span > <i class="fa-solid fa-circle   mx-3"></i>Forged stainless steel material conforms to ASME A182</span>
<span> <i class="fa-solid fa-circle   mx-3"></i>Forged stainless steel flange dimensions conform to ASME B16.5</span>
<span> <i class="fa-solid fa-circle   mx-3"></i>NPT Threads conform to ASME B1.20.1</span>
<span> <i class="fa-solid fa-circle   mx-3"></i>Up to 12" Listed</span>
        </div>
        <div className="specfications_table">
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
       </div>
       <div className="specfications_table  mt-5">
          <h3> SPECIFICATIONS OF PR EN 1092-1 FLANGES </h3>
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



        <div className="specfications_table mt-5">
          <h3>Products  In {props.name.heading}</h3>

<div className='row' style={{gap:"20px",marginTop:"30px"}}>

    {props.name.data[0].products_Flanges.length===undefined?products_Flanges_key.map((item)=>{
    return(
<div className='col-12 col-md-4 prodcts_flange_type' style={{marginTop:"20px"}}>
 <h5>{item}</h5>
 <div className="Category_">
{props.name.data[0].products_Flanges[item].map((item)=>{
    return(
<span><i class="fa-solid fa-circle   mx-3"></i>{item}</span>
    )
    
})}
 </div>

</div>
    )
 
}):props.name.data[0].products_Flanges.map((item)=>{
    return(
        <div className='col-12 col-md-4 normal_products'>
 <h5><i class="fa-solid fa-circle   mx-3"></i>{item}</h5>
 </div>
    )
})

    }

   
</div>
<div className="Grade_class">
          <h3>We Provide In That Kind Grades</h3>
          <div className="row gap_">
            {Flange_Grade_alloys.map((item) => {
              return (
                <div className="col-4 box_class">
                  <div className="side_heading">
                    <h4>{item.heading} {props.name.heading}</h4>
                  </div>
                  <div className="grade_type">
                    {item.grade.map((item) => {
                      return (
                        <span>
                          <i class="fa-solid fa-circle   mx-3"></i>
                          {item} {props.name.heading}
                        </span>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

          </div>
          <GradeOption Grade={{data:FlangeOptionsData}} />
        
      </div>
      <Contact_btn  content={{heading:heading,text:text}}/>
    </>
  )
}

export default Flange_new