import React from 'react'
import { IndustryImgData } from '../../../../../Constants/Data/OfferData';
import img from "../../../../../Constants/Images/applictionsimg/img1.jpg"
// import ReactCardSlider from 'react-card-slider-component';
//  import ReactCardSlider from './components/ReactCardSlider';
import ReactCardSlider from './ReactCardSlider';
const IndustriesServe = () => {
  const slides = [
    {image:require("../../../../../Constants/Images/applictionsimg/img1.jpg"),title:"Valves",description:"We are Supplier of Valves"},
    {image:require("../../../../../Constants/Images/applictionsimg/img2.jpg"),title:"Pumps",description:"We are Supplier of Pumps"},
    {image:require("../../../../../Constants/Images/applictionsimg/img3.jpg"),title:"Forging",description:"We are Supplier of Forged Products "},
    {image:require("../../../../../Constants/Images/applictionsimg/img4.jpg"),title:"Heat Exchanger",description:"We are Supplier in Heat Exchanger"},
    {image:require("../../../../../Constants/Images/applictionsimg/img5.jpg"),title:"Power Plant",description:"We are Supplier in Power Plant"},
    {image:require("../../../../../Constants/Images/applictionsimg/img6.jpg"),title:"Offshore Plant",description:"We are Supplier in Offshore Plant"},
    {image:require("../../../../../Constants/Images/applictionsimg/img7.png"),title:"Turbine Seals",description:"We are Supplier of Turbine Seals"},
    {image:require("../../../../../Constants/Images/applictionsimg/img8.jpg"),title:"Petro-Chemical",description:"We are Supplier in Petro-Chemical Industry"},
    {image:require("../../../../../Constants/Images/applictionsimg/img9.jpg"),title:"Refinery",description:"We are Supplier in Refinery factory and mills"},
    {image:require("../../../../../Constants/Images/applictionsimg/img10.png"),title:"Oil & Gas",description:"We are Supplier in Oil & Gas Industry"},
    {image:require("../../../../../Constants/Images/applictionsimg/img11.jpg"),title:"Instrumentation",description:"We are Supplier of Instrumentation Products"},
    {image:require("../../../../../Constants/Images/applictionsimg/img12.jpg"),title:"Constructions",description:"We are Supplier of Constructions Products"},
    {image:require("../../../../../Constants/Images/applictionsimg/img13.jpg"),title:"Pulp and Paper",description:"We are Supplier of Pulp and Paper Products"},
    {image:require("../../../../../Constants/Images/applictionsimg/img14.jpg"),title:"Cement Industry",description:"We are Supplier of Cement Industry Products"},
]
  return (
    <div className='container'>

{/* <div className="heading " style={{}}>
        <div className="line_before"></div>
        <h3 className="headinng_text">Industries We Serve</h3>
        <div className="line_after"></div>
      </div>
      <div className=" container_class d-flex align-items-center mt-4">
        <div className="row justify-content-center align-content-center" style={{gap:"30px"}}>
          {IndustryImgData.map((item) => (
            <div className="col-md-6 col-12 col-lg-4 Offer_card ">
              <img src={item.img} alt=""></img>
              <h4 className='class_indstris_h' style={{fontSize:"1.8rem"}}>{item.heading}</h4>
            </div>
          ))}
        </div>
      </div> */}
{/* 
        <div className='heading'>
    <div className='line_before'></div>
<h3 className='headinng_text'>Industries We Serve</h3>
<div className='line_after'></div>
</div>
<div className="gellary_carbon row mt-5">
            {IndustryImgData.map((item) => {
              return (
                <>
                  <div className="col-12 col-md-4 images_class fastenrs">
                    <img className="" src={item.img} alt=""></img>
                   <h4 className='mt-2'>{item.heading}</h4>
                  </div>
                </>
              );
            })}
          </div> */}
           <div className="heading " style={{}}>
        <div className="line_before"></div>
        <h3 className="headinng_text">Application Industries</h3>
        <div className="line_after"></div>
      </div>
    <div className='application_sider'>

          <ReactCardSlider slides={slides}/>
    </div>
    </div>
  )
}

export default IndustriesServe