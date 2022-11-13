import React from 'react'
import Products from '../Products'
import {WeldingImgData} from '../../../../../Constants/Data/OfferData'
import Contact_btn from '../../../contact_btn'
import bgimg from '../../../../../Constants/Images/welding_img/bgimg.jpg'



const WeldingConsumable = () => {
  window.scrollTo({
    top: 800, 
    behavior: 'smooth'
    /* you can also use 'auto' behaviour
       in place of 'smooth' */
  });
  var heading='Contact Modi Metals for Welding Consumables Materials Today'
  var text='Contact us for more information regarding our Welding Consumables material options, or request a quote for further pricing details today. Modi Metals is your trusted Welding Consumables supplier and manufacturer of premium Welding Consumables materials.'
  return (
    <>
    <Products message={{text_heading:"WeldingConsumable",img:bgimg}}/>

    <div className="products_type">
    <div className="stainless_steel">
      <h2 className=""> Welding Consumables</h2>
      <p>
      Welding is a fabrication process that uses high temperature to melt and fuse two pieces of metal together. The process of welding does not merely bond the two pieces together but through the use of excessive heat and in some cases other metals or gases are added which makes the metallic structure of the two pieces of material to join together. Welding can even be done underwater. Welding can be applied in different kinds of industries such as; building and construction, oil and gas, marine, power generation, automobile and transportation. Materials commonly welded are metals; such as aluminum, mild steel and stainless steel. Plastics can also be welded. But In welding plastics, the source of heat used is an electric resistor or hot air.There are different energy sources that can be used during the process of welding. These include a gas flame (powered by a chemical like acetylene), an electric arc, laser, an electron beam, friction, and ultrasound. There are different welding techniques that fit open air, underwater, and even space settings.
     </p>
      <div className="use_cases">
        <h3>Welding consumables are segmented into:</h3>
       
        <div className="row w-100  mt-4 t">
          <h5 className="col-md-6 align-baseline">
            <i class="fa-solid fa-circle mx-3"></i>   Arc welding.
          </h5>
          <h5 className="col-md-6 align-baseline">
            <i class="fa-solid fa-circle   mx-3"></i>Resistance welding.
          </h5>
          <h5 className="col-md-6 align-baseline">
            <i class="fa-solid fa-circle  mx-3"></i>Oxy Fuel welding.
          </h5>
          <h5 className="col-md-6 align-baseline">
            <i class="fa-solid fa-circle mx-3"></i>Ultrasonic welding.
          </h5>
          <h5 className="col-md-6">
            <i class="fa-solid fa-circle mx-3"></i>Others (laser beam welding, etc.).
          </h5>
         
          
        </div>
      </div>
      <div className="use_cases">
        <h3>We Provide best quality Product in all shapes</h3>
        <p>
        Modi Metals offers pure Welding consumables materials in a variety of forms, including:
        </p>
        <div className="gellary_carbon row mt-5">
            {WeldingImgData.map((item) => {
              return (
                <>
                  <div className="col-12 col-sm-6 col-md-4 images_class">
                    <img className="" src={item.img} alt=""></img>
                   
                  </div>
                </>
              );
            })}
          </div>
        </div>
      
    
    </div>
    <Contact_btn  content={{heading:heading,text:text}}/>

   
    </div>

    </>
  )
}

export default WeldingConsumable