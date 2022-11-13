import React from 'react'
import './AboutSection.css'
import { Link } from "react-router-dom";

import '../../../../Constants/Images/BaseImage/aboutimg.jpg'
import sideimg from'../../../../Constants/Images/BaseImage/aboutsideImg.png'

const AboutSections = () => {
  return (
   <section className='About_sections'>
<div className='heading'>
    <div className='line_before'></div>
<h3 className='headinng_text'>WHO WE ARE</h3>
<div className='line_after'></div>
</div>

<div className='aboutContent'>
    <div className='row'>

        <div className='col-md-7 about_left'>

        <h2>About The Company</h2>
    <p >
<span>Modi Metals</span>It was in 2021 that we at Modi Metals forayed into the market as the leading manufacturer, supplier and exporter of metal products. Some of the bestselling products that we offer for our clients are metal pipes and bars, metal sheets, welding consumables, etc. We are based in Mumbai.
Our range of products is known for their superior strength, longer life span and versatile applications across various sectors including Aerospace, Defence, Fertilizer, Chemicals, Petrochemical Dairy, Refinery, Oil and Gas, Nuclear Power, Solar Power, etc.</p>
<button className="button-64" role="button"><span className="text"><Link to='/about'>Read More..</Link></span></button>
        </div>
        <div className='col-md-5 mt-5 ' style={{ display:" flex",
   flexDirection:" column",
   alignItems:" center",
    justifyContent: "center"}}>
        <img className="card-img-top" src={sideimg} alt="Card image cap" />
        </div>
    </div>
    
</div>
   </section>
  )
}

export default AboutSections