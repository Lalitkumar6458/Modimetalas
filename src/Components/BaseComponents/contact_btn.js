import React from 'react'
import { Link } from "react-router-dom";


const Contact_btn = (props) => {
       const  content=  props.content

  return (
    <>

<div class="newsletter">

<h3>{content.heading}</h3>
<p>  {content.text}</p>

<Link to='/contact'><button className='contact_btn'>Quick Enquiry</button></Link>

</div>
    </>
  )
}

export default Contact_btn