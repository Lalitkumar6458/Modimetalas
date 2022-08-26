import React from "react";
import "./Testimonial.css";
import ReviewSlide from "./ReviewSlide";
const Testimonial = () => {
  // $(".hover").mouseleave(
  //     function () {
  //       $(this).removeClass("hover");
  //     }
  //   );
  return (
    <section className="testimonial_sections">
      <div className="heading ">
        <div className="line_before"></div>
        <h3 className="headinng_text">WHAT OUR CLIENT SAYS</h3>
        <div className="line_after"></div>
      </div>

      <h2>TESTIMONIALS</h2>

              <ReviewSlide/> 

      
    </section>
  );
};

export default Testimonial;
