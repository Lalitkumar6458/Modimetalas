import React from 'react'
import Products from '../Products'
import Contact_btn from '../../../contact_btn'
import bgimg from '../../../../../Constants/Images/high_nickel/bgimg.jpg'



const HighNickel = () => {
  window.scrollTo({
    top: 800, 
    behavior: 'smooth'
    /* you can also use 'auto' behaviour
       in place of 'smooth' */
  });
  var heading='Contact Modi Metals for High Nickel Alloys Materials Today'
  var text='Contact us for more information regarding our High Nickel Alloys material options, or request a quote for further pricing details today. Modi Metals is your trusted High Nickel Alloys supplier and manufacturer of premium High Nickel Alloys materials.'

  return (
    <>
    
    <Products message={{text_heading:"High Nickel Alloys",img:bgimg}}/>

    <div className="products_type">
    <div className="stainless_steel">
      <h2 className="">High Nickel Alloy </h2>
      <p>
      Nickel is a highly versatile element with significant beneficial qualities. When alloyed with other elements, nickel maintains numerous applications throughout various industries throughout the world. Some of the significant beneficial qualities that nickel alloy materials displays include low-expansion, high strength, electrical resistance, corrosion resistance, and heat resistance.
     Magellan Metals is a worldwide supplier of nickel alloy and other superalloy metals. We offer Hastelloy®, Incoloy®, and other hard-to-find metals in single item orders or full bills of material. These materials are available in bar, sheet, pipe, and other forms to meet the needs of nearly any industrial or manufacturing application.
      </p>
      

      <div className="use_cases">
        <h3>Nickel Alloy Applicationss</h3>
        <p>
        Nickel alloy materials provide a wide range of beneficial qualities to industries throughout the world. The majority of which involve corrosion resistance and/or heat resistance. Some of these include:
        </p>
        <h4>
          <i class="fa-solid fa-caret-right  mx-2"></i>A few industries that
          use Nickel Alloy extensively:
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
        <h3>Nickel Alloy Material Available Formats</h3>
        <p>
        Modi Metals offers pure Nickel alloy materials in a variety of forms, including:
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

export default HighNickel