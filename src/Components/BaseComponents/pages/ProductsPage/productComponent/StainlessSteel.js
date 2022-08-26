import React from 'react'
import Products from '../Products'
import Contact_btn from '../../../contact_btn'
import bgimg from '../../../../../Constants/Images/stainless_steel/bgimg.jpg'




const StainlessSteel = () => {
  window.scrollTo({
    top: 800, 
    behavior: 'smooth'
    /* you can also use 'auto' behaviour
       in place of 'smooth' */
  });
  var heading='Contact Modi Metals for  Stainless steel Materials Today'
  var text='Contact us for more information regarding our  Stainless steel material options, or request a quote for further pricing details today. Modi Metals is your trusted  Stainless steel supplier and manufacturer of premium  Stainless steel materials.'

  return (
    <>  
   
    <Products message={{text_heading:"STAINLESS STEEL",img:bgimg}}/>

    <div className="products_type">
    <div className="stainless_steel">
      <h2 className="">STAINLESS STEEL</h2>
      <p>
        Stainless steel has long been used because of its attractive
        appearance and corrosion resistance. Dimension and contrast are
        achieved through etching, forming, and embossing. In modern product
        design, stainless steel has resurfaced as an earth-friendly material
        that is easily recycled.
      </p>
      <p>
        We know that steel is an alloy of iron and carbon with a maximum
        carbon content of 2.1%. Stainless steels are a group of steels that
        are resistant to corrosion through the addition of alloying
        elements.
      </p>

      <div className="use_cases">
        <h3>Use-Cases</h3>
        <p>
          Stainless steel is an exceedingly versatile material. It is
          preferred where the properties of steel and corrosion resistance
          are required in tandem.
        </p>
        <h4>
          <i class="fa-solid fa-caret-right  mx-2"></i>A few industries that
          use stainless steel extensively:
        </h4>

        <div className="row w-100  mt-4 t">
          <h5 className="col-md-6 align-baseline">
            <i class="fa-solid fa-circle mx-3"></i>Food and catering
          </h5>
          <h5 className="col-md-6 align-baseline">
            <i class="fa-solid fa-circle   mx-3"></i>Chemicals and
            pharmaceuticals
          </h5>
          <h5 className="col-md-6 align-baseline">
            <i class="fa-solid fa-circle  mx-3"></i>Architecture and
            construction
          </h5>
          <h5 className="col-md-6 align-baseline">
            <i class="fa-solid fa-circle mx-3"></i>Medical equipment
            manufacturing
          </h5>
          <h5 className="col-md-6">
            <i class="fa-solid fa-circle mx-3"></i>Home appliances
          </h5>
          <h5 className="col-md-6">
            <i class="fa-solid fa-circle mx-3"></i>Offshore and shipbuilding
          </h5>
          <h5 className="col-md-6">
            <i class="fa-solid fa-circle mx-3"></i>Automotive manufacturing
          </h5>
          <h5 className="col-md-6">
            <i class="fa-solid fa-circle mx-3"></i>Energy and industry
          </h5>
        </div>
      </div>


      <div className="use_cases">
        <h3>Stainless Steel Material Available Formats</h3>
        <p>
        Modi Metals offers pure Stainless Steel materials in a variety of forms, including:
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
      <div className="grade_stainless_steel">
        <h3>Grades of Stainless Steel</h3>

        <p>
          There are hundreds of grades of stainless steel in the market
          today. Choosing the right one for your application is important as
          their properties can be quite different from each other.
        </p>
        <p>
          The AISI (American Iron and Steel Institute) system for naming
          stainless steel is still used by the industry. The numbering
          system uses three-digit numbers starting with 2, 3 or 4.
        </p>

        {/* <div className="row">
          <div className="col-md-3 series mx-4">
            <div className="series_h">
              <h4>200 series</h4>
            </div>
            <div className="content_series">
              <p>
                This series is used for austenitic grades that contain
                manganese. These chromium manganese steels have a low nickel
                content (below 5 per cent).
              </p>
            </div>
            <div className="uses_series ">
              <h6>Uses Of 200Series</h6>
              <p className="mx-auto"> Washing machines</p>
              <p className="mx-auto"> Cutlery</p>
              <p className="mx-auto"> Food & drinks equipment</p>
              <p className="mx-auto">Automotive industry</p>
              <p className="mx-auto"> In-doors equipment, etc.</p>
            </div>
          </div>
          <div className="col-md-3 series  mx-4">
            <div className="series_h">
              <h4>300 series</h4>
            </div>
            <div className="content_series">
              <p>
                This series is used to name austenitic stainless steels with
                carbon, nickel, and molybdenum as alloying elements. The
                addition of molybdenum improves corrosion resistance in
                acidic environments while nickel improves ductility.AISI 304
                and 316 are the most common grades in this series. AISI 304
                is also commonly known as 18/8 steel as it contains 18%
                chromium and 8% nickel.
              </p>
            </div>
            <div className="uses_series ">
              <h6>Uses Of 300Series</h6>
              <p className="mx-auto">Food & beverage industry</p>
              <p className="mx-auto"> Automotive industry</p>
              <p className="mx-auto">
                {" "}
                Structural for critical environments
              </p>
              <p className="mx-auto">Medical instruments</p>
              <p className="mx-auto"> Jewellery, etc.</p>
            </div>
          </div>
          <div className="col-md-3 series  mx-4">
            <div className="series_h">
              <h4>400 series</h4>
            </div>
            <div className="content_series">
              <p>
                Ferritic and martensitic alloys form this series of
                stainless steel. These grades are available for heat
                treating. Providing a good combination of strength and high
                wear resistance. The corrosion-resistance properties are
                lower than 300 series, though.
              </p>
            </div>
            <div className="uses_series ">
              <h6>Uses Of 400Series</h6>
              <p className="mx-auto"> Agricultural equipment</p>
              <p className="mx-auto">Motor shafts</p>
              <p className="mx-auto"> Gas turbine parts, etc.</p>
            </div>
          </div>
        </div> */}
      </div>
    </div>

    <Contact_btn  content={{heading:heading,text:text}}/>
  </div></>
  )
}

export default StainlessSteel