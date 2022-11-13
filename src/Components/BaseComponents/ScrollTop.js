import React, {useState} from 'react';
import './scrollTop.css'
// import {FaArrowCircleUp} from 'react-icons/fa';

  
const ScrollButton = () =>{
  
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  
  window.addEventListener('scroll', toggleVisible);
  
  return (
    <div className='scrollTopbtn' style={{display: visible ? 'inline' : 'none'}}><i class="fa-solid fa-sort-up scroll_icon"   onClick={scrollToTop} 
    ></i>
    </div>
  );
}
  
export default ScrollButton;