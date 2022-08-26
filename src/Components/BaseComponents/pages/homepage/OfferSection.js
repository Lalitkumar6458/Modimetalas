import React from "react";
import img from "../../../../Constants/Images/OfferImage/offer1.jpg";
import "./OfferSection.css";
import { OfferData } from "../../../../Constants/Data/OfferData";
const OfferSection = () => {
  return (
    <section className="offer_section">
      <div className="heading ">
        <div className="line_before"></div>
        <h3 className="headinng_text">WHAT WE OFFER</h3>
        <div className="line_after"></div>
      </div>
      <div className=" container_class d-flex align-items-center mt-4">
        <div className="row justify-content-center align-content-center">
          {OfferData.map((item) => (
            <div className="col-md-6 col-12 col-lg-4 mx-md-4 mt-3 Offer_card ">
              <img src={item.img} alt=""></img>
              <div className="content_offer">
                <div>
                  <h3>{item.heading}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
