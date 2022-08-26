import React, { useState,Component } from "react";
import Slider from "react-slick";
import './Testimonial.css'
import { ReviewSlider } from "../../../../Constants/Data/sliderData";
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
export default class ReviewSlide extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  state = {
    isReadMore: true,
  
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
      //  autoplay: true,
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
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,
          
          },
          
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    
    // const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      if(this.state.isReadMore==true){
        this.setState({isReadMore:false})
      }else{
        this.setState({isReadMore:true})
      }
     
    
    };
    return (
      <div>
        <Slider {...settings}>

        {ReviewSlider.map((item)=>{
          return(
            <div key={item.id} className="reviewSlider">
          <div className="review_container">
          <i class="fa-solid fa-quote-right"></i>
          <img src ={item.img} alt=''></img>
                 <h4>{item.name}</h4>
                 <p>
                   {item.text}
                 </p>
                

          </div>
          </div>
          )})}
      
         
        </Slider>

       
      </div>
    );
  }
}