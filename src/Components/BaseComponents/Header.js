/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { SheetoptionData } from "../../Constants/Data/ProductData";
import { SearchData } from "../../Constants/Data/SearchData";
import { SpecialAlloysgrade } from "../../Constants/Data/SpecialAlloys";

// import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
// import {colors} from './Constants/colors'
// import {boxShadow} from './Constants/styleData'
import logo from "../../Constants/Images/BaseImage/logo2.png";
import { ProductData } from "../../Constants/Data/ProductData";
import "./header.css";
import $ from "jquery";
const Header = () => {
  let navigate = useNavigate();
  const [searchShow, setSearchShow] = useState(false);
  const [contactInfoShow, setContactinfoShow] = useState(false);
  const [navbarShow, setNevbarShow] = useState(false);
  const [produtsShow, setProductsShow] = useState(false);
  const [mobileprodutsShow, setMobileProductsShow] = useState(false);
  const [mobileprodutsShowP, setMobileProductsShowP] = useState(false);
  const [manufShowP, setManufShowP] = useState(false);
  const [tradingShowP, setTradingShowP] = useState(false);
  const [pipeShowP, setPipeShowP] = useState(false);
  const [flangeShowP, setFlangeShowP] = useState(false);

  function showDropdown(drop_v, set_v) {
    if (drop_v === false) {
      set_v(true);
    } else {
      set_v(false);
    }
  }

  function setproductnav(setval) {
    if (setval == "Pipe Fittings") {
      showDropdown(pipeShowP, setPipeShowP);
    } else if (setval == "Flanges") {
      showDropdown(flangeShowP, setFlangeShowP);
    } else {
      return null;
    }
  }
  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setSearchShow(false);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  const handleOnSelect = (item) => {
    
    navigate(item.link);
    setSearchShow(false);
  };

  const formatResult = (item) => {
    return (
      <>
        <div className="Search_result">
          <Link to={item.link}>
            <span
              onClick={() => alert("helli ")}
              style={{ display: "block", textAlign: "left" }}
            >
              {item.name}
            </span>
          </Link>
        </div>
      </>
    );
  };

  return (
    <div>
      <header className="header">
        <img src={logo} alt="logo_modi metals" />
        <nav className="navbar">
          <ul>
            <li>
              {" "}
              <Link to="/" >home</Link>
            </li>
            <li>
              {" "}
              <Link to="/about">about</Link>
            </li>
            <li>
              {" "}
              <Link to="/productModi">
                Products{" "}
                <i
                  style={{ marginLeft: "10px" }}
                  class="fa-solid fa-chevron-down"
                ></i>
              </Link>
              <ul>
                <li>
                  <Link to="">
                    Manufacturing <i class="fa-solid fa-chevron-right"></i>
                  </Link>
                  <ul>
                    {ProductData.map((item) => {
                      if (item.id >= 7) {
                        return (
                          <li>
                            <Link to={item.link}>
                              {item.heading}
                              {item.heading == "Pipe Fittings" ||
                              item.heading == "Flanges" ? (
                                <i class="fa-solid fa-chevron-right"></i>
                              ) : null}
                            </Link>
                            {item.heading == "Pipe Fittings" ||
                            item.heading == "Flanges" ? (
                              <ul>
                                {item.child_data.map((item) => {
                                  return (
                                    <li>
                                      <Link to={item.link}>{item.heading}</Link>
                                    </li>
                                  );
                                })}
                              </ul>
                            ) : null}
                          </li>
                        );
                      } else {
                        return null;
                      }
                    })}
                  </ul>
                </li>
                <li>
                  <Link to="">
                    Trading <i class="fa-solid fa-chevron-right"></i>
                  </Link>
                  <ul>
                    {ProductData.map((item) => {
                      if (item.id <= 6) {
                        return (
                          <li>
                            <Link to={item.link}> {item.heading}</Link>
                          </li>
                        );
                      } else {
                        return null;
                      }
                    })}
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              {" "}
              <Link
                to="/products"
                onClick={() => showDropdown(produtsShow, setProductsShow)}
              >
                Special Alloys
                <i
                  style={{ marginLeft: "10px" }}
                  class="fa-solid fa-chevron-down"
                ></i>
              </Link>
              <ul>
                {SpecialAlloysgrade.map((item) => {
                  return (
                    <li>
                      <Link to={item.link}>{item.heading}</Link>
                    </li>
                  );
                })}
              </ul>
            </li>
            <li>
              {" "}
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              {" "}
              <Link to="/contact">contact</Link>
            </li>
          </ul>
        </nav>
        {navbarShow ? (
          <nav className="navbar_mobile active ">
            <ul className="mt-4">
              <li>
                {" "}
                <Link to="/"  onClick={() => setNevbarShow(false)}>Home</Link>
              </li>
              <li>
                {" "}
                <Link to="/about" onClick={() => setNevbarShow(false)}>About</Link>
              </li>
              <li>
                {" "}
                <Link
                  to="/productModi"
                  onClick={() =>
                    showDropdown(mobileprodutsShow, setMobileProductsShow)
                  }
                >
                  Products{" "}
                  <i
                    class={
                      mobileprodutsShow
                        ? "fa-solid fa-minus mx-2"
                        : "fa-solid fa-plus mx-2"
                    }
                  ></i>
                </Link>
                <ul
                  className={mobileprodutsShow ? "" : "d-none"}
                  style={{ background: "#082152" }}
                >
                  <li className="Manufacturing_c" setManufShowP>
                    <Link
                      to=""
                      onClick={() => showDropdown(manufShowP, setManufShowP)}
                    >
                      Manufacturing{" "}
                      <i
                        class={
                          manufShowP
                            ? "fa-solid fa-minus mx-2"
                            : "fa-solid fa-plus mx-2"
                        }
                      ></i>
                    </Link>
                    <ul className={manufShowP ? "" : "d-none"} style={{}}>
                      {ProductData.map((item) => {
                        if (item.id >= 7) {
                          return (
                            <li onClick={() =>
                              item.heading=="Nickel Fasteners"? setNevbarShow(false):null
                           }>
                              <Link
                                to={item.link}
                                onClick={() => setproductnav(item.heading)}
                              >
                                {" "}
                                {item.heading}{" "}
                                {item.heading == "Pipe Fittings" ||
                                item.heading == "Flanges" ? (
                                  <i
                                    class={
                                      item.heading == "Pipe Fittings"
                                        ? pipeShowP
                                          ? "fa-solid fa-minus mx-2"
                                          : "fa-solid fa-plus mx-2"
                                        : flangeShowP
                                        ? "fa-solid fa-minus mx-2"
                                        : "fa-solid fa-plus mx-2"
                                    }
                                  ></i>
                                ) : null}
                              </Link>
                              {item.heading === "Pipe Fittings" ? (
                                <ul
                                  className={pipeShowP == true ? "" : "d-none"}
                                  style={{}}
                                >
                                  {item.child_data.map((item) => {
                                    return (
                                      <li>
                                        {" "}
                                        <Link
                                          to={item.link}
                                          onClick={() => setNevbarShow(false)}

                                        
                                        >
                                          {" "}
                                          {item.heading}
                                        </Link>
                                      </li>
                                    );
                                  })}
                                </ul>
                              ) : null}

                              {item.heading === "Flanges" ? (
                                <ul
                                  className={
                                    flangeShowP == true ? "" : "d-none"
                                  }
                                  style={{}}
                                >
                                  {item.child_data.map((item) => {
                                    return (
                                      <li>
                                        {" "}
                                        <Link
                                          to={item.link}
                                          onClick={() => setNevbarShow(false)}
                                        >
                                          {" "}
                                          {item.heading}
                                        </Link>
                                      </li>
                                    );
                                  })}
                                </ul>
                              ) : null}
                            </li>
                          );
                        } else {
                          return null;
                        }
                      })}
                    </ul>
                  </li>
                  <li
                    onClick={() => showDropdown(tradingShowP, setTradingShowP)}
                  >
                    <Link to="/">
                      Trading{" "}
                      <i
                        class={
                          tradingShowP
                            ? "fa-solid fa-minus mx-2"
                            : "fa-solid fa-plus mx-2"
                        }
                      ></i>
                    </Link>
                    <ul
                      className={tradingShowP ? "" : "d-none"}
                      style={{ background: "#06183b" }}
                    >
                      {ProductData.map((item) => {
                        if (item.id <= 6) {
                          return (
                            <li>
                              <Link to={item.link} onClick={() => setNevbarShow(false)}> {item.heading}</Link>
                            </li>
                          );
                        } else {
                          return null;
                        }
                      })}
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                {" "}
                <Link
                  to="/products"
                  onClick={() => showDropdown(produtsShow, setProductsShow)}
                >
                  Special Alloys
                  <i
                    class={
                      produtsShow
                        ? "fa-solid fa-minus mx-2"
                        : "fa-solid fa-plus mx-2"
                    }
                  ></i>
                </Link>
                <ul
                  className={produtsShow ? "" : "d-none"}
                  style={{ background: "#082152" }}
                >
                  {SpecialAlloysgrade.map((item) => {
                    return (
                      <li>
                        <Link to={item.link} onClick={() => setNevbarShow(false)}>{item.heading}</Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
              <li>
                {" "}
                <Link to="/gallery" onClick={() => setNevbarShow(false)}>Gallery</Link>
              </li>
              <li>
                {" "}
                <Link to="/contact" onClick={() => setNevbarShow(false)}>contact</Link>
              </li>
            </ul>
          </nav>
        ) : null}

        <div className="icons">
          <div
            id="menu-btn"
            onClick={() => showDropdown(navbarShow, setNevbarShow)}
            className={navbarShow ? "fas fa-times" : " fas fa-bars"}
          ></div>
          <div
            id="info-btn"
            onClick={() => showDropdown(contactInfoShow, setContactinfoShow)}
            className="fas fa-info-circle"
          ></div>
          <div
            id="search-btn "
            onClick={() => showDropdown(searchShow, setSearchShow)}
            className="fas fa-search"
          ></div>
          {/* <div id="login-btn" className="fas fa-user"></div> */}
        </div>
        {searchShow ? (
          <form action="" className="search-form" ref={wrapperRef}>
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
            onClick={() => showDropdown(contactInfoShow, setContactinfoShow)}
            className="fas fa-times"
          ></div>

          <div className="info">
            <a href="tel:+91 9321271527" style={{ textDecoration: "none" }}>
              {" "}
              <i className="fas fa-phone"></i>{" "}
            </a>
            <h3>phone number</h3>
            <a href="tel:+91 9321271527" style={{ textDecoration: "none" }}>
              <p>+91 9321271527</p>
            </a>
        
            <a href="tel:+91 9930271527" style={{ textDecoration: "none" }}>
              {" "}
              <p>+91 9930271527 </p>
            </a>
          </div>

          <div className="info">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=modimetals1@gmail.com"
              style={{ textDecoration: "none" }}
            >
              {" "}
              <i className="fas fa-envelope"></i>
            </a>
            <h3>email address</h3>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=modimetals1@gmail.com"
              style={{ textDecoration: "none" }}
            >
              <p>modimetals1@gmail.com</p>
            </a>
            <p>sales@modimetals.in</p>
          </div>

          <div className="info">
            <i className="fas fa-map-marker-alt"></i>
            <h3>office address</h3>
            <p>
            OFFICE NO. 14, 1ST FLOOR, 103/105 J.P. BUILDING, 3RD KUMBHARWADA LANE, MUMBAI - 400004, MAHARASHTRA, INDIA
            </p>
          </div>

          <div className="share">
            {/* <i class="fa-brands fa-facebook-f"></i> */}

            <a
              href="https://www.linkedin.com/in/modi-metals-5a1ba9200"
              className="fa-brands fa-linkedin-in"
              target="_blank"
            ></a>
            <a
              href="https://twitter.com/MODI_METALS?t=_5ujRniaI6uWXLPosEmdJw&s=09"
              className="fab fa-twitter"
              target="_blank"
            ></a>
            <a
              href="https://www.instagram.com/invites/contact/?i=1x8zwnbbom1f1&utm_content=mh9pec9"
              className="fab fa-instagram"
              target="_blank"
            ></a>
            <a
              href="https://wa.me/+919321271527"
              className="fa-brands fa-whatsapp"
              target="_blank"
            ></a>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Header;
