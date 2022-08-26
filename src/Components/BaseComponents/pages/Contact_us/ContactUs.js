import React from "react";
import {  Link } from "react-router-dom";
import "./contactUs.css";
import "../../../../Constants/Images/BaseImage/contactus.png";
import ContactHome from "../homepage/contactHome";
import contact1 from "../../../../Constants/Images/contactImg/contact1.jpg";
import contact2 from "../../../../Constants/Images/contactImg/contact2.jpeg";
import contact3 from "../../../../Constants/Images/contactImg/contact4.jpeg";

const ContactUs = () => {




  window.scrollTo({
    top: 0, 
    behavior: 'smooth'
    /* you can also use 'auto' behaviour
       in place of 'smooth' */
  });
  return (
    <div className="Contact_us_page">
      <div className="contact_heading">
        <h2>Contact US</h2>
        <h3>
          <Link to="/">Home</Link> / Contact Us
        </h3>
      </div>
      <div className="heading mt-4">
        <div className="line_before"></div>
        <h3 className="headinng_text">GET DIRECTIONS</h3>
        <div className="line_after"></div>
      </div>
      <div className="map_modi_metals">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60378.6113861077!2d72.78347034205912!3d18.946295753339385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cff7b95506bd%3A0xf87d1a78f2fbdbb7!2sModi%20Metals!5e0!3m2!1sen!2sin!4v1653673425902!5m2!1sen!2sin"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <ContactHome />
      <div className="images_of_contact_us">
        <img className="" src={contact1}></img>

        <img src={contact2}></img>
        <img src={contact3}></img>
      </div>
    </div>
  );
};

export default ContactUs;
