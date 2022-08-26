import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

// import { Carousel  } from 'react-bootstrap';
import slide from "../../../../Constants/Images/homePageImg/img18.png";
import slide1 from "../../../../Constants/Images/homePageImg/brg1.jpg";
import slide2 from "../../../../Constants/Images/homePageImg/img15.png";
import slide3 from "../../../../Constants/Images/homePageImg/img2.png";
import slide4 from "../../../../Constants/Images/homePageImg/miximg1.png";
import "./SlideHome.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import {HomeSlider}  from "../../../../Constants/Data/sliderData";

const SliderHome = () => {
  const onChange = (event) => {
    console.log(event);
  };
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (

  
    <div className="Slide_container">
      <div className="carousel-wrapper">
        <Carousel autoPlay="true" onChange={onChange()}>

        {HomeSlider.map((item,index)=>{
return( <div>
  <img className="card-img-top" src={item.img} alt="Card image cap" />
  <div className="row Home_page_heading">
    <div className="col-md-6 col-6 content">
      <h3>
      {item.heading}
      </h3>
      <p>
        {item.text}
      </p>
      <Link  to="/contact">  <button className="button_home" role="button"> Get Started</button></Link>
    </div>
    <div className="col-md-6 col-6" >
             <img src={slide4} style={{ transform: "rotate(180deg)"}} className="img-fluid" alt=""></img>
    </div>
  </div>
</div>
)
    }) }
       
        </Carousel>
      </div>
      {/* <Carousel fade style={{}}>
    <Carousel.Item className='slideImg'>
      <img
        className="d-block w-100 h-90"
        src={slide}
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item className='slideImg'>
      <img
        className="d-block w-100 h-90"
        src={slide3}
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item className='slideImg'>
      <img
        className="d-block w-100 h-90"
        src={slide4}
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item className='slideImg'>
      <img
        className="d-block w-100"
        src={slide1}
        alt="Second slide"
      />
  
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item className='slideImg'>
      <img
        className="d-block w-100"
        src={slide2}
        alt="Third slide"
      />
  
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel> */}
    </div>
  );
};

export default SliderHome;
