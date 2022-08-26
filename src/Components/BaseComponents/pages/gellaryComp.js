import React from 'react'
import './Gallery.css'



const GellaryComp = (props) => {
  var data=props.data.CopperImgData
  // console.log(props.data,data)
  return (
    <div>
      
      <div className='container'>

        <div className='gallery'>
        <h4>{props.data.title}</h4>
<div className='row aling-items-center justify-content-center' style={{paddingTop:'40px'}}>
{
  data.map((item)=>{
    return(
      <div className='col-4 Img_class' >
     <img src={item.img} alt=''></img>
      </div>
    )
  })
}
 
 
</div>
        </div>


      </div>
      
      </div>
  )
}

export default GellaryComp