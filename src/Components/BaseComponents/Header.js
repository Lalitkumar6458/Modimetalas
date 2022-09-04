/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Routes, Route, Link ,useNavigate} from "react-router-dom";
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { SheetoptionData } from "../../Constants/Data/ProductData";
import { SearchData } from "../../Constants/Data/SearchData";

// import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
// import {colors} from './Constants/colors'
// import {boxShadow} from './Constants/styleData'
import logo from "../../Constants/Images/BaseImage/logo2.png";
import { ProductData } from "../../Constants/Data/ProductData";
import "./header.css";
const Header = () => {
  let navigate = useNavigate();
  const [searchShow, setSearchShow] = useState(false);
  const [contactInfoShow, setContactinfoShow] = useState(false);
  const [navbarShow, setNevbarShow] = useState(false);
  const [produtsShow, setProductsShow] = useState(false);
  const [mobileprodutsShow, setMobileProductsShow] = useState(false);
  const [mobileprodutsShowP, setMobileProductsShowP] =useState(false);
  const showSearchBar = () => {
    if (searchShow === false) {
      setSearchShow(true);
    } else {
      setSearchShow(false);
    }
  };
  const showContactBar = () => {
    if (contactInfoShow === false) {
      setContactinfoShow(true);
    } else {
      setContactinfoShow(false);
    }
  };
  const showNavBar = () => {
   
    if (navbarShow === false) {
      setNevbarShow(true);
    } else {
      setNevbarShow(false);
    }
  };
  const showProducts = () => {
   
    if (produtsShow === false) {
      setProductsShow(true);
    } else {
      setProductsShow(false);
    }
  };
  const showProductsMobile=()=>{
    
    if (mobileprodutsShow === false) {
      setMobileProductsShow(true);
    } else {
      setMobileProductsShow(false);
    }
  }
  const showProductsMobileP=()=>{
    
    if (mobileprodutsShowP === false) {
      setMobileProductsShowP(true);
    } else {
      setMobileProductsShowP(false);
    }
  }


  // const handleOnSearch = (string, results) => {
  //   // onSearch will have as the first callback parameter
  //   // the string searched and for the second the results.
  //   console.log(string, results)
  // }

  // const handleOnHover = (result) => {
  //   // the item hovered
  //   console.log(result)
  // }

  const handleOnSelect = (item) => {
    // the item selected
    // console.log(item)
    // alert("hello")
    navigate(item.link); 
    setSearchShow(false)


  }

  // const handleOnFocus = () => {
  //   console.log('Focused')
  // }

  const formatResult = (item) => {
    return (
      <>
      <div className="Search_result">
      <Link to={item.link}> 
        <span onClick={()=>alert("helli ")} style={{ display: 'block', textAlign: 'left' }}>{item.name}</span></Link> 
      </div>
     
      </>
    )
  }


  return (
    <div>
      <header className="header">
        <img src={logo} alt="logo_modi metals" />
        <nav className="navbar">
        <ul>
          <li> <Link to="/">home</Link></li>
          <li> <Link to="/about">about</Link></li>
          <li> <Link to="/productModi">Products <i style={{marginLeft:"10px",}} class="fa-solid fa-chevron-down"></i></Link>
          <ul>
            {ProductData.map((item)=>{
              return(

                <li><Link to={item.link}> {item.heading}</Link></li>
              )
            })}
          
          </ul> 
          </li>
          <li>  <Link to="/products" onClick={()=> showProducts()}>Alloys<i style={{marginLeft:"10px",}} class="fa-solid fa-chevron-down"></i></Link>

          <ul>
            <li><Link to="/products/stainless_steel">Stainless Steel</Link></li>
            <li> <Link to="/products/mildSteel">Mild Steel</Link></li>
            <li> <Link to="/products/carbon_steel">Carbon Steel</Link></li>
            <li> <Link to="/products/high_nickel_alloys">High Nickel Alloys</Link></li>
            <li>  <Link to="/products/duplex_steel">Duplex Steels </Link></li>
            <li className="d-none">  <Link to="/products/stellite">Stellite</Link></li>
            <li className="d-none"><Link to="/products/welding_consumbles">Welding Consumables</Link></li>
            <li>  <Link to="/products/titanium_alloys">Titanium Alloys </Link></li>
            <li className="d-none">  <Link to="/products/nickel_fasteners">Nickel Alloys Fasteners</Link></li>
          </ul>
          
          </li>
          <li> <Link to="/gallery">Gallery</Link></li>
          <li> <Link to="/contact">contact</Link></li>
        </ul>
         
         
          {/* <div className="products">
          <Link to="/products" onClick={()=> showProducts()}>products<i style={{marginLeft:"10px",}} class={produtsShow ?'fa-solid fa-chevron-up':"fa-solid fa-chevron-down"}></i></Link>
          {produtsShow ?
          <div className="products_childs">
          <Link to="#">Stainless Steel</Link>
          <Link to="/products/mildSteel">Mild Steel</Link>
          <Link to="#home">Carbon Steel</Link>
          <Link to="#about">High Nickel Alloys</Link>
          <Link to="#home">Duplex Steels </Link>
          <Link to="#about">Stellite</Link>
          <Link to="#home">Welding Consumables</Link>
          <Link to="#about">Titanium Alloys </Link>
          <Link to="#home">Copper & Copper Alloys </Link>
          <Link to="#about">Nickel Alloys Fasteners</Link>
          </div>:null}
          </div>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">contact</Link> */}
        </nav>
        {navbarShow ? <nav className="navbar_mobile active ">
          <Link to="/" onClick={ ()=> setNevbarShow(false)}>home</Link>
          <Link to="/about" onClick={ ()=> setNevbarShow(false)}>about</Link>
          <Link to="/productModi"  onClick={()=> showProductsMobileP()}>Products <i class={mobileprodutsShowP?"fa-solid fa-minus":"fa-solid fa-plus"}></i></Link>
          {mobileprodutsShowP ?
          <div className="products_childs_mobile">
             {ProductData.map((item)=>{
              return (
                <Link to={item.link} onClick={ ()=> setNevbarShow(false)}>{item.heading}</Link>
              )
              
            })}
          
          
          </div>:null}


          <Link to="/products" onClick={()=> showProductsMobile()}>Alloys <i class={mobileprodutsShow?"fa-solid fa-minus":"fa-solid fa-plus"}></i></Link>
          {mobileprodutsShow ?
          <div className="products_childs_mobile">
          <Link to="/products/stainless_steel" onClick={ ()=> setNevbarShow(false)}>Stainless Steel</Link>
          <Link to="/products/mildSteel" onClick={ ()=> setNevbarShow(false)}>Mild Steel</Link>
          <Link to="/products/carbon_steel" onClick={ ()=> setNevbarShow(false)}>Carbon Steel</Link>
          <Link to="/products/high_nickel_alloys" onClick={ ()=> setNevbarShow(false)}>High Nickel Alloys</Link>
          <Link to="/products/duplex_steel" onClick={ ()=> setNevbarShow(false)}>Duplex Steels </Link>
          <Link className="d-none" to="/products/stellite" onClick={ ()=> setNevbarShow(false)}>Stellite</Link>
          <Link className="d-none" to="/products/welding_consumbles" onClick={ ()=> setNevbarShow(false)}>Welding Consumables</Link>
          <Link to="/products/titanium_alloys" onClick={ ()=> setNevbarShow(false)}>Titanium Alloys </Link>
          <Link className="d-none" to="#home" onClick={ ()=> setNevbarShow(false)} >Copper & Copper Alloys </Link>
          <Link className="d-none" to="/products/nickel_fasteners" onClick={ ()=> setNevbarShow(false)}>Nickel Alloys Fasteners</Link>
          </div>:null}
          <Link to="/gallery" onClick={ ()=> setNevbarShow(false)}>Gallery</Link>
          <Link to="/contact" onClick={ ()=> setNevbarShow(false)}>contact</Link>



        </nav>:null}
        

        <div className="icons">
          <div id="menu-btn" onClick={() => showNavBar()} className={ navbarShow ?'fas fa-times':" fas fa-bars"}></div>
          <div
            id="info-btn"
            onClick={() => showContactBar()}
            className="fas fa-info-circle"
          ></div>
          <div
            id="search-btn "
            onClick={() => showSearchBar()}
            className="fas fa-search"
          ></div>
          {/* <div id="login-btn" className="fas fa-user"></div> */}
        </div>
        {searchShow ? (
          <form action="" className="search-form">
            {/* <input
              type="search"
              name=""
              placeholder="search here..."
              id="search-box"
            /> */}
            <div className="Search_continer">
            <ReactSearchAutocomplete
            items={SearchData}
            // onSearch={handleOnSearch}
            // onHover={handleOnHover}
            onSelect={handleOnSelect}
            // onFocus={handleOnFocus}
            placeholder="Search Your Products Here"
            autoFocus
            formatResult={formatResult}
          />
            </div>
            
            {/* <label for="search-box" className="fas fa-search"></label> */}
          </form>
        ) : null}
      </header>

      {contactInfoShow ? (
        <div className="contact-info active">
          <div
            id="close-contact-info"
            onClick={() => showContactBar()}
            className="fas fa-times"
          ></div>

          <div className="info">
          <a href="tel:+91 9875782537" style={{textDecoration:'none'}}>    <i className="fas fa-phone"></i> </a> 
            <h3>phone number</h3>
           <a href="tel:+91 9875782537" style={{textDecoration:'none'}}><p>+91 9875782537</p></a> 
           <a href="tel:+91 9137130839" style={{textDecoration:'none'}}> <p>+91 9137130839 </p></a>
          </div>

          <div className="info">
          <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=modimetals1@gmail.com"  style={{textDecoration:'none'}}>  <i className="fas fa-envelope"></i></a>
            <h3>email address</h3>
           <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=modimetals1@gmail.com"  style={{textDecoration:'none'}}><p>modimetals1@gmail.com</p></a>
            <p>modimetals1@gmail.com</p>
          </div>

          <div className="info">
            <i className="fas fa-map-marker-alt"></i>
            <h3>office address</h3>
            <p>
              3rd Floor, Shop no.28 3rd, Prabhakar Building Lane Kamathipura
              Mumbai, Maharashtra 400008 India
            </p>
          </div>

          <div className="share">
            <Link to="#" className="fab fa-facebook-f"></Link>
            <Link to="#" className="fab fa-twitter"></Link>
            <Link to="#" className="fab fa-instagram"></Link>
            <a  href='https://wa.me/9875782537' className="fa-brands fa-whatsapp"></a>
          </div>
        </div>
      ) : null}



    </div>
  );
};

export default Header;
