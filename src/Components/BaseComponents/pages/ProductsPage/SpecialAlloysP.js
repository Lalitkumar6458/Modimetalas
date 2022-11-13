import React from "react";
import { Link,useLocation } from "react-router-dom";
import AlloysImg from "../../../../Constants/Images/BaseImage/AlloysImg.jpg";
import bgimg from "../../../../Constants/Images/newproduct/AlloysImg1.png";
import bgimg1 from "../../../../Constants/Images/newproduct/AlloysImg2.png";
import { SpecialAlloysgrade } from "../../../../Constants/Data/SpecialAlloys";
import { ProductData } from "../../../../Constants/Data/ProductData";
import "./SpecialAlloys.css";
const SpecialAlloysP = (props) => {
  window.scrollTo({
    top: 0, 
    behavior: 'smooth'
    /* you can also use 'auto' behaviour
       in place of 'smooth' */
  });

  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");
 

  return (
    <div>
      <div className="products_heading">
        <h2>{props.name.data.heading}</h2>
        <h3>
          <Link to="/">Home</Link> / Special Alloys
        </h3>

        <img className="img-fluid" src={AlloysImg} alt="" />
      </div>

      <div className="Special_alloys">
        <div className="row" style={{ gap: "85px" }}>
          <div className="col-md-8 left_col">
            <h2 className="heading_a">
              {props.name.data.heading}
              <span className="line_h"></span>
            </h2>
            <h3 className="text_heading">{props.name.data.data.text1}</h3>
            <h3>{props.name.data.data.text2}</h3>
            <p className="mt-5">{props.name.data.data.text3}</p>
            <p>{props.name.data.data.text4}</p>
            <div className="img_a">
              <img className="img-fluid" src={bgimg} alt="" />
              <img className="img-fluid" src={bgimg1} alt="" />
            </div>

            {props.name.data.grade.length === 0
              ? null
              : <h2 className='heading_a mt-5'>
Available Inconel Alloys / Incoloy Grades
<span className='line_h'></span>
</h2>}
<div className='row mt-5 grade_inco'>
{props.name.data.grade.map((item) => {
  return (
    <h4 className="col-12 col-md-6">
      {" "}
      <i class="fa-solid fa-circle   mx-3"></i>
      {item}
    </h4>
  );
})}
</div>

            <h2 className="heading_a mt-5">
              Types Of {props.name.data.heading} Grades Products
              <span className="line_h"></span>
            </h2>
            <div className="row mt-5 grade_inco">
              {props.name.data.products.map((item) => {
                return (
                  <h4 className="col-12 col-md-6">
                    {" "}
                    <i class="fa-solid fa-circle   mx-3"></i>
                    {item}
                  </h4>
                );
              })}
            </div>
            <div className="contact_us_c">
            <i class="fa-solid fa-share"></i>
            <h5> Call +91 9875782537 or <Link to="/contact" >Click here </Link>to send enquiry for <span style={{fontWeight: "bold"}}>  {props.name.data.heading}</span></h5>
            </div>
          </div>
          <div className="col-md-3">
            <div className="Special_P">
              <h2 className="heading_a">
                Special Alloys <span className="line_h"></span>
              </h2>

              <div className="Grade_options_a">
                <div className="row " style={{ gap: "10px" }}>
                  {SpecialAlloysgrade.map((item) => {
                    return (
                      <div className="col-12 col-md-12">
                        <Link to={item.link}>
                          <div className={'/'+splitLocation[1]+'/'+splitLocation[2] === item.link ? "Grade_active grade_a_o" : "grade_a_o"}>
                            <h5>{item.heading}</h5>
                            <i class="fa-solid fa-angles-right"></i>
                          </div>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="Special_P mt-5">
              <h2 className="heading_a">
              Our Products <span className="line_h"></span>
              </h2>

              <div className="Grade_options_a">
                <div className="row " style={{ gap: "10px" }}>
                  {ProductData.map((item) => {
                    return (
                      <div className="col-12 col-md-12">
                        <Link to={item.link}>
                          <div className="grade_a_o">
                            <h5>{item.heading}</h5>
                            <i class="fa-solid fa-angles-right"></i>
                          </div>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialAlloysP;
