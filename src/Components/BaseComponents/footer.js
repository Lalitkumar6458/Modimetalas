import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import "./footer.css";

const Footer = () => {
  return (
    <section className="footer_section">
      <div className="footer_container">
        <div className="footer_top_name ">
          <div className="company_name_footer">
            <h3>MODI METALS</h3>
            <h4>House of Stainless Steel & Nickel Alloys</h4>
          </div>
          <div className="button_let_talk">
            <a href="https://wa.me/9321271527"> Let’s talk</a>
          </div>
        </div>

        <div className="row nav_footer">
          <div className="col-md-3 col-12 col-sm-6 about_footer">
            <h3>About</h3>
            <p>
              Modi Metals is a young dynamic company which was found in 2015 and
              quickly established itself as a leader in the International
              Markets through its 2 core strategies namely: total quality and
              flexibility.
            </p>
            {/* <p>
            We would like to introduce ourselves as a one of the leading Importer & Stockiest of all kind of Nickel Base Alloy, Titanium Alloys, etc in Sheets, Plates, Coils, Strips, Pipes & Tubes, Round Bars, Square Bars, Hex Bars, Circle, Filler Wires, Welding Electrodes etc in India. We can offer you all the material Ex-Stock Mumbai at most Competitive rates & with Batch Test Certificate.
            </p> */}
          </div>
          <div className="col-md-3 col-12 col-sm-6 d-flex flex-column align-items-center">
            <h3>Quick links</h3>
            <div className="quick_link d-flex flex-column ">
              <Link to="/"> <i class="fa-solid fa-angle-right text-white mx-2"></i>Home</Link>
              <Link to="/about"> <i class="fa-solid fa-angle-right text-white mx-2"></i>AboutUs</Link>
              <Link to="/productModi"> <i class="fa-solid fa-angle-right text-white mx-2"></i>Products</Link>


              <Link to="/products"> <i class="fa-solid fa-angle-right text-white mx-2"></i>Special Alloys</Link>
              <Link to="/gallery" > 
              
               <i class="fa-solid fa-angle-right text-white mx-2"></i>Gallery </Link>
              <Link to="/contact"> <i class="fa-solid fa-angle-right text-white mx-2"></i>Contact Us</Link>
            </div>
          </div>
          <div className="col-md-3 col-12 col-sm-6 d-flex flex-column align-items-center ">
            <h3>Hot products</h3>
            <div className="quick_link d-flex flex-column ">
              <Link to="/Coils"> <i class="fa-solid fa-angle-right text-white mx-2"></i>Coils & Strips</Link>
              <Link to="/Flanges">  <i class="fa-solid fa-angle-right text-white mx-2"></i>Flanges</Link>
              <Link to="/Pipe_Fittings">  <i class="fa-solid fa-angle-right text-white mx-2"></i>Pipe Fittings</Link>
              <Link to="/WIRE"> <i class="fa-solid fa-angle-right text-white mx-2"></i>Wire</Link>
              <Link to="/SheetMain"> <i class="fa-solid fa-angle-right text-white mx-2"></i> Sheet & Plate </Link>
              <Link to="/products/nickel_fasteners"> <i class="fa-solid fa-angle-right text-white mx-2"></i>Bolt  & Nut </Link>
              <Link to="/Pipes_tubes"> <i class="fa-solid fa-angle-right text-white mx-2"></i>Pipes & Tubes </Link>
              <Link to="/ROUND_BAR">  <i class="fa-solid fa-angle-right text-white mx-2"></i>Round Bar</Link>
            </div>
          </div>
          <div className="col-md-3 col-12 col-sm-6">
            <h3>News Letter</h3>
            <div className="news_letter d-flex flex-column align-items-center justify-content-start">
             <h6>Subscribe to our newsletter and stay up to date on our latest releases and promotions!</h6>
             <div className="news_email">
               <input type='email' placeholder="Enter Email Address"></input><a to='#'>GO</a>
             </div>
             <div className="stay_tuch">
               <h4>STAY IN TOUCH</h4>
               <div className='footer_social'>
               {/* <i class="fa-brands fa-facebook-f"></i> */}
              <a href='https://wa.me/+919321271527' target="_blank"> <i class="fa-brands fa-whatsapp" ></i></a>
             <a href="https://www.instagram.com/invites/contact/?i=1x8zwnbbom1f1&utm_content=mh9pec9" target="_blank">  <i class="fa-brands fa-instagram"></i></a>
               <a href="https://www.linkedin.com/in/modi-metals-5a1ba9200" target="_blank">  <i class="fa-brands fa-linkedin-in"></i></a>
               <a href="https://twitter.com/MODI_METALS?t=_5ujRniaI6uWXLPosEmdJw&s=09" className="" target="_blank">  <i class="fab fa-twitter"></i></a>

               </div>



             </div>
              </div>
              </div>
          
        </div>

        <div className="company_status">
          <h4>AN ISO 9001:2015 CERTIFED COMPANY
</h4>
          <h5>Mfrs, Importers, Stockist & Suppliers of :
</h5>
          <p> Stainless Steel , Inconel , Monel , Nickal
, Nitinol , Titanium , Nitronic , Hastelloy , Nimonic , Super Duplex , Alloys Steel ,
Aluminum , Brass , Copper , Carban Steel , Mild Steel , Sheet , Plate , Coil , Strip ,
Flat , Wire , Rod , Hexbar & Squrebar , Seamless Pipe , WeldedPipe , Tubes Pipe ,
Pipe Fitting , Elbow , Tee , Coupling , Nipple , Flange , Angle , Channel , Patta ,
Patti , Circle , Ring , Nut Bolt , Washer , Valves & Dairy Fitting , Industrial Raw</p>
        </div>
        <div className="bottom_line"></div>
        <div className="copy_right">
          <h4>©2022  Modi Metals. All Rights Reserved. Privacy Policy</h4>
          <h5>DESIGN  AND DEVELOPED BY <a href="https://www.linkedin.com/in/lalit-kumar-845a2123a" target="_blank"> LALIT KUMAR </a></h5>
        </div>
      </div>

    </section>
  );
};

export default Footer;
