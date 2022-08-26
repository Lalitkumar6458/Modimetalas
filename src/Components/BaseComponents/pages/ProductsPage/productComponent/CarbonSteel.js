import React from 'react'
import Products from '../Products'
import { CarbonImgData } from '../../../../../Constants/Data/OfferData'
import Contact_btn from '../../../contact_btn'
import bgimg from '../../../../../Constants/Images/carbonSteelmg/bgimg1.jpg'

const CarbonSteel = () => {
  window.scrollTo({
    top: 800, 
    behavior: 'smooth'
    /* you can also use 'auto' behaviour
       in place of 'smooth' */
  });

  var heading='Contact Modi Metals for CarbonSteel Materials Today'
  var text='Contact us for more information regarding our CarbonSteel material options, or request a quote for further pricing details today. Modi Metals is your trusted CarbonSteel supplier and manufacturer of premium CarbonSteel materials.'

  const value_f=' <0.25'
  return (
    <>
    {/* <Products message="CarbonSteel"/> */}
    <Products message={{text_heading:"CarbonSteel",img:bgimg}}/>
    <div className="products_type">
    <div className="stainless_steel">
      <h2 className="">Carbon Steel</h2>
      <p>
      Carbon steel is an iron-carbon alloy, which contains up to 2.1 wt.% carbon. For carbon steels, there is no minimum specified content of other alloying elements, however, they often contain manganese. The maximum manganese, silicon and copper content should be less than 1.65 wt.%, 0.6 wt.% and 0.6 wt.%, respectively.
      </p>
      <div className='container_carbon'>

        <h5>
        Types of carbon steel and their properties
        </h5>
        <span>Carbon steel can be classified into three categories according to its carbon content: low-carbon steel (or mild-carbon steel), medium-carbon steel and high-carbon steel [1]. Their carbon content, microstructure and properties compare as follows:</span>
      <table className="table table-success table-striped mt-4">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">Carbon content (wt.%)</th>
      <th scope="col">Microstructure</th>
      <th scope="col">Properties</th>
      <th scope="col">Examples</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Low-carbon steel</th>
      <td>{value_f}</td>
      <td>Ferrite, pearlite</td>
      <td>Low hardness and cost. High ductility, toughness, machinability and weldability</td>
      <td>AISI 304, ASTM A815, AISI 316L</td>
    </tr>
    <tr>
      <th scope="row">Medium-carbon steel</th>
      <td>0.60 – 1.25</td>
      <td>Martensite</td>
      
      <td>Low hardenability, medium strength, ductility and toughness</td>
      <td>AISI 409, ASTM A29, SCM435</td>
    </tr>
    <tr>
      <th scope="row">High-carbon steel</th>
      <td>0.60 – 1.25</td>
      <td>	Pearlite</td>
      <td>High hardness, strength, low ductility</td>
      <td>AISI 440C, EN 10088-3</td>
    </tr>
  </tbody>
</table> 
      </div>

      <div className='gellary_carbon row mt-5'>

      {CarbonImgData.map((item)=>{
          return(
            <>
            <div className='col-12 col-md-4 mt-4 images_class'>
            <img className="" src={item.img} alt=''></img>
            <h5>{item.heading}</h5>
          </div>
         
            </>
          )
        })}


      </div>

      
    </div>
 
    
    <Contact_btn  content={{heading:heading,text:text}}/>

   
    </div>
    </>
    
  )
}

export default CarbonSteel