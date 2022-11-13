import React from "react";
import {  Link } from "react-router-dom";
import "./aboutUs.css";
import { AboutData } from "../../../../Constants/Data/OfferData";
import { aboutImgData } from "../../../../Constants/Data/OfferData";
import logo from '../../../../Constants/Images/BaseImage/modi_logo.png';
import certificate from '../../../../Constants/Images/aboutPageImg/certificate1.jpeg'

const AboutUs = () => {
  window.scrollTo({
    top: 0, 
    behavior: 'smooth'
    /* you can also use 'auto' behaviour
       in place of 'smooth' */
  });
  return (
    <div className="About_us_page">
      <div className="about_heading">
        <h2>About US</h2>
        <h3>
          <Link to="/">Home</Link> / Contact Us
        </h3>
      </div>

      <div className="about_us_heading">
        <h2>About The Company</h2>
      </div>
      <div className="about_content">
        <p>
          <span> Modi Metals.</span> is manufacturing & exporting the finest
          quality Stainless Steel, Carbon Steel and Alloy Steel, Butt Welded
          Pipe Fittings & Flanges. Immediate Response, Excellent Quality, Quick
          Delivery and Customer Satisfaction truly define Modi Metals. We also
          manufacture and specialized in Fittings and Flanges ,Fasteners in
          Nickel, Monel, Inconel, Incoloy, Hastalloy, Alloy 20, Duplex. Behind
          modi metals growth and success there is years of experience working in
          steel industry & closely monitoring our customer's demands. Exclusive
          technology, certified products, high quality standards and perfect
          customer's services: this is Modi metals a true
          performer in the global market and a reliable partner for its
          customers.
          We have been playing a significant role in the world of metal products by making, designing and supplying top-quality products at unmatched pricing. Each of our products is made to undergo a stringent quality check to ensure 100% customer satisfaction. Furthermore, we also count on state-of-the-art technology for the manufacturing of our products.

           Our manufacturing facility is compliant with international quality standards and is backed by a fully-functioning quality testing laboratory to make sure the products meet stringent quality parameters. We have a strong team of proficient and trained professionals who give us support during our production procedures.
        </p>
      </div>
      <div className="table_about_us">
        <table>
          <thead>
            <tr>
              <td>Nature of Business
</td>
              <td>Manufacturer,Supplier ,Exporter,
Importer</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Total Number of Employees
</td>
              <td>5-10</td>
            </tr>
            <tr>
              <td>Year of Establishment
</td>
              <td>2015
</td>
            </tr>
            <tr>
              <td>Legal Status of Firm
</td>
              <td>Partnership Firm
</td>
            </tr>
            <tr>
              <td>Annual Turnover
</td>
              <td>RS  50Lakh -1Crore</td>
            </tr>
            {/* <tr>
              <td>CIN NO.</td>
              <td></td>
            </tr> */}
            <tr>
              <td>GST No.</td>
              <td>27HUOPK4232F1ZF</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="about_us_heading">
       
        <h2>WHY CHOOSE US</h2>
      </div>
      <div className="heading_why__us">
      {AboutData.map((item)=>{
                    return(<>
                     <h2>
       {item.heading}
        </h2>
        <p>
       {item.text}
        </p>
                    </>)
        })}
       
      </div>
      <div className="heading_certificate">
      <h2>
      Certifications
        </h2>
        <div className="row">
<div className="col-12 col-md-6">
<img className="img-fluid h-75" src={certificate} alt=''></img>
</div>
{/* <div className="col-12 col-md-6">
<img className="img-fluid" src={certificate} alt=''></img>
</div> */}
        </div>
       
        </div>

      <div className="images_aboutus ">
        {aboutImgData.map((item)=>{
          return(
            <>
          <img className="" src={item.img} alt=''></img>
            </>
          )
        })}
       
      </div>
      <img className="logo_modi_metals" src={logo} alt=''></img>
    </div>
  );
};

export default AboutUs;
