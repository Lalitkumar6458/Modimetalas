import React from 'react'
import {  Link, useLocation } from "react-router-dom";

import { SSsheetGradeData } from '../../../../../Constants/Data/ProductData';
const GradeOption = (props) => {

console.log(props.Grade.data[0],'Grade options')
const Grade=props.Grade.data
var class_="col-md-4 option_class"
if(Grade.length<=2){
  class_="col-md-6 option_class"
}
    const location = useLocation();

    //destructuring pathname from location
    const { pathname } = location;

    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");
    // console.log(splitLocation,'splitLocation')
  return (
    <div>

<div className='grade_options'>
  <h4>We Provide best quality Product in all shapes And All Grades</h4>
<div className='container d-flex justify-content-center align-content-center'>
  <div className='row '>



  {Grade.map((item, index) => {

// console.log( item.link,' item.link',splitLocation[1] )

return (
 <div  className= {class_}>
    <Link to={item.link}>
   
     <div className={'/'+splitLocation[1] === item.link ? "Grade_active grade_normal" : "grade_name grade_normal"}>
<h5>{item.grade}
</h5>
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
  )
}

export default GradeOption