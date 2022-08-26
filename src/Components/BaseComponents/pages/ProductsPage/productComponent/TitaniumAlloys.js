import React from 'react'
import Products from '../Products'
import Contact_btn from '../../../contact_btn'
import bgimg from '../../../../../Constants/Images/titanium/bgimg1.png'



const TitaniumAlloys = () => {
  window.scrollTo({
    top: 800, 
    behavior: 'smooth'
    /* you can also use 'auto' behaviour
       in place of 'smooth' */
  });

  var heading='Contact Modi Metals for Titanium  alloys Materials Today'
  var text='Contact us for more information regarding our Titanium  alloys material options, or request a quote for further pricing details today. Modi Metals is your trusted Titanium  alloys supplier and manufacturer of premium Titanium  alloys materials.'
  return (
    <>
    <Products message={{text_heading:"TitaniumAlloys",img:bgimg}}/>

    <div className="products_type">
    <div className="stainless_steel">
      <h2 className="">Titanium  alloys</h2>
      <p>Titanium  alloys are attractive structural materials due to their high strength, low density, and excellent corrosion resistance. The recognition of titanium excellent resistance in highly corrosive environments has led to widespread non-aerospace industrial applications. Stemming from decreasing cost and increasing availability of mill and fabricated products, titanium alloys have become standard engineering materials for a host of common consumer products too.  

        </p>
        <p>
         Below are a few of the alloys we trade in:-
                         
                          90 Ti- 6 Al-4 V / CP grade 1 / Cp grade 2 / 662 / 314 / 315 / 317 / 230 / 260- and most other grades             
        </p>
      <div className="use_cases">
        <h3>Titanium  alloys Applicationss</h3>
        <p>
        Titanium  alloys materials provide a wide range of beneficial qualities to industries throughout the world. The majority of which involve corrosion resistance and/or heat resistance. Some of these include:
        </p>
        <h4>
          <i class="fa-solid fa-caret-right  mx-2"></i>A few industries that
          use Titanium  alloys extensively:
        </h4>

        <div className="row w-100  mt-4 t"> 
          <h5 className="col-md-6 align-baseline">
            <i class="fa-solid fa-circle mx-3"></i>Electronic components
          </h5>
          <h5 className="col-md-6 align-baseline">
            <i class="fa-solid fa-circle   mx-3"></i>Wires for heating elements
          </h5>
          <h5 className="col-md-6 align-baseline">
            <i class="fa-solid fa-circle  mx-3"></i>Battery connections/terminals
          </h5>
          <h5 className="col-md-6 align-baseline">
            <i class="fa-solid fa-circle mx-3"></i>Chemical processing
          </h5>
          <h5 className="col-md-6">
            <i class="fa-solid fa-circle mx-3"></i>Aerospace components
          </h5>
          <h5 className="col-md-6">
            <i class="fa-solid fa-circle mx-3"></i>Food processing
          </h5>
          <h5 className="col-md-6">
            <i class="fa-solid fa-circle mx-3"></i>Automotive manufacturing
          </h5>
          <h5 className="col-md-6">
            <i class="fa-solid fa-circle mx-3"></i>Synthetic fiber processing
          </h5>
        </div>
      </div>
      <div className="use_cases">
        <h3>Titanium  alloys Material Available Formats</h3>
        <p>
        Modi Metals offers pure Titanium  alloys materials in a variety of forms, including:
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

export default TitaniumAlloys