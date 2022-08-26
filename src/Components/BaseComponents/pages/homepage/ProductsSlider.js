import "./Products.css";
import prodcts2 from '../../../../Constants/Images/productsImg/procts2.jpg'

import React, { Component } from "react";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      id='button_controller_next'
      style={{
        ...style,
        display:'grid',
        placeItems:'center'
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      id='button_controller_prew'
      style={{
        ...style,
        
        display:'grid',
        placeItems:'center'
      
      }}
      onClick={onClick}
    />
  );
}
export default class PreviousNextMethods extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
       autoplay: true,
      className: "center",
      centerMode: true,

      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div>
        <Slider {...settings}>
          <div key={1} className="productsSlider">
            <div className="products_cart1">
              <div className="product_heading">
                <h4>Nickel Alloys</h4>
              </div>
              <h4 className="heading_h4">
                <i class="fa-solid fa-caret-right text-white  mx-2"></i> INCONEL
                & INCOLOY®
              </h4>
              <div className="inconel_products">
                <h5>
                  <i class="fa-solid fa-angle-right text-white mx-2"></i>{" "}
                  INCONEL® 600
                </h5>
                <h5>
                  <i class="fa-solid fa-angle-right text-white  mx-2"></i>{" "}
                  INCONEL® alloy 601
                </h5>
                <h5>
                  <i class="fa-solid fa-angle-right text-white  mx-2"></i>
                  INCONEL® alloy 690
                </h5>
                <h5>
                  <i class="fa-solid fa-angle-right text-white  mx-2"></i>{" "}
                  INCONEL® alloy 625
                </h5>
                <h5>
                  <i class="fa-solid fa-angle-right text-white  mx-2"></i>{" "}
                  INCONEL® alloy X-750
                </h5>
                <h5>
                  <i class="fa-solid fa-angle-right text-white  mx-2"></i>{" "}
                  INCOLOY® alloy 800
                </h5>
                <h5>
                  <i class="fa-solid fa-angle-right text-white  mx-2"></i>{" "}
                  INCONEL® alloy 718{" "}
                </h5>
                <h5>
                  <i class="fa-solid fa-angle-right text-white  mx-2"></i>{" "}
                  INCOLOY® alloy DS
                </h5>
                <h5>
                  <i class="fa-solid fa-angle-right text-white  mx-2"></i>{" "}
                  INCOLOY® alloy 825
                </h5>
              </div>
              <h4 className="heading_4">
                <i class="fa-solid fa-caret-right text-white  mx-2"></i>NICKEL
              </h4>
              <div className="inconel_products">
                <h5>
                  <i class="fa-solid fa-angle-right text-white mx-2"></i> NICKEL
                  200
                </h5>
                <h5>
                  <i class="fa-solid fa-angle-right text-white  mx-2"></i>
                  NICKEL 201
                </h5>
              </div>
              <h4 className="heading_4">
                <i class="fa-solid fa-caret-right text-white  mx-2"></i>
                HASTELLOY®
              </h4>
              <div className="inconel_products">
                <h5>
                  <i class="fa-solid fa-angle-right text-white mx-2"></i>
                  HASTELLOY C22®
                </h5>
                <h5>
                  <i class="fa-solid fa-angle-right text-white  mx-2"></i>
                  HASTELLOY X®
                </h5>
                <h5>
                  <i class="fa-solid fa-angle-right text-white  mx-2"></i>
                  HASTELLOY B-2 & B-3®
                </h5>
                <h5>
                  <i class="fa-solid fa-angle-right text-white  mx-2"></i>
                  HASTELLOY C-276
                </h5>
              </div>
              <h4 className="heading_4">
                <i class="fa-solid fa-caret-right text-white  mx-2"></i>MONEL®
              </h4>
              <div className="inconel_products">
                <h5>
                  <i class="fa-solid fa-angle-right text-white mx-2"></i> MONEL®
                  alloy 400
                </h5>
                <h5>
                  <i class="fa-solid fa-angle-right text-white  mx-2"></i>{" "}
                  MONEL® alloy K-500
                </h5>
              </div>
            </div>
          </div>
          <div key={2}>
            <div className="products_cart2">
             
              <div className="product_heading">
                <h4>Titanium Alloys</h4>
              </div>

              <div className="Titanium_Alloys_products">
                <h5>
                  <i class="fa-solid fa-angle-right text-white mx-2"></i> CP
                  Titanium Grade 1
                </h5>
                <h5>
                  <i class="fa-solid fa-angle-right text-white  mx-2"></i> CP
                  Titanium Grade 2
                </h5>
                <h5>
                  <i class="fa-solid fa-angle-right text-white  mx-2"></i>
                  CP Titanium Grade 4
                </h5>
                <h5>
                  <i class="fa-solid fa-angle-right text-white  mx-2"></i> CP
                  Titanium Grade 7
                </h5>
                <h5>
                  <i class="fa-solid fa-angle-right text-white  mx-2"></i>{" "}
                  Titanium Grade 11
                </h5>
                <h5>
                  <i class="fa-solid fa-angle-right text-white  mx-2"></i>{" "}
                  Titanium Grade 5/ Titanium 6AL4V
                </h5>

                <h5>
                  <i class="fa-solid fa-angle-right text-white  mx-2"></i>{" "}
                  Titanium Grade 12
                </h5>
                <h5>
                  <i class="fa-solid fa-angle-right text-white  mx-2"></i>{" "}
                  Titanium Grade 6/ Titanium 5Al 2.5Sn
                </h5>
              </div>
            </div>
          </div>
          <div key={3}>
            <div className="products_cart3">
              <div className="product_heading ">
                <h4>Stainless Steel</h4>
              </div>
              <h4 className="heading_h4 ">
                <i class="fa-solid fa-caret-right text-white  mx-2"></i>{" "}
                Stainless Steel
              </h4>
              <div className="inconel_products">
                <h5 style={{ fontSize: "1.3rem" }}>
                  <i class="fa-solid fa-angle-right text-white mx-2"></i>
                  309, 310, 310s, 321, 347, 316Ti, 17-4-Ph, 15-5Ph etc.
                </h5>
              </div>
              <h4 className="heading_4 mt-5">
                <i class="fa-solid fa-caret-right text-white  mx-2"></i>Super
                Stainless Steel
              </h4>
              <div className="inconel_products mt-3">
                <h5 style={{ fontSize: "1.3rem" }}>
                  <i class="fa-solid fa-angle-right text-white mx-2"></i>
                  904L, Alloy-20, SMO 254, A-286, 253-MA.
                </h5>
              </div>
              <h4 className="heading_4 mt-5">
                <i class="fa-solid fa-caret-right text-white  mx-2"></i>
                Duplex & Super Duplex Stainless Steel
              </h4>
              <div className="inconel_products mt-3">
                <h5 style={{ fontSize: "1.3rem" }}>
                  <i class="fa-solid fa-angle-right text-white mx-2"></i>
                  Duplex 2205 Super Duplex 2507 & Other
                </h5>
              </div>
            </div>
          </div>
          <div key={4}>
            <div className="products_cart4">
              <div className="product_heading">
                <h4>Hard to Find Alloys</h4>
              </div>

              <div className="Titanium_Alloys_products">
                <h5>
                  <i class="fa-solid fa-angle-right text-white mx-2"></i>{" "}
                  Tantalum
                </h5>
                <h5>
                  <i class="fa-solid fa-angle-right text-white  mx-2"></i>{" "}
                  Niobium
                </h5>
                <h5>
                  <i class="fa-solid fa-angle-right text-white  mx-2"></i>
                  Tungsten
                </h5>
                <h5>
                  <i class="fa-solid fa-angle-right text-white  mx-2"></i>{" "}
                  Molybdenum
                </h5>
                <h5>
                  <i class="fa-solid fa-angle-right text-white  mx-2"></i>{" "}
                  Rhenium
                </h5>
                <h5>
                  <i class="fa-solid fa-angle-right text-white  mx-2"></i>{" "}
                  Hardox
                </h5>

                <h5>
                  <i class="fa-solid fa-angle-right text-white  mx-2"></i>{" "}
                  Hafnium
                </h5>
                <h5>
                  <i class="fa-solid fa-angle-right text-white  mx-2"></i>{" "}
                  Gallium
                </h5>
                <h5>
                  <i class="fa-solid fa-angle-right text-white  mx-2"></i>{" "}
                  Germanium
                </h5>
                <h5>
                  <i class="fa-solid fa-angle-right text-white  mx-2"></i>{" "}
                  Indium
                </h5>
                <h5>
                  <i class="fa-solid fa-angle-right text-white  mx-2"></i>{" "}
                  Vanadium
                </h5>
                <h5>
                  <i class="fa-solid fa-angle-right text-white  mx-2"></i>{" "}
                  Beryllium Copper
                </h5>
              </div>
            </div>
          </div>
        </Slider>

        {/* <div className='Slider_controler'>
       <button className="button" onClick={this.previous}>
       
       </button>
       <button className="button" onClick={this.next}>
       <i className="fa-solid fa-angle-right"  onClick={this.next}/>
       </button>
       </div>
      </div> */}
      </div>
    );
  }
}
