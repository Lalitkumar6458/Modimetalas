import React from 'react'
import Products from '../Products'
import { MildImgData1} from '../../../../../Constants/Data/OfferData'
import Contact_btn from '../../../contact_btn'
import bgimg from '../../../../../Constants/Images/mild_steel/bgimg.jpg'




const MildSteel = () => {

  window.scrollTo({
    top: 800, 
    behavior: 'smooth'
    /* you can also use 'auto' behaviour
       in place of 'smooth' */
  });
  var heading='Contact Modi Metals for  Mild Steel Materials Today'
  var text='Contact us for more information regarding our Mild Steel material options, or request a quote for further pricing details today. Modi Metals is your trusted Mild Steel supplier and manufacturer of premium Mild Steel materials.'

  return (
    <>
    <Products message={{text_heading:"Mild Steel",img:bgimg}}/>

    <div className="products_type">
    <div className="stainless_steel">
      <h2 className=""> Mild Steel </h2>
      <p>
      Mild steel are some of the most frequently used steel types, as it has many specific advantages. It is also very cheap, and can thus be used as numerous construction purposes. Despite its low carbon composition, it is also strong. It is mainly used in deposits filed of structural steel. Suman Steel is the largest Mild Steel Suppliers in Mumbai, and we manufacture such products in different standards, constructions, specifications and personalized measurements. Mild steel is the low-carbon type of carbon steel we term it low-carbon steel.
     </p>
     <p>
Mild steel comprises of alloyed iron with a carbon content of less than 0.3%, most generally about 0.1 and 0.25 per cent. Because of its ductility and malevolence we use these for building industry during construction. Ductility relates to a material's capacity to endure rupture or corrosion, amidst variations in size affected by twisting or deformation. Malleability relates to a material's capacity to overcome fracturing even though it is distorted or stretched. The malevolence of mild steel often enables it to slide into thin strips. We are among the most Popular mild steel suppliers in mumbai which carries all kinds of Steel. Our professionals are extremely specialized and help you find the most suitable products you desire. Because of our service and accuracy the clients always choose us. We bring the broadest range of design of ms material with various structure finishes as well as treatments. The request can be personalized by us and adapted for the requirements of the customer. For value based ms material, Almost 1000 + customers trust on Suman Steel. We serve each types of customers. 
</p>
<p>
We supplies in manufacturing industries, automobile industries, architecture project and many other industries. We 're procuring from trustworthy and reliable suppliers to purchase required raw materials. We conduct various tests that ensure product performance in extreme conditions. Testing includes tensile strength, accurate identification of components, micro and macro checking, chemical evaluation, hydro checking, mechanical testing and toughness testing. As a reputable company, we are engaged as superior MS Material Supplier in Mumbai. By using raw materials of best possible class, our products are manufactured according to the various desires and specific business requirements of the customers. Besides that, thanks to their compressive strength , high reliability, longevity and rough designs, these are highly appreciated and admired by our clientele. We also keep the product in sufficient quality such that the customer's immediate demand can be easily met. Due to the advanced and modern manufacturing methods, we are able to describe the highly esteemed collection of mild steel material which is highly trusted for their remarkable essential. We are a believed name engaged in Mild steel dealers in mumbai. Get in touch with us for more information.
      </p>


      <h3 className='text-start' >We Provide best quality Product in all shapes</h3>
      <div  class="row mt-4" >
       
  
  {MildImgData1.map((item) => {
              return (
                <>
                  <div className= "col-3 mt-3"><img className="" src={item.img} alt=""></img>
                  <h4>{item.heading}</h4>
                   </div>
                    
               
                </>
              );
            })}
  
   
  
  </div>
  <div className='container mt-5'>
  <p><b>Chemical composition:</b></p>
	<table className="table table-success table-striped" >
    <thead><tr>
    <th></th>
    <th>CARBON C%</th> 
    <th>SILICON Si%</th>
    <th>MANGANESE Mn%</th>
    <th>PHOSPHORUS P%</th>
    <th>SULPHUR S%</th>
  </tr></thead>
  <tbody>

  <tr>
    <td>MS</td>
    <td>0.15-0.25</td> 
    <td>0.15-0.35</td>
     <td>0.30-0.65</td>
      <td>≤ 0.06%</td>
       <td>	≤ 0.06%</td>
  </tr>
 
   <tr>
   <td>C-20</td>
    <td>0.15-0.25</td> 
    <td>0.05-0.35</td>
     <td>	0.60-0.90</td>
      <td>≤ 0.06%</td>
       <td>	≤ 0.06%</td>
  </tr>
   <tr>
   <td>A36</td>
    <td>0.25-0.29</td> 
    <td>0.15-0.40</td>
     <td>0.8O-1.35</td>
      <td>≤ 0.06%</td>
       <td>	≤ 0.06%</td>
  </tr>
   <tr>
   <td>IS 1018</td>
    <td>0.15-0.25</td> 
    <td>0.10</td>
     <td>0.4-0.6</td>
      <td>≤ 0.06%</td>
       <td>	≤ 0.06%</td>
  </tr>
 {/* <tr>
   <td>IS 2062</td>
    <td></td> 
    <td></td>
     <td></td>
      <td>≤ 0.06%</td>
       <td>	≤ 0.06%</td>
  </tr>
    <tr>
   <td>sae</td>
    <td></td> 
    <td></td>
     <td></td>
      <td></td>
       <td>	</td>
</tr> */}
  </tbody>
  
</table>
</div>

      <div className="use_cases">
        <h3>Mild Steel Applicationss</h3>
        <p>
        Here are some examples of where it is used in the world:
        </p>
        <h4>
          <i class="fa-solid fa-caret-right  mx-2"></i>A few industries that
          use Mild Steel extensively:
        </h4>
       
        <div className="row w-100  mt-4 t">
          <h5 className="col-md-6 align-baseline">
            <i class="fa-solid fa-circle mx-3"></i>  Structural steel
          </h5>
          <h5 className="col-md-6 align-baseline">
            <i class="fa-solid fa-circle   mx-3"></i>Signs
          </h5>
          <h5 className="col-md-6 align-baseline">
            <i class="fa-solid fa-circle  mx-3"></i>Automobiles
          </h5>
          <h5 className="col-md-6 align-baseline">
            <i class="fa-solid fa-circle mx-3"></i>Decorations
          </h5>
          <h5 className="col-md-6">
            <i class="fa-solid fa-circle mx-3"></i>Furniture
          </h5>
          <h5 className="col-md-6">
            <i class="fa-solid fa-circle mx-3"></i>Fencing
          </h5>
          <h5 className="col-md-6">
            <i class="fa-solid fa-circle mx-3"></i>Nails
          </h5>
          
        </div>
      </div>
      <div className="use_cases">
        <h3>We Provide best quality Product in all shapes</h3>
        <p>
        Modi Metals offers pure Mild Steel materials in a variety of forms, including:
        </p>
        <div className="row w-100  mt-4 t">
          <h5 className="col-md-6 align-baseline">
            <i class="fa-solid fa-circle mx-3"></i>Seamless & welded pipe</h5>
          <h5 className="col-md-6 align-baseline">
            <i class="fa-solid fa-circle   mx-3"></i>Seamless & welded tube
          </h5>
          <h5 className="col-md-6 align-baseline">
            <i class="fa-solid fa-circle  mx-3"></i>Bar
          </h5>
          <h5 className="col-md-6 align-baseline">
            <i class="fa-solid fa-circle mx-3"></i>Wire
          </h5>
          <h5 className="col-md-6">
            <i class="fa-solid fa-circle mx-3"></i> Sheet
          </h5>
          <h5 className="col-md-6">
            <i class="fa-solid fa-circle mx-3"></i>Plate
          </h5>
          <h5 className="col-md-6">
            <i class="fa-solid fa-circle mx-3"></i>Forgings
          </h5>
          <h5 className="col-md-6">
            <i class="fa-solid fa-circle mx-3"></i>Pipe fittings
          </h5>
          <h5 className="col-md-6">
            <i class="fa-solid fa-circle mx-3"></i>Flanges
          </h5>
          <h5 className="col-md-6">
            <i class="fa-solid fa-circle mx-3"></i>Weld Rod
          </h5>
        </div>
      </div>
    
    </div>
    <Contact_btn  content={{heading:heading,text:text}}/>

   
    </div>
    </>
    
  )
}

export default MildSteel