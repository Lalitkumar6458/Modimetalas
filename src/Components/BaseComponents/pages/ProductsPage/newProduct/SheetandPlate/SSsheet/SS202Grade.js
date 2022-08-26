import React from 'react'
import {  Link } from "react-router-dom";
import './SS201.css'
import GradeOption from '../../GradeOption';

const SS202Grade = (props) => {

    console.log(props.name.data[0].specification[0].Steel_Grades,'name')
  return (
    <div>
        
        <div className="products_heading">
    
    <h2>STAINLESS STEEL 202 SHEET AND PLATE</h2>
    <h3>
      <Link to="/">Home</Link> / Products
    </h3>

    <img className="img-fluid" src='' alt=""/>
  </div>

  <div className="heading mt-4">
    <div className="line_before"></div>
    <h3 className="headinng_text">PRODUCTS</h3>
    <div className="line_after"></div>
  </div>
<div className='grade_info_products'>

<p>{props.name.data[0].text1}</p>

<img className='' src=''/>

<p>{props.name.data[0].text2}
</p>

<p>{props.name.data[0].text3}</p>


<div className='specifications'>
    <h3> SPECIFICATION</h3>
    <table className='table'>
        <tbody>
            <tr>
                <td>Steel Grades</td>
                <td>
                    {props.name.data[0].specification[0].Grade}
                </td>
            </tr>
            <tr>
                <td>Standard</td>
                <td>  {props.name.data[0].specification[0].Standard}</td>
            </tr>
            <tr>
                
                <td>Size</td>
                <td>  {props.name.data[0].specification[0].Size}</td>
            </tr>
            <tr>
                <td>Thickness</td>
                <td>  {props.name.data[0].specification[0].Thickness}</td>
            </tr>
          
            <tr>
                <td>Finish	</td>
                <td>  {props.name.data[0].specification[0].Finish}
</td>
            </tr>
            <tr>
                <td>Hardness</td>
                <td>  {props.name.data[0].specification[0].Hardness}
</td>
            </tr>
     
            <tr>
                <td>Application</td>
                <td>  {props.name.data[0].specification[0].application}</td>
            </tr>
        </tbody>
    </table>

    <div className='chemical_composition '>
        <h3>CHEMICAL COMPOSITION</h3>

        <table className=''>
            <thead>
                <tr>
                    <th>Grade</th>
                    <th>C</th>
                    <th>Mn</th>
                    <th>Si</th>
                    <th>P</th>
                    <th>S</th>
                    <th>Cr</th>
                    <th>Mo</th>
                    <th>Ni</th>
                    <th>Cu</th>
                    <th>N</th>

                </tr>
            </thead>
            <tbody>
            <tr>
               
               <td>  {props.name.data[0].chemical_composition[0].Grade}</td>
                   <td>{props.name.data[0].chemical_composition[0].c}</td>
                   <td>{props.name.data[0].chemical_composition[0].Mn}</td>
                   <td>{props.name.data[0].chemical_composition[0].Si}</td>
                   <td>{props.name.data[0].chemical_composition[0].P }</td>
                   <td>{props.name.data[0].chemical_composition[0].S }</td>
                   <td>{props.name.data[0].chemical_composition[0].Cr}</td>
                   <td>{props.name.data[0].chemical_composition[0].Mo}</td>
                   <td>{props.name.data[0].chemical_composition[0].Ni}</td>

                   <td>{props.name.data[0].chemical_composition[0].Cu}</td>
                   <td>{props.name.data[0].chemical_composition[0].N}</td>
                 
               </tr>
            </tbody>
        </table>
    </div>

</div>

</div>
<GradeOption />



    </div>
  )
}

export default SS202Grade