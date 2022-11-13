import React from 'react'
import SliderHome from './SliderHome'
import AboutSections from './AboutSections'
import Products from './Products'
import OfferSection from './OfferSection'
import Testimonial from './Testimonial'
import ContactHome from './contactHome'
import ProductSec from './ProductSec'
import IndustriesServe from '../ProductsPage/productComponent/IndustriesServe'

const Home = () => {
  window.scrollTo({
    top: 0, 
    behavior: 'smooth'
    /* you can also use 'auto' behaviour
       in place of 'smooth' */
  });
  return (
    <div style={{}}>
<SliderHome/>
<AboutSections/>
<ProductSec/>
<Products/>
<OfferSection/>
<IndustriesServe/>
<Testimonial/>
<ContactHome/>
    </div>
  )
}

export default Home