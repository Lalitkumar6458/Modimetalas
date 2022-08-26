import React from 'react'
import {  Link, useLocation } from "react-router-dom";
import WeldingWireImg from "../../../../../Constants/Images/BaseImage/WelingWireImg.jpeg"

import { WeldingImgData } from '../../../../../Constants/Data/OfferData';
import WeldinghImg from "../../../../../Constants/Images/welding_img/bgimg.jpg"
const WeldingWire = () => {
  return (
    <div>
          <div className="products_heading">
    
    <h2>welding consumables</h2>
    <h3>
      <Link to="/">Home</Link> / Products
    </h3>

    <img className="img-fluid" src={WeldinghImg} alt=""/>
  </div>

  <div className="heading mt-4">
    <div className="line_before"></div>
    <h3 className="headinng_text">PRODUCTS</h3>
    <div className="line_after"></div>
  </div>


  <div className='content_metal '>

    <p>We also have special grades filler wire & electrodes in 309LMo, 310, 312, 316L, 318, 385, 347, 410, 430, 2209, 2594, Ni-1, NiCrFe-2, NiCrFe-3, NiCr-3, NiCrMo-3, NiCrMo-4, NiCrMo-10, NiCrCoMo-1, NiCu7, CuNi, ER80SB6, ER80SB8, ER80SD2, ER80SNi-1, ER80SNi-2, ER90SB3, ER90SB9, Stellite Grade 6, 12, 21 etc In fact, Selectrode is the first and still the only manufacturer that does not sell its own brand. Our goal is to supply and support our customers, not compete with them. Our mission is simple, produce a huge selection of the highest quality welding consumables, package them in our custom high quality packaging, and sell them at competitive manufacturer direct wholesale prices.</p>
    <p>Selectrode can provide virtually any electrode, brazing alloy, mig wire, tig wire, flux, powder spray torch, wear plate, or accessory available on the market.

If we don’t offer it, our research and development team will work with you to develop any custom product in the color and alloy chemistry you desire.</p>
    <p>We also will sell our formulations in concentrate form to manufacturers, or coat your wire in house with our formulations.</p>

    <div className='WeldingBrad'>
        <h4>We Provide That Kind of Brand In weding Consumables</h4>

       <img className='img-fluid' src={WeldingWireImg} alt=''/>
       <div className="use_cases Welding_clss">
        <h3>We Provide best quality Product in all shapes</h3>
        <p>
        Modi Metals offers pure Welding consumables materials in a variety of forms, including:
        </p>
        <div className="gellary_carbon row mt-5">
            {WeldingImgData.map((item) => {
              return (
                <>
                  <div className="col-12 col-md-3 images_class">
                    <img className="" src={item.img} alt=""></img>
                   
                  </div>
                </>
              );
            })}
          </div>
        </div>

    </div>

  

    


  </div>

    </div>
  )
}

export default WeldingWire